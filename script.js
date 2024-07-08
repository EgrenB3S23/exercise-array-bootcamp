//Array innehållandes flera objekt
let persons = [
	{
		name: "Felicia",
		age: 12,
	},
	{
		name: "Pelle",
		age: 20,
	},
	{
		name: "Peter",
		age: 59,
	},
	{
		name: "Anna",
		age: 32,
	},
	{
		name: "Jocke",
		age: 18,
	},
	{
		name: "Ella",
		age: 3,
	},
];

/* 1 */
/* Gör en array som innehåller 5 st olika frukter av datatypen string. */
console.log("Uppgift 1");
console.log("Gör en array som innehåller 5 st olika frukter av datatypen string.");
let arr1 = ["Banana", "Apple", "Pear", "Orange", "Durian"];
console.log(arr1);

/* 2 */
/* Gör en array som innehåller 3 olika datatyper, ex. string, number, array. */
console.log("Uppgift 2");
console.log("Gör en array som innehåller 3 olika datatyper, ex. string, number, array.");
let arr2 = ["Erik", 30, true];
console.log(arr2);

/* 3 */
/* console.log() hur många objekt arrayen ovan innehåller. */
console.log("Uppgift 3");
console.log("animals[]: ['cat', 'hamster', 'parrot', 'funky chihuahua']");
let animals = ["cat", "hamster", "parrot", "funky chihuahua"];
console.log(`Nr of elements in animals[]: ${animals.length} (but no objects!)`);

/* 4 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* I arrayen ovan, hämta cat. */
console.log("Uppgift 4");
console.log("I arrayen animals[], hämta cat.");
// const findCat = (element) => element == "cat";
// console.log(`index of 'cat' in animals[]: ${animals.findIndex(findCat)}`);
console.log(`index of 'cat' in animals[]: ${animals.findIndex((element) => element == "cat")}`);

/* 5 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* I arrayen ovan, hämta funky chihuahua. */
console.log("Uppgift 5");
console.log("I arrayen animals[], hämta funky chihuahua.");
console.log(`index of 'funky chihuahua' in animals[]: ${animals.findIndex((element) => element == "funky chihuahua")}`);

/* 6 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* I arrayen ovan, byt ut hamster mot tiger. */
console.log("Uppgift 6");
console.log("I arrayen animals[], byt ut hamster mot tiger.");
const hamsterIndex = animals.findIndex((element) => element == "hamster");
animals.splice(hamsterIndex, 1, "tiger");
//alternatively: animals[hamsterIndex] = "tiger";
//alternatively: animals = animals.with("tiger");
console.log(animals);

/* 7 */
/* let a = [1,2,3]; */
/* let b = [4,5,6]; */
/* Sätt ihop ovanstående arrayer. */
console.log("Uppgift 7");
console.log("Sätt ihop arrayer a & b.");
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = a.concat(b);
console.log(c);

/* 8 */
/* let a = [1,2,3,7,8,9]; */
/* let b = [4,5,6]; */
/* Merga in array b på index 3 i array a.. */
console.log("Uppgift 8");
a = [1, 2, 3, 7, 8, 9];
b = [4, 5, 6];
a.splice(3, 0, ...b);
console.log(a);

/* 9 */
/* let arr = ['a', 'b', 'c']; */
/* Klona ovanstående array. */
console.log("Uppgift 9");
console.log("Klona följande array: ['a', 'b', 'c']");
let letters = ["a", "b", "c"];
lettersClone = letters.slice(0);
console.log(`letters[]: ${letters}`);
console.log(`lettersClone[]: ${lettersClone}`);
// lettersClone2 = [].concat(...letters);
// lettersClone3 = letters.concat();
// lettersClone4 = Array.of(...letters);
// console.log(`lettersClone2[]: ${lettersClone2}`);
// console.log(`lettersClone3[]: ${lettersClone3}`);
// console.log(`lettersClone4[]: ${lettersClone4}`);

/* 10 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Lägg till en frukt i slutet av arrayen ovan. */
console.log("Uppgift 10");
let fruits = ["kiwi", "apple", "pear"];
console.log(fruits);
fruits.push("pineapple");
console.log(fruits);
fruits.pop();
console.log(fruits);

/* 11 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Lägg till en frukt i början av arrayen ovan. */
console.log("Uppgift 11");
console.log(fruits);
fruits.unshift("cherry");
console.log(fruits);
fruits.shift();
console.log(fruits);

/* 12 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* I arrayen ovan, ta bort sista frukten i arrayen. */
console.log("Uppgift 12");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push("pear");
console.log(fruits);

/* 13 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* I arrayen ovan, ta bort första frukten i arrayen. */
console.log("Uppgift 13");
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("kiwi");
console.log(fruits);

/* 14 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Sätt in en frukt i arrayen ovan på index 1. */
console.log("Uppgift 14");
console.log(fruits);
fruits.splice(1, 0, "durian");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);

/* 15 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Sätt in, tre frukter i arrayen ovan på index 2. */
console.log("Uppgift 15");
console.log(fruits);
newFruits = ["durian", "lemon", "avocado"];
fruits.splice(2, 0, ...newFruits);
console.log(fruits);
fruits.splice(2, newFruits.length);
console.log(fruits);

/* 16 */
/* let names = ['David', 'Christoffer', 'Johan', 'Maja'] */
/* I arrayen ovan, ta bort Christoffer och Johan. */
console.log("Uppgift 16");
let names = ["David", "Christoffer", "Johan", "Maja"];
console.log(names);
const christofferIndex = names.indexOf("Christoffer");
console.log(`christofferIndex: ${christofferIndex}`);
names.splice(christofferIndex, 1);
console.log(names);
const johanIndex = names.indexOf("Johan");
console.log(`johanIndex: ${johanIndex}`);
names.splice(johanIndex, 1);
console.log(names);

/* 17 */
/* let nums = [1,2,3,4,5,6,7,8,9]; */
/* Spegelvänd på arrayen ovan. */
console.log("Uppgift 17");
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(nums);
nums.reverse();
console.log(nums);

/* 18 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* Kika om strängen ovan innehåller bokstaven n. */
console.log("Uppgift 18");
let str = "Supercalifragilisticexpialidocious";
if (str.includes("n")) {
	console.log(`${str} contains 'n'!`);
} else {
	console.log(`${str} does not contain 'n'!`);
}

/* 19 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* Kika om strängen ovan innehåller bokstaven x. */
console.log("Uppgift 19");
if (str.includes("x")) {
	console.log(`${str} contains 'x'!`);
} else {
	console.log(`${str} does not contain 'x'!`);
}
/* 20 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I ovanstående sträng, hitta vilket position första förekomsten av p har. */
console.log("Uppgift 20");
// const isP = (element) => (element = "p");
const firstPIndex = str.indexOf("p");
console.log(`first instance of 'p' in "${str}" occurs at index ${firstPIndex}.`);

/* 21 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I strängen ovan, plocka fram de 5 första tecknena. */
console.log("Uppgift 21");
console.log(`first 5 letters: ${str.slice(0, 5)}`);

/* 22 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I strängen ovan, plocka fram de 7 sista tecknena. */
console.log("Uppgift 22");
console.log(`last 7 letters: ${str.slice(-7)}`);

/* 23 */
/* let numArray = [23, 45, 5, 62, 1, 21, 3, 54]; */
/* I arrayen ovan, filtera fram alla nummer över 5. Tips: Läs dokumentationen för filter() */
console.log("Uppgift 23");
let numArray = [23, 45, 5, 62, 1, 21, 3, 54];
console.log(numArray);
const numArrayTrimmed = numArray.filter((element) => element > 5);
console.log(numArrayTrimmed);

/* 24 */
/* let numArray = [23, 45, 5, 62, 1, 21, 3, 54]; */
/* I arrayen ovan, filtera fram alla nummer under 5. Tips: Läs dokumentationen för filter() */
console.log("Uppgift 24");
const numArrayTrimmed2 = numArray.filter((element) => element < 5);
console.log(numArrayTrimmed2);

/* 25 */
/* Skriv ut alla namn som är 18 år eller över från arrayen längst upp i dokumentet. */
console.log("Uppgift 25");
console.log("18 eller äldre:");
for (let i = 0; i < persons.length; i++) {
	if (persons[i].age >= 18) {
		console.log(persons[i].name);
	}
}

/* 26 */
/* Skriv ut alla namn som är under 18 år från arrayen längst upp i dokumentet. */
console.log("Uppgift 26");
console.log("Yngre än 18:");
for (let i = 0; i < persons.length; i++) {
	if (persons[i].age < 18) {
		console.log(persons[i].name);
	}
}

/* 27 */
/* let arr = ['beta', 'alfa', 'gamma']; */
/* Sortera ovanstående array alfabetisk. Tips: Läs dokumentattionen för sort() */
console.log("Uppgift 27");
let greekABC = ["beta", "alfa", "gamma"];
console.log(greekABC);
greekABC.sort();
console.log(greekABC);

/* 28 */
/* let nums = [1,5,7,9,3,4,2,6,8]; */
/* Sortera ovanstående array numeriskt. */
console.log("Uppgift 28");
nums = [10, 1, 5, 7, 9, 3, 4, 2, 6, 8]; //added 10 to differentiate between correctly sorting, and sorting alphanumerically.
console.log(nums);
nums.sort((a, b) => {
	if (a < b) {
		return -1;
	}
	if (a > b) {
		return 1;
	} else {
		return 0;
	}
});
console.log("Sorted:");
console.log(nums);

/* 29 */
/* I person-arrayen längst upp i dokumentet, sortera objekten efter ålder, yngst först. */
console.log("Uppgift 29");
persons.sort((a, b) => {
	if (a.age < b.age) {
		return -1;
	}
	if (a.age > b.age) {
		return 1;
	} else {
		return 0;
	}
});
console.log("Sorted, youngest first:");
console.log(...persons);

/* 30 */
/* I person-arrayen längst upp i dokumentet, sortera objekten efter ålder, äldst först. */
console.log("Uppgift 30");
persons.sort((a, b) => {
	return Math.sign(b.age - a.age); // in case returning values other than -1, 0 or 1 cauuses some issue I'm unaware of.
});
console.log("Sorted, oldest first:");
console.log(...persons);
/* 31 */
/* I person-arrayen längst upp i dokumentet, sortera objekten i bokstavsordning efter deras namn */
console.log("Uppgift 31");
// console.log(...persons);
console.log("Sorted by name:");
persons.sort((a, b) => {
	if (a.name < b.name) {
		return -1;
	}
	if (a.name > b.name) {
		return 1;
	} else {
		return 0;
	}
});
console.log(...persons);

/* 32 */
/* I person-arrayen längst upp i dokumentet, gör om alla namn till versaler. */
console.log("Uppgift 32");
console.log("to upper-case:");
for (let i = 0; i < persons.length; i++) {
	persons[i].name = persons[i].name.toUpperCase();
}
console.log(...persons);

/* 33 */
/* I person-arrayen längst upp i dokumentet, spegelvänd alla namn. */
console.log("Uppgift 33");
console.log("reverse names:");
for (let i = 0; i < persons.length; i++) {
	let nameAsArr = persons[i].name.split("");
	let nameReversed = "";
	for (let i = nameAsArr.length - 1; i >= 0; i--) {
		nameReversed = nameReversed.concat(nameAsArr[i]);
	}
	persons[i].name = nameReversed;
}
console.log(...persons);

/* 34 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en forEach()-loop. console.log() varje ord. */
console.log("Uppgift 34");
fruits = ["apelsin", "päron", "äpple", "kiwi"];
console.log(fruits);
fruits.forEach((fruit) => {
	console.log(fruit);
});

/* 35 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en for of-loop. console.log() varje ord. */
console.log("Uppgift 35");
for (const fruit of fruits) {
	console.log(fruit);
}

/* 36 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en for-loop. console.log() varje ord. */
console.log("Uppgift 36");
for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

/* 37 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array. För varje varv i loopen ska du också skriva ut index. ex: */
/* 0 - apelsin */
/* 1 - päron */
/* 2 - äpple */
/* osv... */
console.log("Uppgift 37");
for (let i = 0; i < fruits.length; i++) {
	console.log(`${i}: ${fruits[i]}`);
}
