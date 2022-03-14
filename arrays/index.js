/**
 * Arrays
 */

const b = [1, true, "hola", ["A", "B", "C"]];

console.log(b.length)

// Acceder a los elementos

console.log(b[2]); //hola
console.log(b[3][1]); // b

//Metodos de arrays

const movies = [

    {
        id: 1,
        title: 'Harry P. y la piedra filosofal',
        año: 2001,
        personajes: [
            'Harry potter',
            'Hermione Granger',
            'Lord Voldemort',
            'Albus Dumbledor',
            'Draco Malfoy'
        ]
    },

    {
        id: 2,
        title: 'El conjuro 3',
        año: 2021,
        personajes: [
            'Vera Farmiga',
            'Patrick Wilson',
            'Sarah Hook'
        ]
    },
    {
        id: 3,
        title: 'Historias de miedo para contar en la oscuridad',
        año: 2019,
        personajes: [
            'Zoe Margaret',
            'Michael Garza',
            'Austin Abrams'
        ]
    }
];

// find --> buscar un elemento

const encontrar = movies.find(post => post.title === 'El conjuro 3');

console.log(encontrar);

// some (true or false)

const coincidencia = movies.some(post => post.id === 4);

console.log(coincidencia);

// some usando el includes

const includes = movies.some(post => post.personajes.includes('Hermonie'));
console.log(includes);

// every 

const enTodos = movies.every(post => post.personajes.includes('Hermione'));
console.log(enTodos);

//map

const arr = movies.map((titulo) => {

    return titulo.title;
})

console.log(arr);

// Reduce

const redu = movies.reduce((allTitles, post) => {
    return Array.from([...allTitles, ...post.personajes])
}, [])

console.log(redu);