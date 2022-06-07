/**
 * description:
 * - 画面表示直後にonLoad()が呼び出される
 * - OKボタンでupdateText()が呼び出される
 * - テロップタイプの切り替えでtelopTypeDropdownClicked()が呼び出される
 * - drawLoop()が常に回っていて、パラメータの取得と更新も毎フレーム行われる
 * - ただし、テキストとテロップタイプの更新はイベントで行われる
 **/

/*** ユーティリティ ***/
//自然数のみを切り出す
function toN(str) {
  const pattern = /\d+/;
  const ret = pattern.exec(str);
  return ret ? ret[0] : null;
}

//自然数かチェックと切り出し
function checkN(str) {
  const pattern = /^\d+$/;
  const ret = pattern.exec(str);
  return ret ? ret[0] : null;
}

function toPx(val) {
  return val + "px";
}

//カラーコード文字列のチェックと切り出し
function checkColor(str) {
  const pattern = /^#[0-9a-fA-F]{6}$/;
  const ret = pattern.exec(str);
  return ret ? ret[0] : null;
}

function toUrl(str) {
  return "url(" + str + ")";
}

/********************/

//ここでテロップ選択のリストを定義
//新しいテロップクラスを追加したらここに追加する
function getTelopTypes() {
  return [
    { name: "シンプル", class: SimpleTelop },
    { name: "シンプルランダム", class: SimpleRandomTelop }
  ];
}

/********************/

//DrawLoopが回っているのでパラメータはイベントを使わずに回収する方針
class TelopState {
  constructor() {
    //設定UIに埋まっている初期値はこの初期化で使っている値になる
    this.textColor = "#FFFFFF";
    this.bgColor = "#888888";

    const e = $("#output-text");
    this.width = e.width();
    this.height = e.height();
    this.fontSize = toN(e.css("font-size"));

    this.textLines = [];
    this.currentTextIndex = 0;
    this.currentText = this.textLines[0];

    this.fps = 8;

    //設定値の正常フラグ
    this.ok = true;

    this.InputBGInvalidValueColor = "#FF8888";
    this.CollectBGInvalidValueColor = "#FFFFFF";
  }

  updateUI() {
    $("#input-color").val(this.textColor);
    $("#input-bg-color").val(this.bgColor);
    $("#input-width").val(this.width);
    $("#input-height").val(this.height);
    $("#input-fps").val(this.fps);
    $("#input-font-size").val(this.fontSize);
  }

  retrieveUI() {
    this.textColor = checkColor($("#input-color").val());
    this.bgColor = checkColor($("#input-bg-color").val());
    this.width = checkN($("#input-width").val());
    this.height = checkN($("#input-height").val());
    this.fps = checkN($("#input-fps").val());
    this.fps = this.fps > 30 ? null : this.fps; //最大30とする
    this.fontSize = checkN($("#input-font-size").val());
  }

  retrieveText() {
    const text = $("#input-text").val();
    this.textLines = text.split(/\n/);
  }

  _checkAndNotifyInput(id, value) {
    const e = $(id);
    if (value != null) {
      e.css("background-color", this.CollectBGInvalidValueColor);
    } else {
      e.css("background-color", this.InputBGInvalidValueColor);
      this.ok = false;
    }
  }

  checkUIValue() {
    this.ok = true;
    this._checkAndNotifyInput("#input-color", this.textColor);
    this._checkAndNotifyInput("#input-bg-color", this.bgColor);
    this._checkAndNotifyInput("#input-width", this.width);
    this._checkAndNotifyInput("#input-height", this.height);
    this._checkAndNotifyInput("#input-fps", this.fps);
    this._checkAndNotifyInput("#input-font-size", this.fontSize);
  }

  updateTelopSize() {
    const e = $("#output-text");
    e.width(this.width);
    e.height(this.height);
  }
}

class Renderer {
  constructor(e) {
    this.e = e;
    this.width = 0;
    this.height = 0;
    this.fps = 0;
    this.startDate = new Date();
  }

  draw(state, telop) {
    const currentTime = new Date() - this.startDate;
    telop.draw(currentTime, state);
  }

  updateTelopSize(width, height) {
    this.width = width;
    this.height = height;
    this.e.width(this.width);
    this.e.height(this.height);
  }

  clearDOM() {
    this.e.html("");
  }

  reset() {
    this.startDate = new Date();
  }
}

function drawLoop(state, renderer, telop) {
  state.retrieveUI();
  telop.retrieveExtUI();

  state.checkUIValue();
  telop.checkExtUIValue();

  //値が不正な時は更新しない
  if (!(state.ok && telop.ok)) {
    return;
  }

  //fpsが変わった時だけDrawLoopを作り直す
  if (renderer.fps != state.fps) {
    resetDrawLoop(state, renderer, telop);
    return;
  }

  //サイズが変わったときの処理
  //テロップに対するbodyのpadding-topの更新があるので
  //rendererだけの責務にする事が微妙なためここに実装
  if (renderer.width != state.width || renderer.height != state.height) {
    renderer.updateTelopSize(state.width, state.height);
    $("body").css("padding-top", toPx(state.height));
  }

  //描画
  renderer.draw(state, telop);
}

window.gDrawLoopID = null;
function resetDrawLoop(state, renderer, telop) {
  if (window.gDrawLoopID) {
    clearInterval(window.gDrawLoopID);
  }
  renderer.fps = state.fps;
  const intervalTime = (1.0 / renderer.fps) * 1000;
  window.gDrawLoopID = setInterval(
    drawLoop,
    intervalTime,
    state,
    renderer,
    telop
  );
}

/**** テロップタイプのドロップダウンの初期化 ****************/

function telopTypeDropdownClicked(name, telopClass, renderer, state) {
  renderer.reset();
  const telop = new telopClass(renderer);
  telop.initTelop(state);
  telop.initExtUI($("#input-extra-params"));
  telop.updateExtUI();
  resetDrawLoop(state, renderer, telop);

  $("#selected-telop-type-text").html(name);

  //キャプチャされたtelopが更新されたのでイベントリスナーを作り直す
  registerUpdateTextEvent(state, renderer, telop);
}

function initTelopTypeDropdown(renderer, state) {
  const telopTypes = getTelopTypes();
  const ul = $("#select-telop-type-ul");

  telopTypes.forEach(item => {
    const li = $("<li>");
    const a = $("<a>");
    a.prop("href", "#");
    a.html(item["name"]);
    a.on("click", () => {
      telopTypeDropdownClicked(item["name"], item["class"], renderer, state);
    });
    li.prop("role", "presentation");
    li.append(a);
    ul.append(li);
  });
}

/**** テキストの更新 ****************/

function updateText(state, renderer, telop) {
  state.retrieveText();
  renderer.reset();
  telop.onTextUpdate(state);
}

function registerUpdateTextEvent(state, renderer, telop) {
  const e = $("#input-button-text-ok");
  e.off("click");
  e.on("click", () => {
    updateText(state, renderer, telop);
  });
}

/**** 初期化 ****************/

//画面表示と同時にdrawLoopが走り出す
function onLoad() {
  const state = new TelopState();
  state.retrieveText();
  state.updateUI();
  const renderer = new Renderer($("#output-text"));

  initTelopTypeDropdown(renderer, state);

  const telopType = getTelopTypes()[0];

  const telop = new telopType.class(renderer);
  telop.initTelop(state);
  telop.initExtUI($("#input-extra-params"));
  telop.updateExtUI();

  resetDrawLoop(state, renderer, telop);

  $("#selected-telop-type-text").html(telopType.name);
  registerUpdateTextEvent(state, renderer, telop);
}

$(() => {
  onLoad();
});

/**** Base Class ****************/
class BaseTelop {
  //引数はレンダラー
  constructor(renderer) {
    this.renderer = renderer;
    this.ok = true;
    this.InputBGInvalidValueColor = "#FF8888";
    this.CollectBGInvalidValueColor = "#FFFFFF";
  }

  // 派生クラスは以下のメソッドを実装すること
  // 実装の先頭でこのクラスのメソッドを呼び出すこと
  // >>>> ここから

  //テロップ領域の初期化を行う
  initTelop(state) {
    this.renderer.clearDOM();
  }
  //テロップ個別のUIを設置する。parentはdivタグ
  initExtUI(parent) {
    this._clearExtUI(parent);
  }
  //テロップ個別のUIをパラメータで更新する
  updateExtUI() {}
  //テロップ個別のUIの値を取得する
  retrieveExtUI() {}
  //テロップ個別のパラメータのチェック
  //異常があればthis.okをfalseにする
  checkValue() {
    this._initCheck();
  }
  //描画処理をここに実装するtimeMsは開始からのミリ秒
  draw(timeMs, state) {}
  //テキストが更新されたときの処理
  onTextUpdate(state) {}

  // <<< ここまで

  _clearExtUI(parent) {
    parent.html("");
  }

  _initCheck() {
    this.ok = true;
  }

  //valueがnullのときokフラグをfalseにしてidの背景を警告色にする
  checkAndNotifyInput(id, value) {
    const e = $(id);
    if (value != null) {
      e.css("background-color", this.CollectBGInvalidValueColor);
    } else {
      e.css("background-color", this.InputBGInvalidValueColor);
      this.ok = false;
    }
  }
}

/**** Simple **********************/
/**
 * テキストをkeepTime秒ごとに繰り返し切り替えるだけのテロップ
 **/
class SimpleTelop extends BaseTelop {
  constructor(renderer) {
    super(renderer);
    this.target = null;

    this.keepTime = 2;
    this.bold = false;

    this.prevChangedTimeMs = 0;
    this.currentIndex = 0;
  }

  initTelop(state) {
    super.initTelop(state);

    this.target = $("<div>");
    this.renderer.e.append(this.target);

    this.target.css("text-align", "center");

    this._updateVariableStyles(this.target, state);

    this.target.html(state.textLines[this.currentIndex]);
  }

  initExtUI(parent) {
    super.initExtUI(parent);

    parent.html(
      `
<div class="input-element">
	<p>表示時間：</p>
	<input id="input-keep-time">秒
</div>

<div class="input-element">
	<p>背景画像:</p>
  <input type="file" id="input-bg-image" accept="image/*">
</div>

<div class="input-element">
	<p>太字：</p>
	<button type="button" id="input-bold-on" class="btn btn-primary" data-toggle="button" autocomplete="off">太字
</div>
`
    );
    //背景画像のロード処理
    const inputBg = $("#input-bg-image");
    inputBg.change(e => {
      const file = inputBg.prop("files")[0];

      const fileReader = new FileReader();

      fileReader.onload = e => {
        const dataURI = e.currentTarget.result;
        this.target.css("background-image", toUrl(dataURI));
        console.log("hoge");
      };

      fileReader.readAsDataURL(file);
    });

    //背景画像用のスタイルの設定
    this.target.css("background-size", "cover");
  }

  updateExtUI() {
    super.updateExtUI();

    $("#input-keep-time").val(this.keepTime);
  }

  retrieveExtUI() {
    super.retrieveExtUI();

    const timeStr = $("#input-keep-time").val();
    this.keepTime = checkN(timeStr);

    this.bold = $("#input-bold-on")
      .prop("class")
      .split(/ /)
      .includes("active");
  }

  checkExtUIValue() {
    super.checkValue();

    super.checkAndNotifyInput("#input-keep-time", this.keepTime);
  }

  _updateVariableStyles(e, state) {
    e.css("font-weight", this.bold ? "bold" : "normal");
    e.css("line-height", toPx(state.height));
    e.css("color", state.textColor);
    e.css("background-color", state.bgColor);
    e.css("font-size", toPx(state.fontSize));
  }

  draw(timeMs, state) {
    this._updateVariableStyles(this.target, state);

    const keepTimeMs = this.keepTime * 1000;
    if (this.prevChangedTimeMs + keepTimeMs < timeMs) {
      this.prevChangedTimeMs = timeMs;
      this.currentIndex += 1;
      this.currentIndex %= state.textLines.length;
    }

    this.target.html(state.textLines[this.currentIndex]);
  }

  onTextUpdate(state) {
    this.prevChangedTimeMs = 0;
    this.currentIndex = 0;
  }
}

/**** SimpleRandomTelop **********************/
/**
 * テロップタイプ切り替えテストのための簡易的な派生クラス
 **/
class SimpleRandomTelop extends SimpleTelop {
  constructor(renderer) {
    super(renderer);
    this.randLines = null;
  }

  initTelop(state) {
    super.initTelop(state);

    this.randLines = this._randomizedLines(state.textLines);
  }

  draw(timeMs, state) {
    this._updateVariableStyles(this.target, state);

    const keepTimeMs = this.keepTime * 1000;
    if (this.prevChangedTimeMs + keepTimeMs < timeMs) {
      this.prevChangedTimeMs = timeMs;
      this.currentIndex += 1;
      if (this.currentIndex >= this.randLines.length) {
        this.currentIndex = 0;
        this.randLines = this._randomizedLines(state.textLines);
      }
    }

    this.target.html(this.randLines[this.currentIndex]);
  }

  onTextUpdate(state) {
    super.onTextUpdated(state);

    this.randLines = this._randomizedLines(state.textLines);
  }

  _randomizedLines(textLines) {
    const dup = textLines.slice();
    for (let i = 0; i < dup.length; i++) {
      const pos = i + parseInt(Math.random() * (dup.length - i));
      //swap
      const tmp = dup[pos];
      dup[pos] = dup[i];
      dup[i] = tmp;
    }
    return dup;
  }
}
