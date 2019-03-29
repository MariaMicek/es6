if (true) {
    const season = 'winter';
    // season = 'summer'        //błąd - redeklaracja
}

// console.log(season)     //błąd - is not defined

const object = {
    season: 'winter'
}
console.log(object)

object.season = 'summer'
console.log(object)

object.startDate = new Date()
console.log(object)

delete object.season
console.log(object)
