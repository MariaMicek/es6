let evens = [1, 3, 5, 7];

const odds = evens.map(v => v + 1);

const pairs1 = evens.map( v => {return { even: v, odd: v + 1 }});
const pairs2 = evens.map( v => Object.assign({ even: v, odd: v + 1 }));
const pairs3 = evens.map( v => ({ even: v, odd: v + 1 }));

const nums = evens.map((v, i) =>  v + i );

console.log(odds)
console.log(pairs1)
console.log(nums)

const App = {
    handle: () => alert('CLICK'),
    init: () => $('body').click(() => this.handle())
}


