
// PRIMITIVE TYPES

let apple: number = 5
let speed: string = 'fast'
let hasSomething: boolean = true
let nothingMuch: null = null
let nothing: undefined = undefined

apple = 10
speed = 'slow'
hasSomething = false


// type error examples

//nothing = 'tra'
// hasSomething = 0 
// speed = 10 
// apple = true 

//built in objects
let now: Date = new Date()

//array
let colors: String[] = ['red', 'blue', 'green']
let numbers: number[] = [1,3,5,6]
let boolArray: boolean[] = [true,false,true,false]

//Classes
class Car{

}
let car: Car = new Car()


//Object Literals
let point: {x: number; y:number} = {
  x:10,
  y:10
}

//point = 20 type error

// FUNCTION
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

// WHEN TO USE ANNOTATIONS

// 1- When a function return a type of 'Any'

const json = '{ x: 10, y: 20}'
const coordinates: { x: number; y: number } = JSON.parse(json)

// 2- When we declare variable and then initialize it later

let words = ['red', 'yellow', 'blue']
// let foundWords
let foundWords: boolean

words.forEach( color => {
  if(color === 'blue') foundWords = true
})

// 3- When we have variable whose type cannot be inferred correctly
let secnumbers = [12, -10 ,-12]
let numberAbove: boolean | number = false

secnumbers.forEach( no => {
  if(no > 0) numberAbove = no
})

















