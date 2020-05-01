// Adding Big Numbers

function add(a, b) {
    const maxLen = Math.max(a.length, b.length);
    a = a.padStart(maxLen, "0"); b = b.padStart(maxLen, "0");
    let excess = 0;

    const res = [...new Array(maxLen).keys()].map((el, i) => {
        const s = parseInt(a[maxLen - i - 1]) + parseInt(b[maxLen - i - 1]) + excess;
        excess = s > 9 ? 1 : 0;
        return s % 10;
    });
    if (excess === 1) res.push(1);
    return res.reverse().join("");
}
