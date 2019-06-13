// <!-- Javascript example to change the first character to the front and the back of a string -->
 
function front_back(str)
{
  first = str.substring(0,1);
  return first + str + first;
}
console.log(front_back('x'));
console.log(front_back('xy'));
console.log(front_back('xyz'));