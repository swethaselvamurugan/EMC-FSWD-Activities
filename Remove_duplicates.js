function removeDuplicates(array) {
    const uniqueArray = [];
    
    for (let i = 0; i < array.length; i++) {
        if (!uniqueArray[array[i]]) { 
            uniqueArray.push(array[i]);
        }
    }  
    return uniqueArray;
}

const arrayWithDuplicates = [1,2,3,4,5,1,6,2,7,1,3];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray);