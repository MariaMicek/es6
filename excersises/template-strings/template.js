//Stary sposób
const name ='Marysia'
let text = 'Mam na imię ' + name
console.log(text)

//Tempate string
text = `Mam na imię ${name}`
console.log(text)

text = `Czy imię to "Marysia"? - ${name === 'Marysia'}`   //można użyć ciapek wewnątrz template stringów
console.log(text)

text = `\${name} vs ${name}`
console.log(text)

//wcześniej - enter: \n tablulator: \t
text = `1       
    2
3`
console.log(text)