const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

// loss of info due to change in ordering
const pepsi = ['brown', true, 40]
pepsi[0] = 40
pepsi[1] = 'brown'
pepsi[2] = true

//changing array into tuple with consistent ordering
const cola: [string, boolean, number] = ['brown', true, 40]
// throws error due to type mismatch in ordering
// cola[0] = 40
// cola[1] = 'brown'

// Alternate way with 'Type Alias'

type Drink = [string, boolean, number]

const fanta: Drink = ['brown', true, 40]

//NOT SUPER-USABLE in Type_Scrpit
// since objects can be used instead and provides much better understanding.. also has key->value pair
// tuples work with array... has only values at specifed position/index in array