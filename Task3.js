class Phone{
    constructor(model, year, color, mem){
        this.model = model;
        this.year = year;
        this.color = color;
        this.mem = mem
    }
}

class Iphone extends Phone{
    constructor(model, year, color, mem) {
        super(model, year, color, mem)
        this.brand = 'Iphone';
    }
}

class Xiaomi extends Phone{
    constructor(model, year, color, mem) {
        super(model, year, color, mem)
        this.brand = 'Xiaomi';
    }
}

class Samsung extends Phone{
    constructor(model, year, color, mem) {
        super(model, year, color, mem)
        this.brand = 'Samsung';
    }
}

console.log(new Iphone('X',2019,'white',64))
console.log(new Xiaomi('Note 7',2020,'gray',64))
console.log(new Samsung('A33',2021,'black',128))