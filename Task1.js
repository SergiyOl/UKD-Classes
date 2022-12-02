class Iphone{
    constructor(){
        this.model = 'X'
        this.year = 2019
        this.color = 'white'
        this.mem = 64
        this.brand = 'Apple'
    }
}

class Xiaomi{
    constructor(){
        this.model = 'Note 7'
        this.year = 2020
        this.color = 'gray'
        this.mem = 64
        this.brand = 'Xiaomi'
    }
}

class Samsung{
    constructor(){
        this.model = 'A33'
        this.year = 2021
        this.color = 'black'
        this.mem = 128
        this.brand = 'Samsung'
    }
}

console.log(new Iphone)
console.log(new Samsung)
console.log(new Xiaomi)