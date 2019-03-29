const up = () => {      //function(){}
    return 'test1'
}
console.log(up)
console.log(up())

const up1 = () => 'test2'
console.log(up1())

const up2 = param => param.toUpperCase()
console.log(up2('marysia'))

const up3 = (a,b) => {
    a.toUpperCase()
    b.toUpperCase()
    return `${a} i ${b}`
}
console.log(up3('kot', 'pies'))
