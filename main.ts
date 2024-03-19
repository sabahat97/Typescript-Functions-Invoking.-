//Function In Typescript

//ex 1  number
function egg() {
  let cooked = 2 + 2 + 6; //output 10
  console.log(cooked);
}
egg(); //invoking the function

//ex 2  string

function singer() {
  let singers = "jungkook" + " ," + "kim" + " ," + "seokin";
  console.log(
    `A beautifull silver, golden and diamoond voice singers of ${singers} in 2024 .`
  );
}
singer();

//ex 3
function student() {
  let isstudent = true; //true
  console.log(isstudent);
}
// invoking the function
student();

//ex 4, random cases , type string
function killername() {
  let namekiller = "killer mack";
  let cases = "\ncases 10 to killed innocent people";
  console.log(namekiller + cases);
}
killername();

//ex 5
function substraction() {
  let subs = 100 - 45; // output 55
  console.log(subs);
}
// invoking the function
substraction();

//ex 6
function Mobile() {
  let ismobile = true; //true
  console.log(ismobile);
}
//invoking the function
Mobile();

//ex7 combining operators
function combining() {
  let operators = 12 + 12 * 2; // output 36
  console.log(operators);
}
// invoking the function
combining();

//ex 8 operators

function division() {
  let a = 19;
  let b = 4;
  console.log(a / b); // output 4.75
}
// invoking the function
division();

//ex 9

function percentage() {
  let percent = 100 % 80; // output 20
  console.log(percent);
}
//invoking the function
percentage();

//ex 10

function job() {
  let isjob = false; //false
  console.log(isjob);
}
//invoking the function
job();

//ex 11

function x() {
  let y = 12 * 23; // output 276
  console.log(y);
}
//invoking the function
x();

//ex 12

function z() {
  let x = 19;
  let y = 19;
  console.log(x - y); // output 0
}
//invoking the function
z();

//ex 13

function mult() {
  let multi = 20 * 0;
  console.log(multi);
}
//invoking the function
mult();

//ex 14

function shirt_price() {
  let small = 850;
  let medium = 1500;
  let large = 2000;
  console.log(small, medium, large);
}
// invoking the function
shirt_price();

//ex 15

function ShirtSizeWithPrice(): void {
  let a = "Size Small \n price 850\n"; // output come like this Size Small
  let b = "Size Medium \n price 1500\n"; //price 850
  let c = "Size large \n price 2000\n ";
  let d = `${a} ${b}${c}`;
  console.log(d);
}
//invoking the function
ShirtSizeWithPrice();
