// BRONZE 011: Circle Art; Submitted: Jun 30, 2021 07:48 AM; 100/100

// Circle Art
// An artist specializes in drawing perfect circles on any canvas. Assuming that people buy his artworks based on the percent of the canvas the drawn circle occupies, calculate how much profit he makes.
// You will create a function that accepts a height and width for a canvas, the radius of the circle drawn, and the price the canvas was bought for.
// The resulting function is GetProfit(height, width, radius, price).
// Given that:
// Area of canvas = height x width
// Area of circle = PI x (radius ^ 2)
// Calculate the artist's profit if the total profit is equal to:
// price + (percent of canvas filled x price)

// From <https://stackleague.com/dashboard/challenge/AprO0-FHzuaE-npCN9UBuSmy9jVbubmbS3H0eVsctIY> 

class CircleArt {

  getProfit(height, width, radius, price) {
      let areaCanvas = height * width
      let areaCircle = Math.PI * radius * radius
      let profit = price + (areaCircle / areaCanvas * price)

      // the last line of code handles rounding for you
      return Math.round((profit + Number.EPSILON) * 100) / 100
  }

}