function sumFibs(num) {
    var a = 1, b = 1, c = 0;
    while (b <= num) {
        if (b % 2 !== 0) {
            c += b;
        }
        b += a;
        a = b - a;
    }
    return c;
}

console.log(sumFibs(10));