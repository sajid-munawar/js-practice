function sumFibs(num) {
    var a = 1, b = 1, sum = 1;
    while (b <= num) {
        if (b % 2 !== 0) {
            sum += b;
        }
        let temp = b;
        b += a;
        a = temp;
    }
    return sum;
}

console.log(sumFibs(4));