/*
 *
 * (유니코드) 한글 = 0xAC00 + (초성 * 21 * 28) + (중성 * 28) + (종성)
 *
 *      0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27
 * 초성 ㄱ ㄲ ㄴ ㄷ ㄸ ㄹ ㅁ ㅂ ㅃ ㅅ ㅆ ㅇ ㅈ ㅉ ㅊ ㅋ ㅌ ㅍ ㅎ 
 * 중성 ㅏ ㅐ ㅑ ㅒ ㅓ ㅔ ㅕ ㅖ ㅗ ㅘ ㅙ ㅚ ㅛ ㅜ ㅝ ㅞ ㅟ ㅠ ㅡ ㅢ ㅣ 
 * 종성 -  ㄱ ㄲ ㄳ ㄴ ㄵ ㄶ ㄷ ㄹ ㄺ ㄻ ㄼ ㄽ ㄾ ㄿ ㅀ ㅁ ㅂ ㅄ ㅅ ㅆ ㅇ ㅈ ㅊ ㅋ ㅌ ㅍ ㅎ
 *
 *
 */
initialConsonant = function(hangul) {
  var unicode = Math.floor((hangul.charCodeAt(0) - 0xAC00) / 21 / 28);
  var ret = String.fromCharCode(unicode + 0x1100);
  return ret;
}

medialConsonant = function(hangul) {
  var unicode = Math.floor((hangul.charCodeAt(0) - 0xAC00) / 28) % 21;
  var ret = String.fromCharCode(unicode + 0x1161);
  return ret;
}

medialConsonantFirst = function(hangul) {
  var unicode = Math.floor((hangul.charCodeAt(0) - 0xAC00) / 28) % 21;
  if (unicode >= 9 && unicode <= 11) {
    unicode = 8;
  } else if (unicode >= 14 && unicode <= 16) {
    unicode = 13;
  } else if (unicode == 19) {
    unicode = 18;
  }
  var ret = String.fromCharCode(unicode + 0x1161);
  return ret;
}
medialConsonantSecond = function(hangul) {
  var unicode = Math.floor((hangul.charCodeAt(0) - 0xAC00) / 28) % 21;
  if (unicode >= 9 && unicode <= 10) {
    unicode -= 9;
  } else if (unicode == 11 || unicode == 16 || unicode == 19) {
    unicode = 20;
  } else if (unicode >= 14 && unicode <= 15) {
    unicode -= 10;
  } else {
    return null;
  }
  var ret = String.fromCharCode(unicode + 0x1161);
  return ret;
}

finalConsonant = function(hangul) {
  var unicode = (hangul.charCodeAt(0) - 0xAC00) % 28;
  var ret = String.fromCharCode(unicode + 0x11A8 - 1);
  return ret;
}

mergeConsonant = function(initial, medial, final) {
  initial -= 0x1100;
  medial -= 0x1161;
  final -= 0x11A7;

  var unicode = initial * 21 * 28 + medial * 28 + final;
  var ret = String.fromCharCode(0xAC00 + unicode);
  return ret;
}
