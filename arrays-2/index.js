//Manipulando arrays

//map
const arr1 = [1, 2, 3, 5];
const met1 = arr1.map(n => n * 2);
console.log(met1); // [2,4,6,10]

//filter
const arr2 = ['🍕', '🍔', '🍟', '🌭', '🥚'];
const met2 = arr2.filter(n => n === '🥚');
console.log(met2); // ['🥚']

//findIndex 
const arr3 = ['🍕', '🍔', '🍟', '🌭', '🥚'];
const met3 = arr3.findIndex(n => n === '🍟');
console.log(met3); // ['2']

//fill
const arr4 = ["", "", ""];
const met4 = arr4.fill('🥓');
console.log(met4); // ['🥓', '🥓', '🥓']