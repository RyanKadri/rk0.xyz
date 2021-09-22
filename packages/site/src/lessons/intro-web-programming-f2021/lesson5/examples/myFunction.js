function sumOfMultiples(upperBound) {
    let sum = 0;
    for(let i = 1; i < upperBound; i++) {
        if(i % 3 === 0) {
            sum += i;
        } else if(i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

function fibonnacciSum(upperBound = 4000000) {
    let sum = 0;
    let curr = 1;
    let prev = 1;
    let next = 0;
    while(curr <= upperBound) {
        if(curr % 2 === 0) {
            sum += curr;
        }
        next = curr + prev;
        prev = curr;
        curr = next;
    }
    return sum;
}
