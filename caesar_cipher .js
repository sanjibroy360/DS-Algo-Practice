// Encryption

function caesarCipher(str, shift) {
  let cipherText = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      cipherText += encryptCaps(str[i], shift);
    } else if (str[i] >= "a" && str[i] <= "z") {
      cipherText += encryptSmall(str[i], shift);
    } else {
      cipherText += str[i];
    }
  }
  return cipherText;
}

function encryptCaps(ch, n) {
  let asciiVal = ch.charCodeAt(0) + n;

  if (asciiVal > 90) {
    asciiVal = 64 + (asciiVal % 90);
  }

  return String.fromCharCode(asciiVal);
}

function encryptSmall(ch, n) {
  let asciiVal = ch.charCodeAt(0) + n;

  if (asciiVal > 122) {
    asciiVal = 96 + (asciiVal % 122);
  }

  return String.fromCharCode(asciiVal);
}

// Decryption

function decipher(str, shift) {
  let cipherText = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      cipherText += decryptCaps(str[i], shift);
    } else if (str[i] >= "a" && str[i] <= "z") {
      cipherText += decryptSmall(str[i], shift);
    } else {
      cipherText += str[i];
    }
  }
  return cipherText;
}

function decryptCaps(ch, n) {
  return String.fromCharCode(((ch.charCodeAt(0) - 65 - n + 26) % 26) + 65);
}

function decryptSmall(ch, n) {
  return String.fromCharCode(((ch.charCodeAt(0) - 97 - n + 26) % 26) + 97);
}

// ...
let shift = 23;
let str1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let str2 = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG";

console.log(caesarCipher(str1, shift));
console.log(caesarCipher(str2, shift));
