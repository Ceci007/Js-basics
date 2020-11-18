/*
** Create an address object:
** street
** city
** zipCode
** showAddress(address)
*/

let address1 = {
  street: 'a',
  city: 'b',
  zipCode: 'c'
}

function showAddress(address) {
  for (let key in address)
    console.log(key, address[key])
}

showAddress(address1);