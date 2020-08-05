const profile = {
  name: 'Ali',
  age: 24,
  coords: {
    lat: 222,
    lng: 214
  },
  setAge(age: number): void{
    this.age = age
  }
}

const { age }: { age: number, name: string } = profile
const {coords: { lat, lng}}:
{coords: {lat: number, lng: number }} = profile