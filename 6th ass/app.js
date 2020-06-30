//========chapter#21-25======Question#01=========


// var firstName = prompt("Emter First Name");
// var lastName = prompt("Emter last Name");
// var fullName = firstName + lastName ;

// alert("Hello! wellcome  " + fullName)

//========chapter#21-25======Question#02=========

// var mob = prompt("Enter Your Favourite Mobile Phone Model");

// document.write("My Favourite Mobile is: " + mob + "<br>");
// document.write("Length of String: " + mob.length);

//========chapter#21-25======Question#03=========

// var str = "Pakistani";

// document.write("<h2>" + "String:  " +str +"</h2>");
// document.write("<h2>" + "Index of 'n': " + str.indexOf("n")+"</h2>");

//========chapter#21-25======Question#04=========

// var str = "Hello World";

//  document.write("<h2>" + "String:  " +str +"</h2>");
//   document.write("<h2>" + "Index of 'l': " + str.lastIndexOf("l")+"</h2>");

//========chapter#21-25======Question#05=========



// var str = "Pakistani";

// document.write("<h2>" + "String:  " +str +"</h2>");
// document.write("<h2>" + "Character at Index 3 : " + str.charAt(3)+"</h2>");


//========chapter#21-25======Question#06=========

// var firstName = prompt("Emter First Name");
// var lastName = prompt("Emter last Name");
// var fullName = firstName.concat(lastName);
// document.write("<h1>" + "Hello! " + fullName + "</h1>") 


//========chapter#21-25======Question#07=========
 
// var str  = "Hyderabad";
// var city = str.replace("Hyder", "Islam");
// document.write("<h2>" + "City:  " + str +"</h2>");
// document.write("<h2>" + "After Replacement:  " + city +"</h2>");


//========chapter#21-25======Question#08=========

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var para  = message.replace(/and/g, "&");

// document.write("<h2>" + "Message is:  " + message +"</h2>");
// document.write("<h2>" + "After Replacement:  " + para +"</h2>");

//========chapter#21-25======Question#09=========

// var str =" '472' ";
// var num = Number("427");
// document.write("<h2>"+ "Value: " + str + "</h2>");
// document.write("<h2>"+ "Type: string"+ "</h2>");

// document.write("<h2>"+ "Value: " + num + "</h2>");
// document.write("<h2>"+ "Type: number"+ "</h2>");

//========chapter#21-25======Question#10=========

// var  input = prompt("Enter any word");
// var  input1 = input.toUpperCase();
// document.write("<h2>"+"User input: " + input +  "</h2>");
// document.write("<h2>"+"Upper Case: " + input1 + "</h2>"  );

//========chapter#21-25======Question#11=========

// var input = prompt("Enter any word ")
// var firstChar =  input.slice(0,1);
// var otherChar = input.slice(1);
// firstChar =firstChar.toUpperCase();
// otherChar = otherChar.toLowerCase();
// var input1 = firstChar + otherChar;
// document.write("<h2>" + "User input: ",input + "</h2>");
// document.write("<h2>" + "Title Case: ",input1 + "</h2>");

//========chapter#21-25======Question#12=========

// var num = 35.36;
// var num1 = num.toString();
// var num2 = num1.replace(".","");

// document.write("<h2>" + "Number: " + num + "</h2>" )
// document.write("<h2>" + "Result: " + num2 + "</h2>")

//========chapter#21-25======Question#13=========
//========chapter#21-25======Question#14=========
//========chapter#21-25======Question#15=========
//========chapter#21-25======Question#16=========


// var university = "University of Karachi";
// var para  = university.split(" ")
// var para1 = para.split(",")
// document.write(para1)

//========chapter#21-25======Question#16=========



//========chapter#26-30======Question#01=========


// var num = +prompt("Enter a number")
//  var num1 = Number(num);
//  if( num1 > 0){
//      document.write( "<h2>" +"number: " + num1 + "</h2>")
//      document.write( "<h2>" +"round of value: " + Math.round(num) + "</h2>")
//      document.write( "<h2>" +"floor value: " + Math.floor(num) + "</h2>")
//      document.write( "<h2>" +"ceil of value: " + Math.ceil(num) + "</h2>")

     
//  }else{
//      alert("Enter the Positive number")
//  }
 
//========chapter#26-30======Question#02=========

// var num = +prompt("Enter a number")
//  var num1 = parseFloat(num);
//  if( num1 < 0){
//      document.writeln( "<h2>" +"number: " + num1 + "</h2>")
//      document.write( "<h2>" +"round of value: " + Math.round(num) + "</h2>")
//      document.write( "<h2>" +"floor value: " + Math.floor(num) + "</h2>")
//      document.write( "<h2>" +"ceil of value: " + Math.ceil(num) + "</h2>")   
//  }else{
//      alert("Enter the Negative number")
//  }
 
//========chapter#26-30======Question#03=========

// var num = +prompt("Enter any number");
// var value = Math.abs(num);
// document.write(" The absolute value of " + num +" is " + value);



//========chapter#26-30======Question#04=========

//  var diceRoll = Math.floor(Math.random() *6) +1;
//  document.write("<h1>" +"random dice value is: " + diceRoll+ "</h1>")

//========chapter#26-30======Question#05=========

//  var coin = Math.floor(Math.random() *2) +1;
//  if(coin === 2){
// document.write("<h1>" + coin + "</h1>")
// document.write("<h1>" +"random coin value is: Heads " + "</h1>")
// }else{
//     document.write("<h1>" + coin + "</h1>")
//     document.write("<h1>" +"random coin value is: Tails " + "</h1>")

// }


//========chapter#26-30======Question#06=========

// var num = Math.floor(Math.random() *100) +1;
//    document.write("<h1>" +"random number between 1 and 100: " + num + "</h1>")


//========chapter#26-30======Question#07=========

//========chapter#31-34======Question#01=========

// var a = new Date;
// document.write("<h2>" + a + "</h2>");

//========chapter#31-34======Question#02=========

// var monthsNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var now = new Date();
// var theMonth = now.getMonth();
//  var nameOfMonth = monthsNames[theMonth];
//  document.write("<h2>" + "Current month: " + nameOfMonth + "</h2>");


//========chapter#31-34======Question#03=========

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
//  document.write("<h2>" + "Today is " + nameOfToday + "</h2>");


//========chapter#31-34======Question#04=========

// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];

//  if(nameOfToday === "Saturday" || nameOfToday === "Sunday"){

// document.write("<h2>" + "It’s Fun day" + "</h2>");
//  }else{
     
//     document.write("<h2>" + "Today is " + nameOfToday +" and it's a working day"+ "</h2>");

//  }


//========chapter#31-34======Question#05=========

// var  a = new Date;
// var b = a.getDate();
// if(b <=15){
//     document.write("<h1>"+"First fifteen days of the month"+ "</h1>");
// }else {
//     document.write("<h1>" + "Last days of the month" + "</h1>");
// }

//========chapter#31-34======Question#06=========


// var a = new Date();
// document.write("<h1>" +"Current Date: " + a + "</h1>");
// var b  = a.getTime();

// document.write("<h1>" +"Elapsed milliseconds since January 1, 1970: " + b + "</h1>");
// var c = b/60000;


// document.write("<h1>" +"Elapsed minutes since January 1, 1970: " + c + "</h1>");



//========chapter#31-34======Question#07=========

// var a = new Date;

// var b = a.getHours();
// if(b >= 12){
//     document.write("<h1>" +"Its PM" + "</h1>");
// }else{
    
// document.write("<h1>" +"Its AM" + "</h1>")
// }

//========chapter#31-34======Question#08=========

// var laterDate = new Date();
// laterDate.setFullYear(2020, 11, 31);
// document.write("<h1>" +"Later date: " + laterDate + "</h1>")

//========chapter#31-34======Question#09=========

// var ram = new  Date ("April 25, 2020");
// var a  = new Date();
// var diffTime = a.getTime() - ram.getTime();
// var diffDay = Math.floor(diffTime / (1000 * 3600 * 24)); 
// alert(diffDay + " days have passed since 1st Ramadan,2020");


//========chapter#31-34======Question#10=========



//  var ram = new  Date ("Dec 05, 2015");
//  var a  = new Date("jan 01, 2015");
//  var diffTime = ram.getTime() - a.getTime();
//  var diffSec = Math.floor(diffTime / 1000 ); 

//  document.write("<h2>" + "On reference date " + ram + "</h2>");
//  document.write("<h2>" + diffSec +" second had passed since beginning of 2015"  + "</h2>");

//========chapter#31-34======Question#11=========

 
// var today = new Date();
// var d = new Date();
// d.setHours(d.getHours() - 1);

// document.write("<h2>" + " Current Date " + today + "</h2>");

// document.write("<h2>" + "1 hour ago, it was " + d + "</h2>");

//========chapter#31-34======Question#12=========


// var today = new Date();
//  var d = new Date();
//  d.setHours(d.getHours() - 876000);

// document.write("<h2>" + " Current Date " + today + "</h2>");

// document.write("<h2>" + "100 years back, it was " + d + "</h2>");

//========chapter#31-34======Question#13=========


// var input = +prompt("Enter your age ") ; 
// var a = new Date();
// var b = a.getFullYear();
// var diff = b - input;

// document.write("<h2>" + " Your age is  " + input + "</h2>");
// document.write("<h2>" + " Your Birth Year is  " + diff + "</h2>");

//========chapter#31-34======Question#14=========

// var heading = " K-Electric Bill ";
// var nou = 410;
// var cpu = 16;
// var lp = 350;
// var netAm = Math.round( nou * cpu);
// var grossAm = Math.round(netAm + lp);
// document.write("<h1>" + heading + "</h1>")
// document.write("Customer Name: " + "<b>" +" ABC Customer" +"</b>" + "<br>");
// document.write(" Month: " + "<b>" +" February" +"</b>" + "<br>")
// document.write("Number of Units: " + "<b>" + nou +"</b>" + "<br>")
// document.write("Charges per Units: " + "<b>" + cpu +"</b>" + "<br>")

// document.write("<br>");
// document.write("<br>");

// document.write("Net Amount Payable(within Due Date): " + "<b>" + netAm +"</b>" + "<br>")
// document.write("Late payment surcharge: " + "<b>" + lp +"</b>" + "<br>")
// document.write("Gross Amount Payable(after Due Date): " + "<b>" + grossAm +"</b>" + "<br>")


//========chapter#35-38======Question#01=========

// function getDate(){
//     var a = new Date;
//     return a;
// }

// var b = getDate();
// document.write("<h2>" + b + "</h2>");

//========chapter#35-38======Question#02=========

// function input(){
//     var x = prompt("Enter your First Name")
//     var y = prompt("Enter your last Name")
//     var a = x + y;
//     document.write("<h2>" + "Hello! " + a + "</h2>");
//     return a;
// }

// input();


//========chapter#35-38======Question#03=========

// function adds(a){
//    var num1  = +prompt("Enter number1")
//    var num2 = +prompt("Enter number2")
//    var result = num1 + num2;
//    document.write("<h2>" + "Number1: " + num1 + "</h2>");
//    document.write("<h2>" + "Number2:  " + num2 + "</h2>");
   
//    return result;
// }


// document.write("<h2>" + " Addition of Numbers: " + adds() + "</h2>");
 
//========chapter#35-38======Question#04=========

// function calc(){

//     var num1 = +prompt("Enter the number1");
//     var operator = prompt("Enter operator")
//     var num2 = +prompt("Enter the number2");
//     var ans ;
       
//      if(operator === '+'){
//            ans = num1 + num2;
//         alert(num1 + " + " + num2 + " = " + ans)
          
//      }else if(operator ===  '-' ){
//         ans = num1 - num2;
//         alert(num1 + " - " + num2 + " = " + ans)
//     }else if(operator === '*'){
//         ans = num1 * num2;
//         alert(num1 + " * " + num2 + " = " + ans)
        
//     }else if(operator === '/'){
//         ans = num1 / num2;
//         alert(num1 + " / " + num2 + " = " + ans)
    
//     }else if(operator === '%'){
//         ans = num1 % num2;
//         alert(num1 + " % " + num2 + " = " + ans)
       
//     }else{
//         alert("Invalid operator")
//     }

// }
// calc();

//========chapter#35-38======Question#05=========

// var a;
// function sqr( a){
//       var i = a*a;
//       return i;
    
// }
// a = +prompt("Enter any Number");
// var num = sqr(a);
//  document.write("<h2>" + "The square of " + a + " is " + num + "</h2>");

//========chapter#35-38======Question#06=========
// var n = 5;
// function Factorial(n) { 
//     var ans=1; 
      
//     for (var i = 2; i <= n; i++) 
//         ans = ans * i; 
//     return ans; 
// } 
 
// var Input = +prompt("Enter any number");
// var num = Factorial(Input);
// document.write("<h2>" + "The fractorial of " + Input + " is " + num + "</h2>");

//========chapter#35-38======Question#07=========

// function counting(){
//     var firstNum =+prompt("Enter First num")
//     var lastNum =+prompt("Enter last num")
//     for(var i =firstNum ; i <= lastNum; i++ ){
//         document.write("<h2>" +i + "</h2>");
       
//     }

// }
// counting();


//========chapter#35-38======Question#08=========







