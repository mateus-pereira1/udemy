const arr = [1,2,3,4,5];

const highNumbers = arr.filter((n) => n >= 3)

console.log(highNumbers);


const users = [
    {name: 'Mateus', avaliable: true},
    {name: 'João', avaliable: false},
    {name: 'Carlos', avaliable: false},
    {name: 'Marcos', avaliable: true}
];

const avaliableUsers = users.filter((users) => users.avaliable);


console.log(avaliableUsers);