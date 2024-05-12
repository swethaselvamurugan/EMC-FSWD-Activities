var a = [10,20,30,40]

console.log(a)

console.log(a[1])

a[2] = 444
console.log(a[2])

a.push(50)
console.log(a)

a.pop()
console.log(a)

var b = [1,2,3,4,5,6]
console.log(b)

var c = b.slice(0,3)
console.log(c)

b.splice(2,2)
console.log(b)

b.splice(2,0,3,4)
console.log(b)

console.log(b.indexOf(2))

console.log(b.includes(0))

console.log(b.length)