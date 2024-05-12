var a = [1,2,3,4,5,6,7,8,9,10]

for(count=0;count<10;count=count+1){
    if(a[count]%2==0){
        console.log(a[count] + " even")
    }
    else{
        console.log(a[count] + " odd")
    }
}

console.log("Even numbers:")
for(count=0;count<10;count=count+1){
    if(a[count]%2==0){
        console.log(a[count])
    }
}
console.log("Odd numbers:")
for(count=0;count<10;count=count+1){
    if(a[count]%2==1){
        console.log(a[count])
    }
}