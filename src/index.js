const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let exprClone = expr.split("");
  let arrMorse = [];
  let result = "";

  while (exprClone.length) {
    let el = exprClone.splice(0, 2).join("");
    if (el === "10") arrMorse.push(".");
    if (el === "11") arrMorse.push("-");
    if (el === "00") arrMorse.push("00");
    if (el === "**") arrMorse.push("");
  }

  while (arrMorse.length) {
    let el = arrMorse.splice(0, 5).join("").split("00").join("");
    if (!el) result += " ";
    if (el in MORSE_TABLE) result += MORSE_TABLE[el];
  }

  return result;
}

module.exports = {
  decode,
};
