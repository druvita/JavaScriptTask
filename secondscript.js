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

const friend1 = 'Kruti';
const friend2 = 'Vimal';
const friend3 = 'Ruchi';

const friends = ['Kruti', 'Vimal', 'Ruchi'];
console.log(friends);

const y= new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

const calcAge = function(birthYeah){
    return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2,age3);

const ages = [calcAge(years[0]), calcAge(years[1]),
calcAge(years[years.length - 1])];
console.log(ages);

const friends = ['Vimal', 'Dhruvi', 'Hetal'];
const newLength = friends.push('Keyur');
console.log(friends);
console.log(newLength);

friends.unshift('Veni');
console.log(friends);

friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Dhruvi'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Dhruvi'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if(friends.includes('Dhruvi')){
    console.log('you have a frind called Dhruvi');
}

const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
    bill * 0.2;
}

const bills = [125,555,44];
const tips = [calcTip(bills[0]), calcTip(bills[1]),
calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1]
,bills[2] + tips[2]];

console.log(bills,tips,totals);

const dhruviArray = [
    'Dhruvi',
    'Goyani',
    2037 - 1991,
    'Programmer',
    ['Vimal', 'Kruti','Hetal']
];

const dhruvi = {
    firstName: 'Dhruvi',
    lastName: 'Goyani',
    age: 2037 - 1991,
    job: 'Programmer',
    frinds: ['Vimal', 'Kruti', 'Hetal']
};
console.log(dhruvi);

console.log(dhruvi.lastName);
console.log(dhruvi['lastName']);

const nameKey = 'Name';
console.log(dhruvi['first' + nameKey]);
console.log(dhruvi['last' + nameKey]);

const interstedIn = prompt('what do you want to know about Dhruvi?Choose between firstName, LastName, age, job, and friends'
);

if(dhruvi[interstedIn]){
    console.log(dhruvi[interstedIn]);
}
else{
    console.log('Wrong request')
}

dhruvi.location = 'Portugal';
dhruvi['twitter'] = '@dhruvi';
console.log(dhruvi);

console.log(`${dhruvi.firstName} has ${dhruvi.frinds.length} friends, and his best friend is called ${dhruvi.frinds[0]}`);


const dhruvi = {
    firstName: 'Dhruvi',
    lastName: 'Goyani',
    birthYeah: 1996,
    job: 'Programmer',
    frinds: ['Vimal', 'Kruti', 'Hetal'],
    hasDriversLicense: true,

    calcAge: function(){
        this.age = 2021 - this.birthYeah;
        return this.age
    },
    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()}`
    }
};

console.log(dhruvi.calcAge());

console.log(dhruvi.age);
console.log(dhruvi.age);
console.log(dhruvi.age);

console.log(dhruvi.getSummary());


const dhruvi = {
    fullName: 'Dhruvi Goyani',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const vimal= {
    fullName: 'Vimal Mangukiya',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / this.height **2;
        return this.bmi;
    }
};

dhruvi.calcBMI();
vimal.calcBMI();
console.log(dhruvi.bmi, vimal.bmi);
*/



for(let rep = 1; rep <= 10; rep = rep++){
    console.log('dsdsd ${rep}');
}
