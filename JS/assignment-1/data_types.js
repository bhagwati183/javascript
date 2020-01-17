
//2.Declare a variable and test variable name rules and log the variable value.

//1.Rules while declaring variable in the javascript.
//Rule1:Variable names must begin with a letter, an underscore (_) or a dollar sign ($).
//Variable names can only contain letters, numbers, underscores, or dollar signs.
var _bag="Gucci";
console.log(_bag);

var $car="Audi";
console.log($car);

var marvel_movie="Black Panther";
console.log(marvel_movie);

//Rule2:Variable names cannot contain spaces.
//var pocket money="2000";
//console.log(pocket money);//Uncaught SyntaxError: Unexpected identifier

//Rule3:Variable names are case-sensitive.
/*var pen="parker";
console.log(Pen);//Uncaught ReferenceError: Pen is not defined.*/

//2.Comment Javascript code single line multiline.
 
var c=`"//" used for commenting single line`;
console.log(c);

var d=`This format is /* used for commenting multiline
in javacsript.*/`
console.log(d);

/*3.Store values using assignment operator.
	Create to two variables ‘a’ and ‘b’
	Assign variable a with value 5
    Assign the value of a to b*/
    var a,b;
    a=5;
    b=a;
    console.log(a);
    console.log(b);

//4.Add two numbers using plus operator.
var pocket_money=2000;
var salary=0000;
console.log(pocket_money+salary);

//5.Subtract One number from another
var pocket_money=2000;
var salary=0000;
console.log(pocket_money-salary);

//6.Multiply two numbers
var x=10,y=8;
console.log(x*y);

//7.Divide one number by other
var x=100,y=20;
console.log(x/y);

//8.Increment a number using both pre and post increment
var i=10,j=5;
i++;//post
console.log(i);
++j;//pre
console.log(j);

//9. What will be the output of the following program.
var i = 4;
var j = 21;
var k = ++i * 7 +2 - j--;
console.log(k);//16

//10.Write a program to get remainder of 17 divided by 3.
var e=17,f=3;
var mod=17%3;
console.log(mod);//2

//11.Declare a string variable and log the typeof of variable.
  var name="wonder_woman";
  console.log(name);
  console.log(typeof name);

//12.Print a string “ Alan said, “Peter is learning Javascript” 
//”(ignore first and last quote) use escape character.
var str_name= "Alan said,\"Peter is learning Javascript\"";
console.log(str_name);

//13.Concat two strings using plus operator.
var string_name= "Hello"+"World";
console.log(string_name);

//14.Concat two strings using plus equal (+=) operator.
var movie="black";
movie+="panther";
console.log(movie);







