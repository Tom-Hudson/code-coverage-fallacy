const add = (n) => {
    const a = n + 1;
    const b = n * n;
    const c = n + n + n;
    const d = n + 7;

    return {
        a,
        b,
        c,
        d
    };
}

module.exports = { add }