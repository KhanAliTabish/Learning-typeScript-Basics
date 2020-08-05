const oldCivic = {
  name: 'civic',
  year: 2000,
  date: new Date(),
  broken: true,
  summary(): void{
    console.log("Summary")
  }
}

// problem : very long annotation and can result in duplicate code for same types
const printVehicle = (vehicle: { name: string; year:number; broken: boolean}): void => {
  console.log(`Name === ${vehicle.name}`)
  console.log(`Year === ${vehicle.year}`)
  console.log(`Broken === ${vehicle.broken}`)
}
printVehicle(oldCivic)


//thus use interface
interface Vehicle {
  name: string;
  year: number;
  date: Date;
  broken: boolean;
  summary(): void;
}

const printinterfaceVehicle = (vehicle: Vehicle): void => {
  console.log(`Name === ${vehicle.name}`)
  console.log(`Year === ${vehicle.year}`)
  console.log(`Broken === ${vehicle.broken}`)
}
printinterfaceVehicle(oldCivic)