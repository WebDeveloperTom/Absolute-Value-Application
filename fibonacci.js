function fib(x) {
  // ensure the number is above 0
  if (x < 1) {
    return "Please enter a number greater than 0.";
  }
  //if the user enters 1
  if (x < 2) {
    return `1`;
  }
  let a = 1,
    b = 0,
    temp,
    string = "";
  while (a <= x) {
    string += `${a},`;
    temp = a;
    a = a + b;
    b = temp;
  }
  //remove the last ,
  string = string.slice(0, -1);
  return string;
}
