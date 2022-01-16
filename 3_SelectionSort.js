let array = [2, 5, 1, 7, 13, 5, 3, 9, 0, 12, 4];
let count = 0;

function SelectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j
            }
            count += 1;
        }
        let temp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = temp
    }
    return array;
}

console.log(SelectionSort(array))
console.log("count: ", count)