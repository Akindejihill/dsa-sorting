function merge(arr1, arr2){
    const results=[] 
    let i=0, j=0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    //at this point, one of the pointers, points to null
    //because there are no numbers remaining in its array.
    //copy over the numbers from the array that still has numbers
    while(arr1[i] !== undefined){
        results.push(arr1[i]);
        i++;
    }

    while(arr2[j] !== undefined){
        results.push(arr2[j]);
        j++;
    }

    return results;
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;

    const mid = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

module.exports = { merge, mergeSort};