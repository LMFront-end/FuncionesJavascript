import U, { printName as printUserName, printAge } from './user.js'

const user = new U('Lina', 22);
console.log(user);

printUserName(user);
printAge(user);