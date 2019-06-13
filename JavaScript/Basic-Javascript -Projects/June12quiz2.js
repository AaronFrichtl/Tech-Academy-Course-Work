// <!-- Convert a number to hours and minutes -->

function time_convert(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + ":" + minutes;         
}

console.log(time_convert(32));
console.log(time_convert(748));
console.log(time_convert(2034));