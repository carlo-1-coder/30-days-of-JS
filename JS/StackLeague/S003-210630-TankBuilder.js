// SILVER 003: Tank Builder; Submitted: Jun 30, 2021 09:46 AM; 100/100

// Tank Builder
// The Echari, Zckrs Co.'s owner, wants you to create a program that calculates the price of his product.
// Zckrs Co. creates customized cylindrical tanks based with customer's desired height and diameter and bills at $100 per square meter of metal sheets and a base charge of $10.
// Given the height, diameter and number of orders, your task is to create is to create a function that calculates its price.
// Tips

// 	• 1 meter = 39.3701 inches
// 	• 1 meter = 3.28084 feet
// NOTES
// 	• The input can be in inches, meter and foot. Thus, MAY require conversion.

// From <https://stackleague.com/dashboard/challenge/4lhRsVfRC5Q6usgAOd3pBIquKlQmreWaEnfV6XXrEAM> 

function tankPrice(height, diameter, unit, quantity) {
  // if (
  //   isNaN(parseFloat(height)) ||
  //   isNaN(parseFloat(diameter)) ||
  //   isNaN(parseFloat(quantity)) ||
  //   height <= 0 ||
  //   diameter <= 0 ||
  //   quantity <= 0
  // ) {
  //   return false
  // } else {
    let xToMeter = 0
    switch (unit) {
      case 'in':
        xToMeter = 1.0 / 39.3701
        break
      case 'ft':
        xToMeter = 1.0 / 3.28084
        break
      case 'm':
        xToMeter = 1.0
        break
      default:
        return false
    }
    
    let radius = parseFloat(diameter) / 2
    let surfaceArea = 2 * Math.PI * radius * ( radius + parseFloat(height) ) * Math.pow(xToMeter, 2)
    
    let totalPrice = 0
    if (quantity = 0) {
      totalPrice = 0
    } else totalPrice = 100 + (surfaceArea * parseFloat(quantity) * 100) 
    
    return totalPrice
  // }
}

console.log(tankPrice(10, 2, 'm', 1))
console.log(tankPrice(10, 2, 'in', 1))
console.log(tankPrice(10, 2, 'ft', 1))