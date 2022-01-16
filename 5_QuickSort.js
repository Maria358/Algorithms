let array = [2, 5, 1, 7, 13, 5, 3, 9, 0, 12, 4, 6];
let count = 0;

function QuickSort(array) {
    if(array.length <= 1){
        return array
    }

    let pivotIndex = Math.floor(array.length / 2)
    let pivot = array[pivotIndex]
    let less = []
    let bigger = []

    for (let i = 0; i < array.length; i++) {
        count += 1;

        if (array[i] === array[pivotIndex]) {
            continue
        }
        if (array[i] < pivot) {
            less.push(array[i])
        } else {
            bigger.push(array[i])
        }
    }

    return [...QuickSort(less), pivot, ...QuickSort(bigger)]
}

console.log(QuickSort(array))
console.log("count: ", count)