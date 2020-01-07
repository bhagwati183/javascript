var car; // declaration statement!
car='BMW'; //AssignIng BMW into car variable.
console.log(car);

// declaration n assigment in one line

var car="Mercedes";
console.log(car);

// Undefined and Not_defined

var bike;
console.log(bike);// "undefined" bcoz no value is assigned in variable bike. 
//console.log(super_bike); //"not defined" coz super_bike variable is not declared.
  
// js execute the code from downwards to upward
  var a="java";
  var b="javascript";
  var c=a;
  console.log(c);//java
  var c=b;
  console.log(c);//javascript
  console.log(c);// javascript

// multiple variables in one line

var one=1,two="two",three;
console.log(one); //1
console.log(typeof typeof  one); // (first_time)number then string.
console.log(two);  //two
console.log(typeof two);// string
console.log(three); //undefined
console.log(typeof three);// undefined

// overriding

var product="apple";
console.log(product);// apple
product="samsung";
console.log(product);// samsung

// variable without var keyword

iphone=35000;
console.log(iphone);//It is Not Recommended to declare a variable without var keyword.
                    // It can accidently overwrite an existing global variable.







