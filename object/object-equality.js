function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
let address3 = address1;

function areEqual(address1, address2) {
  return address1.street === address2.street && address1.city === address2.city 
  && address1.zipCode === address2.zipCode;
}

console.log(areEqual(address1, address2)); // true

function areSame(address1, address2) {
  return address1 === address2;
}

console.log(areSame(address1, address2)); // false
console.log(areSame(address1, address3)); // true
