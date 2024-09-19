// 1 word vs keyword ->
// rohit -> word hai isko ham hmesa string me likhenge chahe 
// vo ank hi ku na ho jaise 12 
// exaple--> "rohit" "12"

// 2 keyword -> var , loop, forEach

// priting method / function 
//keyword()-> method/function call
//word()
// console.log("hello world", "kya hal hai");
// console.error("hello world")
// console.warn("hello world")

//variables
//var varname = "value/data/information"

//jaise yha -> id -> word hai 


// var id = "ihihiyilouoiuturyr"

//id -> yha hmne iske ange ->var<- 
//lga kr id ko keyword bna dia

// console.log(id);

//. naming conversion of the variables
//1 must start with small/capital/_nad must not staart with number.
//2 variable name must not include any special chaerctor other than_
// 3 variable name must a singke in a single word
//4 young_age -> snack_case_pattern
//teenAgeOther -> camelCasePattern
//OldAgeOther -> PascalCasePattern
//kabab-case-pattern XXXXXXXXXXX
//5 variable name must be relevent to its's value and unique 
//var age = "sheryians coding school"

// 1. number -> NaN , infinity , -infinity
// var age = 12;
// var age = 12 + 12;
// console.log(age);
// console.log(typeof age)

// 2. sting -> '' , "" , ` ` ;
// var address = "bhopal";
// concatination -> jodna ya add krna string ko jodna 
// var address = "city" + "bhopa;"
// console.log(address);
// console.log(typeof address)

//single line string = '' / ""
// multiple line string -> ` ` -> ise ham (template literals) kahte hai

// var details = `Name
// age
// address`
// console.log(details);
// console.log(tyeof details);



// var username = "rohit";
// var age = 20;
// console.log("Username is", username , "and the Age is", age);
// console.log(`Username is ${username}and the Age is ${age}`);

// 3.boolean -> false, true;
// var isValid = fasle;
// console.log(isValid);
// console.log(typeof isValid);

//4 null

// var age =  23
// console.log(age);
// console.log(typeof age);
// age = null;
// console.log(age)
// console.log(typeof age);

//5 undefind

// var a ; //declearation
// console.log(a)
// console.log(typeof a)


// a = 12; // initialization
// console.log(a);


// a = 45; // reinitialzation/updation
// console.log(a);

// input -> 
// alert()
// console.log("hello");
// alert("hello");
// var res = confirm("Are you valid customer ?");
// console.log(res);

//output ->
// var n = prompt("enter namber");
// var m = prompt("enter number");
// console.log(n + m);
// console.log(typeof n);


//Tye of conversion

// Explicit type Conversion -> developer does that

// var n = Number( prompt("enter namber"));
// var m = +prompt("enter number");
// console.log(n + m );
// console.log(typeof n);

//implicit Type conversion -> computer(programing language ) does that

//12 + "hello" = "12hello"



//scope -> {} -> duri ya distance

// Global Variable 
// Local Variable

// var -> global variable hai

// var age = 24;

// {
//     let username = "rohit" // local variable
//     username = "rawat";

//     const city = "bhopal" // local variable

//     console.log(username);
//     console.log(city);
// }

// console.log(age)

//1 Assignment operator -> =
//2 Arithematic operator -> + , - , * , / , % , **
// unirary operator ->++increment, --decrement
//binary oerator -> + , - , * , / , % , **
// shorthand operators -> += , -= , *= , /= , %=


// let n = 1;
// let m = 2;
// let sum = (n + m);
// console.log(`the sum of ${n} and ${m} is ${sum}`);


// let n = 2;
// let m = 11;
// let modulodivision = n % m; 
// console.log(modulodivision);

// unirary oerator
// let n = 2;
// let m = 4;
// let exp = n ** m;
// console.log(exp)

//shorthand operator
// let n = 10;
// console.log(n)

//n = n + 5;

// n += 5;
// n -= 7;
// console.log(n);

//date 16/09/24

// increament and decrement

// let a = 12;
// let res = ++a + ++a + ++a + a-- ;
// console.log(res);
// console.log(a);

//exaple 2

// let a = 12;

//12 + 12 + 13 + 12 + 12 =

// let x = a++ + --a + ++a + --a + a++ ;

// console.log(x);
// console.log(a);

//comperision operators.. comerision operator alaways provide the boolean
//results (true/false)

//== != > <    >=     <=  ===   ==

// let a = 10
// let b = 20
// let b = "10"
// let res = a >= b;
// let res = a === b;

// console.log(res)


//when we capare strings with comparision operators, only the first non equel
// charector is compared a/c  to 

// let a = "hello"
// let b =  "hi"
//  let res = a < b // e > i 

//  console.log(res)

// logical operators

 //&&  ||   !

 //logical operators && || ! result (a / c 
 //to the data which is logically compared)



 //comparision b/w boolean values
 //a && b && c 
 //  treu && true && true = true
 //true && false && true && = flase
 // false || true || false = true
 // false || false || false = false 
 
 //falsy values -> 0 , "" , null , undefined, NaN , false
 //-1&& -0.5 && true && null && 12 = null
 // undefined || NaN  || -0.8 || 12 = -0.8


 //date 18/24

 // control flow
 // 1. condition statements

 //syntax 
 // simple if 
 // if(condition === true){
    //true statements
//{

//simple if- else 
//if (condtion == true){
    //true codition 

//}else{

//do somthings

//}

// ladder /multiple if- else
//if (contion === true ){

    //lets do itt

//}else if (conditon ===true){

//let do net

//}else if (condition === true){
    //10 behes

//}else {

    // kuchh bhi
//}


// nasted if else

// let n = 13;

// if(n > 0){
//     console.log("Positive");
//     if(n % 2 == 0){
//         console.log("Even");
        
//     }else{
//         console.log("Odd");
        
//     }
// }else if(n < 0){
//     console.log("Negative");
    
// }else{
//     console.log("Zero");
    
// }

// simple -if

// let n = 12 

// if(n > 0){
//     console.log("number is posetiv")
// }

// simple if-else 

// let n = 15;

// if(n > 0){
//     console.log("positive" );
// }else{
//     console.log("negative");
// }

// console.log("rohit")

// let n = -1;

// if(n > 0 ){
//     console.log("posetive")
// }else if(n < 0){
//     console.log("nagative")
// }else{
//     console.log("zero")
// }

// nasted if-else

// let n = 12;
// if(n > 0){
//     console.log("posetive")
//     if(n % 2 == 0){
//         console.log("even")
//     }else{
//         console.log("odd")
//     }
// }else if(n > 0){
//     console.log("negative")
// }else{
//     console.log("zero")
// }

//date 18/24

// let n = 0;


//  if(n > 0 && n % 2 == 0){

//     console.log("posetive even")
//  }else if (n > 0 && n % 2 != 0){
//     console.log("posetive odd")
//  }else if(n < 0){
//     console.log("negative")
//  }else{
//     console.log("zero")
//  }


//switch


//  let n = 1

//  switch(n){
//     case 1:
//         console.log("hello");
//         break;
//         case 2 :
//             console.log("hii")
//             break;

//         default :
//         console.log("default");
//  }

// 

// let naam = "rohit" ;

// let age = 24;
// let obj = naam   +   age;
// console.log(obj);

// let age = ( prompt("eligibal for vote"));
// if(age >= 18){
//     console.log("vote")
// }else{
//     console.log("you can not vote")
// }



