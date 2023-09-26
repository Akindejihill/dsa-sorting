function bubbleSort(arr) {

    //do the following once for every element
    for(let i = 0; i < arr.length; i++){
        //compare the element to every other element
        for(let j = 0; j < arr.length - i; j++){
            if(arr[j] > arr[j + 1]){
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;

}


console.log(bubbleSort([1, 4, 2, 18, 9, 22, 5]));


module.exports = bubbleSort;