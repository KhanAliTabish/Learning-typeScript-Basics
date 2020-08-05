class Vehiclee{

  // color: string = 'red'
  // constructor(color: string){
  //   this.color = color
  // }
  //equivalent code'
  constructor(public color: string){}
  public drive(): void {
    console.log('Driving')
  } 
  // public honk(): void {
  //   console.log('Beep Beep')
  // }
}

class Cars extends Vehiclee {
  constructor(public wheels: number, color: string){
    super(color)
  }
  private honk(): void {
    console.log('BOOM Beep')
  }
  public carHonk(): void {
   this.honk()
  }
}
const vehicle = new Vehiclee('orange')
vehicle.drive()
//vehicle.honk()
console.log(vehicle.color)

const carr = new Cars(4, 'white')
carr.carHonk()
carr.drive()