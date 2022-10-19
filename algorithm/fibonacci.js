// recursion
function fib(n) {
    if (n < 3) {
        return 1;
    }
    else {
        return fib(n - 1) + fib(n - 2);
    }
}

console.log(fib(10));

// loop

function fib(n) {
    let current = 1;
    let prev = 1;
    if (n < 3) {
        return 1;
    }
    else {
        
        for (let i = 2; i < n; i++){
            let next = current + prev;
            prev = current;
            current = next;
        }
    }
    return current;
}

fib(10);