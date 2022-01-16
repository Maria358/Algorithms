let array = [1, 3, 11, 1, 6, 24, 12, 3, 3];
let count = 0;

function linearSearch(array, item) {
    for (let i = 0; i <= array.length; i++) {
        count += 1;
        if (array[i] === item) {
            return i;
        }
    }
    return null;
}

console.log(linearSearch(array, 243))
console.log("count: ", count)