/*
    - Conversão de tipos (type casting ou type conversion):
    ocorre quando você explicitamente transforma um valor de um
    tipo para o outro. Isso é feito de forma consciente, usando 
    funções ou métodos específicos para realizar a conversão.
*/

let value = "9"
console.log(typeof Number(value)) // number
console.log(typeof value) // string

let age = 18
console.log(typeof age.toString()) // string
console.log(typeof String(age)) // string
console.log(typeof toString(age)) // string

let option = 1
console.log(Boolean(option)) // true
console.log(typeof Boolean(option)) // boolean

/*
    - Coerção de tipos:
    acontece de forma automática (implicitamente). O JavaScript
    tenta automaticamente converter um dos valores para um tipo 
    compatível antes de realizar a operação. 
*/

console.log(typeof ("10" + 5))