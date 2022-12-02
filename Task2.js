class Iphone{
    constructor(model, year, color, mem, ram){
        this.model = model;
        this.year = year;
        this.color = color;
        this.mem = mem
        this.brand = 'Iphone';
    }
}

class Xiaomi{
    constructor(model, year, color, mem, ram){
        this.model = model;
        this.year = year;
        this.color = color;
        this.mem = mem
        this.brand = 'Xiaomi';
    }
}

class Samsung{
    constructor(model, year, color, mem, ram){
        this.model = model;
        this.year = year;
        this.color = color;
        this.mem = mem
        this.brand = 'Samsung';
    }
}

console.log(new Iphone('X',2019,'white',64))
console.log(new Xiaomi('Note 7',2020,'gray',64))
console.log(new Samsung('A33',2021,'black',128))