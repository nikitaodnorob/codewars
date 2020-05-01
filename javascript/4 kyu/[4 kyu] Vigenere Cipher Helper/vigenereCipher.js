// Vigenère Cipher Helper

function VigenèreCipher(key, abc) {
    this.encode = function (str) {
        return str.split("").map(
            (c, i) => abc.includes(c)
                ? abc[(abc.indexOf(c) + abc.indexOf(key[i % key.length])) % abc.length]
                : c
        ).join("");
    };
    this.decode = function (str) {
        return str.split("").map(
            (c, i) => abc.includes(c)
                ? abc[(abc.length + abc.indexOf(c) - abc.indexOf(key[i % key.length])) % abc.length]
                : c
        ).join("");
    };
}
