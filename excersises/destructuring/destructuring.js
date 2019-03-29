//1
let table = ['first', 'second', 'third', 'fourth'];
const [A, B] = table
console.log(`Is first first? => ${A === 'first'}, and second second? => ${B === 'second'}`);

//2
let mixed = {
    one: 1,
    two: 2,
    values: {
        array: [3, 4, 5]
    }
};
const {one, two, values: {array: [three,,five]}} = mixed
console.log(` ${one}, ${two}, ${three}, ${five} `);

//3
let numbers = [1, 2, 3, 4]
const [first, , , fourth] = numbers
console.log(first, fourth)

//4
volutedArray = ['name', 1, ["test", 2 , "test2"], 3, "new"]
const [a,,[b,,c],,d] = volutedArray
console.log(a,b,c,d)

//5
const User = {
    name: 'Marysia',
    age: '20',
    creditCard: {
        creditCardNumber: '4253425252425252',
        cvv: '444'
    },
    favoriteFood: 'pasta'
}
let {name: login, creditCard: {cvv: secretCode}, favoriteFood: food} = User
console.log(login, secretCode, food)

//6
const dimensions = () => ({width: 100, height: 100})
let{width, height} = dimensions()                           //funkcje trzeba wywołać, ale poza tym zachowuje się jak obiekt!
console.log(height, width)

