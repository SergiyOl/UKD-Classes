class Phone{
    constructor(model, year, color, mem) {
        this.model = model;
        this.year = year;
        this.color = color;
        this.mem = mem
    }

    calculatePrice = () => {
        let koef = 1.12 
        return Math. round(((this.mem * koef)/ (YearNow - this.year)) * 10);
    }

    calculateYear = () => {
        return(YearNow - this.year)
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

var YearNow = 2022

let iphone = new Iphone('X',2019,'white',64)
let xiaomi = new Xiaomi('Note 7',2020,'gray',64)
let samsung = new Samsung('A33',2021,'black',128)

console.log('Телефону ' + iphone.calculateYear() + ' р');
console.log('Ціна телефона - '+ iphone.calculatePrice() + ' $');

console.log('Телефону '+ xiaomi.calculateYear() + ' р');
console.log('Ціна телефона - ' + xiaomi.calculatePrice() + ' $');

console.log('Телефону '+ samsung.calculateYear() + ' р') ;
console.log('Ціна телефона - '+ samsung.calculatePrice() + ' $');