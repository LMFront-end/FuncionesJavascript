let nombre = 'Lina';

let monto = 12.50;

const doble = (x) => {
    return x * 2
}

const ope = doble;

console.log(ope(10));

// Ejemplo 1

const customers = [{
        id: 1,
        name: 'Lina',
        status: 'active'
    },
    {
        id: 2,
        name: 'Pablo',
        status: 'cancelled'
    },
    {
        id: 3,
        name: 'Mateo',
        status: 'inactive'
    },
    {
        id: 4,
        name: 'Nicolas',
        status: 'prospect'
    },
    {
        id: 5,
        name: 'Laura',
        status: 'active'
    },
    {
        id: 6,
        name: 'Camila',
        status: 'active'
    },
    {
        id: 7,
        name: 'Simon',
        status: 'prospect'
    },
]


const activeCustomers = customers.filter((customer) => {

    return customer.status === 'active';
});

console.log(activeCustomers);

//las funciones tambien pueden utilizarse comos salida a otras funciones

function crearCalificador(adjetivo) {
    return function(sustantivo) {
        return `${adjetivo} ${sustantivo}`
    }
}

const calificarComosuper = crearCalificador('super');

const amigo = calificarComosuper('amigo');

console.log(amigo);