/*
let js = "amazing";
console.log(10 - 23 + 10 + 5);
console.log("yusef");
console.log(23);
let firstname = "yusef";
console.log(firstname);
let javascriptisfun = true;
console.log(javascriptisfun);
console.log(typeof true);
console.log(typeof javascriptisfun);
console.log(typeof 'yusef');
console.log(typeof 23);
javascriptisfun = 'yes';
console.log(typeof javascriptisfun);
let year;
console.log(year);
console.log(typeof year);
year = 1999;
console.log(typeof year);
console.log(typeof null);
*/
/*
let age = 25;
age = 26;
console.log(age);
lastname = 'en';
console.log(lastname);
*/
/*
const now = 2034
const ageofyusef = now - 1998;
const ageofsahel = now - 1969;
console.log(ageofyusef, ageofsahel);
console.log(ageofyusef * 2, ageofyusef / 10, 2 ** 3);
const firstname = 'yusef';
const lastname = 'en';
console.log(firstname + ' ' + lastname);
let x = 10 + 5;
x += 10;//x=x+10
x *= 4;//x=x*4
x++;
x--;
x--;


console.log(x);
console.log(ageofyusef > ageofsahel);
console.log(ageofsahel >= 18);
const isfullage = ageofsahel >= 18;
console.log(now - 1998 < now - 1969);
*/
/*
const now = 2034
const ageofyusef = now - 1998;
const ageofsahel = now - 1969;
console.log(now - 1998 < now - 1969);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
const averageage = (ageofsahel + ageofyusef) / 2;
console.log(ageofsahel, ageofyusef, averageage);
*/

/*
const firstname = 'yusef';
const year = '2025';
const birth = '1999';
const job = 'producer'
const yusef = "i'm " + firstname + ' ,a ' + (year - birth) + ' years old ' + job;

console.log(yusef)

// Template literals
const newyusef = `i'm ${firstname}, a ${year - birth} , years old ${job} `;
console.log(`pashmak
moz
khiar`); 
*/
/*
const age = 25;
if (age >= 18) { console.log('yusef can get his lisence 🏎️') }
else {
    const yearsleft = 18 - age;
    console.log(`yusef need ${yearsleft} years to get lisence:) `);
}

const birthyear = 1999
let century;
if (birthyear <= 2000) {
    century = 20;
} else { century = 21; }
console.log(century);
*/
/*
//type conversion
const inputyear = '1991';
console.log(Number(inputyear), inputyear);
console.log(Number(inputyear) + 18);

console.log(Number('jonas'));
console.log(typeof NaN);

console.log(String(26), 26);

//type coercion
console.log('i am ' + 25 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
*/
//five falsy valuesL:0,'',undefined,null,NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('yusef'));
console.log(Boolean(''));
console.log(Boolean({}));
let money = 0;
if (money) {
    console.log("don't spend it all dear!");
} else {
    console.log('go get a job mother fucker!');
}
let height;
if (height) {
    console.log('boo !ur dick is smaller than a little candy lol');
}
else {
    console.log('am i a joke to u mother fucker');
}
*/
/*
const age = '18';
if (age === 18) console.log('u should get drunk (strickt)');
if (age == 18) console.log('u should get drunk (loose)');
const favourite = prompt("what's ur favourite number?");
console.log(favourite);
console.log(typeof favourite);
if (favourite == 69) {// 69==69 
    console.log('its getting hot hear!');
} else if (favourite == 1) {
    console.log('i have a better number its 69 ');
} else if (favourite == 9) {
    console.log('u missed 6');
} else {
    console.log('do u know that if u suck my 🍆 it could be a 69');
}

if (favourite !== 69) console.log('why not 69!');
*/
const hasgoodass = true;
const hasdick = false;
console.log(hasgoodass && hasdick);
console.log(hasgoodass || hasdick);
console.log(!hasgoodass);
if (hasgoodass && hasdick) {
    console.log('get a room');
} else {
    console.log('danger!');
}
