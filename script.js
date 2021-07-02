/*let js = 'amazing';
    //console.log(40+8+23-10);

    console.log('jonas');
    console.log(23);

    let firstName = "Matila";
    console.log(firstName);
    console.log(firstName);
    console.log(firstName);
    
    //variable name convention
    let jonas_matilda = "JM";
    let $function = 27;

    let person = "jonas";
    let PI = 3.1415;

    let myFirstJob = "Coder";
    let myCurrentJob = "Teacher";

    let job1 = "programmer";
    let job2 = "teacher";

    console.log(myFirstJob);

 let javascriptIsFun = true;
 console.log(javascriptIsFun);

 //console.log(typeof true);
 console.log(typeof javascriptIsFun);
 //console.log(typeof 23);
 //console.log(typeof 'Jonas');

 javascriptIsFun = 'Yes';
 console.log(typeof javascriptIsFun);

 let year;
 console.log(year);
 console.log(typeof year);

 year = 1991;
 console.log(typeof year);

 console.log(typeof null)

 


let age = 30;
age = 31;


const birthYear = 1991;
//birthYear = 1990;
//const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Goyani';
console.log(lastName);
const now = 2037;
const agedhruvi = now - 1991;
const agevimal = now - 2018;
console.log(agedhruvi, agevimal);

console.log(agedhruvi * 2, agevimal / 10, 2** 3)
//2***3 means 2 to the power of 3= 2*2*2

const firstName = 'dhruvi';
const lastName = 'Goyani';
console.log(firstName + ' ' + lastName);

let x = 10 + 5; // 15
x += 10; //x=x+10
x *=4; //x =x*4 =100
x++;// x = x+ 1
x--;
x--;
console.log(x);

//Comarison Operator
console.log(agedhruvi > agevimal);
console.log(agevimal >= 18);

const isFullAge = agedhruvi >= 18;

console.log(now - 1991 > now - 2018);



const now = 2037;
const agedhruvi = now - 1991;
const agevimal = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y= 25 - 10-5;
console.log(x,y);

const averageAge = (agedhruvi + agevimal) /2
console.log(agedhruvi, agevimal, averageAge);


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm" + firstName +', a' + (year - birthYear) +' years old ' + job + '!';
console.log(jonas);


const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('string with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

const age = 15;
if (age >= 18){
    console.log('Search can start driving licence');
}
    else{
            const yearsLeft = 18 -age;
            console.log(`Search is too young. Wait another ${yearsLeft} years :)`);
    }

const birthYear = 2012;
 let  century;
 if(birthYear <= 2000){
     century =20;
 }
 else{
     century = 21;
 }
 console.log(century);


 const massMark = 78;
 const heightMark = 1.69;
 const massJohn = 92;
 const heightJohn = 1.95;
 
 const BMIMark = massMark / heightMark ** 2;
 const BMIJohn = massJohn / (heightJohn * heightJohn);
 console.log(BMIMark, BMIJohn);

 if(BMIMark > BMIJohn){
     console.log(`Mark's BMI (${BMIMark}) is higher then john's (${BMIJohn})!`)
 }
 else{
     console.log(`John's BMI(${BMIJohn}) is heigher then Marks's (${BMIMark})!`)
 }
 

 const inputYear = '1991';
 console.log(Number(inputYear),inputYear);
 console.log(Number(inputYear) + 18);

 console.log(Number('jonas'));
 console.log(typeof Nan);
  console.log(String(23),23);

  console.log('I am' + 23 +' years old');
  console.log('23' - '10' - 3);
  console.log('23' / '2');
  console.log('23' > '18');

  let n = '1' + 1;
  n = n -1;
  console.log(n);


// 5 falsy Values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if(money){
    console.log("don't spend it all ;)");
}
else{
    console.log('You should get a Job!');
}

let height = 0;
if (height){
    console.log('YAY! Height is defined');
}
else{
    console.log('Height is UNDEFINED')
}

const age = '18';
if (age === 18) console.log('You just became an adult :D(strict)');

if (age == 18) console.log('You just become an adult :D(loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23){ // 22 ==== 23 -> false
    console.log('Cool! 23 is an amazing number!')
}
else if(favourite === 7){
    console.log('7 is also a cool number')
}
else if(favourite === 9){
    console.log('9 is also a cool number')
}
else{
    console.log('Number is not 23 or 7 or 9')
}

if(favourite !== 23) console.log('Why not 23?');


const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired)
{
    console.log('Sarah is able to drive!');
}
else{
    console.log('Someone else should drive...');
}


const scoreDolphins = (97 + 112 + 80)/3;
const scoreKoalas = (109 + 95 + 50)/3;
console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100)
{
    console.log('Dolphins win the trophy');
}
    else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100)
    {
        console.log('Koalas win the trophy');
    }
    else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){


        console.log('Both win the trophy!');
}
    else
    {
        console.log('No one wins the trophy');
    }
    

    const day = 'monday';

    switch (day){
        case 'monday':
            console.log('Plan course structure');
            console.log('Go to coding meetup');
            break;
        case 'tuesday':
            console.log('prepare theory videos');
            break;
        case 'wednesday':
        case 'tuesday':
            console.log('Write code examples');
            break;
        case 'friday':
            console.log('Record videos');
            break;
        case 'saturday':
        case 'sunday':
            console.log('Enjoy the weekend :D');
            break;
        default:
            console.log('Not a valid day!');
        
    }
    

    3 + 4
    1991
    true && false && !false

    if (23 > 10){
        const str = '23 is bigger';
    }

    const me = 'Jonas';
    console.log(`I'am ${2037 - 1991} years old ${me}`)

   */
    
    const age = 23;
    //age >=18 ? console.log(`I like to drink wine`):console.log(`I like to drink water`);

    const drink = age >= 18 ? 'wine' : 'water';
    console.log(drink);

    let drink2;
    if(age >= 18){
        drink2 = 'wine';
    }
    else{
        drink2 = 'water';
    }
    console.log(drink2);
    console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);