function findEvenorOdd(number)
{
    if(number==0){
        console.log("That's neither even or odd, it's just zero")
    }
    else if(number%2==0){
        console.log("It is an even number")
    }
    else{
        console.log("It is an odd number")
    }
}

findEvenorOdd(6)

function isSuperhero(name){
    var a=name.charAt(0)
    if(a=="S"){

        console.log("Yes, it's a superhero")
    }
    else{
        console.log("No, it's not a superhero")
    }
}

isSuperhero("Spiderman")