let array = [2, 5, 1, 7, 13, 5, 3, 9, 0, 12, 4];
let count = 0;

function BubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
            count += 1;
        }
    }

    return array;
}

console.log(BubbleSort(array))
console.log("count: ", count)