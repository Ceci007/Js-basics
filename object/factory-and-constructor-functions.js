// Factory Function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  };
}

let factoryAddress = createAddress('a', 'b', 'c');
console.log(factoryAddress);

// Constructor Function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let constructorAddress = new Address('a', 'b', 'c');
console.log(constructorAddress);