// annotation for return type
const add = ( a: number, b: number): number => {
  return(a+b)
}
const subtract = ( a: number, b: number): number => {
  return(a-b)
}
function divide ( a: number, b: number): number {
  return(a/b)
}

const multipy = function( a: number, b: number): number {
  return(a* b)
}

const logger = (val: string): void => {
  console.log(val)
  
}

const throwError = (val: string): never => {
  throw new Error(val)
}

const forcast = {
  date: new Date(),
  weather: 'sunny'
}

const weatherLogger = (forcast: { date: Date, weather: string }): void => {
  console.log(forcast.date)
  console.log(forcast.weather)
}

// destructuring with annotations
const weatherLogger2 = ({date, weather}: { date: Date, weather: string }): void => {
  console.log(date)
  console.log(weather)
}

weatherLogger(forcast)