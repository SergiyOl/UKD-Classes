class Iphone{
    constructor(model, year, color, ram, brand){
        this.model = model
        this.year = year
        this.color = color
        this.ram = ram
        this.brand = brand
    }
    
    get model(){
        return this._model;
    }
    set model(model){
        this._model = 'X'
    }

    get year(){
        return this._year;
    }
    set year(year){
        this._year = 2019
    }

    get color(){
        return this._color;
    }
    set color(color){
        this._color = 'white'
    }
    
    get ram(){
        return this._ram;
    }
    set ram(ram){
        this._ram = 64
    }

    get brand(){
        return this._brand;
    }
    set brand(brand){
        this._brand = 'Apple'
    }
}
let iphone = new Iphone()
console.log(iphone)