const UiohookKey = {
  Backspace: 14,
  Tab: 15,
  Enter: 28,
  CapsLock: 58,
  Escape: 1,
  Space: 57,
  PageUp: 3657,
  PageDown: 3665,
  End: 3663,
  Home: 3655,
  ArrowLeft: 57419,
  ArrowUp: 57416,
  ArrowRight: 57421,
  ArrowDown: 57424,
  Insert: 3666,
  Delete: 3667,
  0: 11,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  5: 6,
  6: 7,
  7: 8,
  8: 9,
  9: 10,
  A: 30,
  B: 48,
  C: 46,
  D: 32,
  E: 18,
  F: 33,
  G: 34,
  H: 35,
  I: 23,
  J: 36,
  K: 37,
  L: 38,
  M: 50,
  N: 49,
  O: 24,
  P: 25,
  Q: 16,
  R: 19,
  S: 31,
  T: 20,
  U: 22,
  V: 47,
  W: 17,
  X: 45,
  Y: 21,
  Z: 44,
  Numpad0: 82,
  Numpad1: 79,
  Numpad2: 80,
  Numpad3: 81,
  Numpad4: 75,
  Numpad5: 76,
  Numpad6: 77,
  Numpad7: 71,
  Numpad8: 72,
  Numpad9: 73,
  NumpadMultiply: 55,
  NumpadAdd: 78,
  NumpadSubtract: 74,
  NumpadDecimal: 83,
  NumpadDivide: 3637,
  //   NumpadEnd: number,
  //   NumpadArrowDown: number,
  //   NumpadPageDown: number,
  //   NumpadArrowLeft: number,
  //   NumpadArrowRight: number,
  //   NumpadHome: number,
  //   NumpadArrowUp: number,
  //   NumpadPageUp: number,
  //   NumpadInsert: number,
  //   NumpadDelete: number,
  F1: 59,
  F2: 60,
  F3: 61,
  F4: 62,
  F5: 63,
  F6: 64,
  F7: 65,
  F8: 66,
  F9: 67,
  F10: 68,
  F11: 87,
  F12: 88,
  F13: 91,
  F14: 92,
  F15: 93,
  F16: 99,
  F17: 100,
  F18: 101,
  F19: 102,
  F20: 103,
  F21: 104,
  F22: 105,
  F23: 106,
  F24: 107,
  Semicolon: 39,
  Equal: 13,
  Comma: 51,
  Minus: 12,
  Period: 52,
  Slash: 53,
  Backquote: 41,
  BracketLeft: 26,
  Backslash: 43,
  BracketRight: 27,
  Quote: 40,
  Ctrl: 29,
  CtrlRight: 3613,
  Alt: 56,
  AltRight: 3640,
  Shift: 42,
  ShiftRight: 54,
  Meta: 3675,
  MetaRight: 3676,
  NumLock: 69,
  ScrollLock: 70,
  PrintScreen: 3639,
};

function findKey(obj, value, compare = (a, b) => a === b) {
  return Object.keys(obj).find((k) => compare(obj[k], value));
}
window.onGlobalKeyBoard = (type, value, ctrlKey) => {
  const text = document.querySelector("#text");
  const imgElement = document.getElementById("ikun");
  const keyName = findKey(UiohookKey, value);
  // 键盘按下--张嘴
  if (1 === type) {
    imgElement.src = "assets/imgs/cai2.png";
    text.innerHTML = keyName;

    if (keyName === "J") {
      loadMusic(`assets/audios/${ctrlKey ? "ngm" : "j"}.mp3`);
    }
    if (keyName === "N") {
      loadMusic("assets/audios/n.mp3");
    }
    if (keyName === "T") {
      loadMusic("assets/audios/t.mp3");
    }
    if (keyName === "M") {
      loadMusic("assets/audios/m.mp3");
    }
  }
  // 键抬起-闭嘴
  if (2 === type) {
    imgElement.src = "assets/imgs/cai1.png";
    setTimeout(() => {
      text.innerHTML = "";
    }, 1000);
  }
};

const loadMusic = function (url) {
  var mp3 = new Audio(url); // 创建音频对象
  mp3.play(); // 播放
};
