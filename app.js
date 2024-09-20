console.log('Задание 1')
 
let mounth =  6     // prompt('Введите число от 1 до 12')

console.log(mounth)

let arr = ['Январь', 'Февраль', 'Март','Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

console.log(arr[mounth - 1])


console.log('Задание 2')

let dostavka = 250
let tovar1 = [11000, 'Процессор', dostavka]
let tovar2 = [16000, 'Холодильник', dostavka]
let tovar3 = [20000, 'Стиральная машина', dostavka]

console.log(tovar1[2], tovar2[2], tovar3[2])

let sum = (tovar1[0] + tovar2[0] + tovar3[0] + dostavka*3)

console.log(`Общая сумма товара равна ${sum}`)

let tovars = [tovar1,tovar2,tovar3]


console.log('Задание 3')

let arr1 = [25,52,6,9,8]

console.log(`Максимальное число из массива ${arr1} равно ${Math.max(...arr1)}`)
console.log(`Минимальное число из массива ${arr1} равно ${Math.min(...arr1)}`)




console.log('Задание 4')

arr2 = [
 Math.floor(Math.random()*10),
 Math.floor(Math.random()*10),
 Math.floor(Math.random()*10),
 Math.floor(Math.random()*10),
 Math.floor(Math.random()*10)
]

console.log(arr2.sort())
console.log(arr2.sort().reverse())

console.log('Задание 5') 

let arr3 = [ "Hi", "Hello", "Bonjour"]
console.log(arr3)
arr3.push("Hola")
console.log(arr3)

console.log('Задание 6')

let arr4 = ['a','b','c']
let arr5 = ['1','2','3']
console.log(`Массив 1 = ${arr4}`)
console.log(`Массив 2 = ${arr5}`)
console.log(arr4.concat(arr5))

console.log('Задание 7')
let arr6 = [1,2,3]
console.log(arr6)
console.log(arr6.reverse())

console.log('Задание 8')
const fruits = ["Banana", "Orange", "Apple", "Mango"]
let res = fruits.includes("Banana")
console.log(res)

console.log('Задание 9')
const array = [2, 5, 9]
let res2 = array.indexOf(5)
delete array[res2]
console.log(array) 