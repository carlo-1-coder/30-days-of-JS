// BRONZE 014: Will it fit in the box?; Submitted: Jun 30, 2021 09:46 AM; 100/100

// Will it fit in the box?
// A start up shipment company needs your help. They are having trouble sending their packages due to sudden bulk orders after putting a television advertisement. Their box is measured in different sizes in centimeters while the packages volume are in cubic inches


// Task
// Your task is to calculate the volume of the box then test if the content will fit inside. The box's measurements are in centimeters while the volume of the content is set at cubic inches.
// if it fits return True otherwise return False. if any of each value is a Zero or Negative Number then Return Null (Return None for Python)
// Note 1cm = 0.393701 inches

// From <https://stackleague.com/dashboard/challenge/AprO0-FHzuaE-npCN9UBuSmy9jVbubmbS3H0eVsctIY> 

function box(length, width, height, content){
  if ( 
    (parseFloat(length) <= 0) || 
    (parseFloat(width) <= 0) || 
    (parseFloat(height) <= 0) || 
    (parseFloat(content) <= 0) || 
    isNaN(length) ||
    isNaN(width) ||
    isNaN(height) ||
    isNaN(content) 
    ) {
    return null
  } else {
    const INpCM = 0.393701

    let vol = length * width * height

    let volIn = vol * Math.pow(INpCM, 3)
  
    if (volIn >= content) {
      return true
    } else return false
  }
}

function box(length, width, height, content){
  if ( 
    (parseFloat(length) <= 0) || 
    (parseFloat(width) <= 0) || 
    (parseFloat(height) <= 0) || 
    (parseFloat(content) <= 0) || 
    isNaN(length) ||
    isNaN(width) ||
    isNaN(height) ||
    isNaN(content) 
    ) {
    return null
  } else {
    const INpCM = 0.393701

    let vol = length * width * height

    let volIn = vol * Math.pow(INpCM, 3)
  
    if (volIn >= content) {
      return true
    } else return false
  }
}

console.log(box('37',22,26,1221.1))