class Candy {
    constructor(sweetnessLevel, color, number){
        this.sweetnessLevel = sweetnessLevel,
        this.color = color
        this.numberOfBites = number
    }
    bite(){
        this.numberOfBites--
        console.log(`${this.numberOfBites} bites left...`)
    }
    static showWarning(){                                   //wywoływana na klasie (oraz na klasach po niej dziedziczących), a nie instancji. 
        console.log(`Don't eat sweets`)                     //Nie można użyć w statycznej medodzie this!
    }
}

class Krowka extends Candy {
    constructor(owner){
        super('very sweet', 'yellow', 10)
        this.owner = owner
    }
    throwToStudent(student){
        this.owner = student
        console.log(`I'm the new owner: ${this.owner}`)
    }
}

const krowka1 = new Krowka('Łukasz')

console.log(`I'm the owner: ${krowka1.owner}`)
console.log(`Sweetness: ${krowka1.sweetnessLevel}`)
console.log(`Color: ${krowka1.color}`)

krowka1.throwToStudent('Marysia')
krowka1.bite()
krowka1.bite()
krowka1.bite()

const randomCandy = new Candy('Medium sweet', 'blue', 5)
console.log(`Sweetness: ${randomCandy.sweetnessLevel}`)
console.log(`Color: ${randomCandy.color}`)

randomCandy.bite()
randomCandy.bite()
randomCandy.bite()
randomCandy.bite()
randomCandy.bite()

Candy.showWarning()

