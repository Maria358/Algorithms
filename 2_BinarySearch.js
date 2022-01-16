let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let count = 0;

function BinarySearch(array, item) {
    let start = 0;
    let end = array.length
    let middle;
    let isFound = false;
    let position = -1;

    while (isFound === false && start <= end) {
        count += 1;
        middle = Math.floor((start + end) / 2)

        if (item === array[middle]) {
            isFound = true;
            position = middle;
            return position
        }

        if (item < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position;
}

console.log(BinarySearch(array, 1))
console.log("count: ", count)
