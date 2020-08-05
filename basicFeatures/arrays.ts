// while defining empty array
const carMakers: string[] = ['tata', 'ford']

const cars: string[][] = [] // 2D array  

// why annotate array with type

// 1- help in automatic type inference of values when extracted
const company = carMakers[0] // type = string 
const carCompany = carMakers.pop()
// company= 10 error in type

// 2- prevent incompatible type
carMakers.push('toyota')
//carMakers.push(10) // error in type mismatch

// help with map and foreach and other functions

carMakers.map(( car: string): string => {
  return car.toUpperCase()
})


// Flexible types

const importantDates: (Date | string)[] = [new Date(), '23-10-2020']
importantDates.push(new Date())
importantDates.push('25-15-1232')