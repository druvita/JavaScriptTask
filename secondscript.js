/*`use strict`;

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive :D');

function logger(){
    console.log('My name is jonas');
    
}
logger();
logger();
logger();

function fruitprocessor (apples, oranges){
    console.log(apples,oranges)
        const juice = `juice with ${apples} apples ${oranges}orangis.`;
        return juice;
    }

const appleJuice = fruitprocessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitprocessor(2,4);
console.log(appleOrangeJuice);

const num = Number('23');

function calcAge1(birthyeah){
    return 2037 - birthyeah;
}
const age1 = calcAge1(1991);

const calcAge2 = function (birthyeah){
    return 2037 - birthyeah;
}
const age2 = calcAge1(1991);
console.log(age1, age2);


const calAge2 = function (birthYeah){
    return 2037 - birthYeah;
}
//arrow funcion
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah , firstName) =>{

const age = 2037 - birthYeah;
const retirement = 65 - age;
//return retirement;
return `${firstName}retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));


function cutFruitPieces(fruit){
    return fruit * 3;
}
function fruitprocessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitprocessor(2,3));
*/
const calcAge = function(birthYeah){
    return 2037 - birthYeah;
}
const yearsUntilRetirement = function (birthYeah, firstName)
{
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }
    else{
        console.log(`${firstName} has already retired`);
        return -1;
    }


    
    
    //return `${firstName} retires in ${retirement} years`;

    }
console.log(yearsUntilRetirement(1991,'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));

