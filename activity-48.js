var numbers = [23,33,67,22,12,77]

new_array = numbers.filter(function(data){
    if(data>50){
        return true
    }
    else{
        return false
    }
})

console.log(new_array)