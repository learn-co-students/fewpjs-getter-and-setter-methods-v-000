// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get radius(){
        return this._radius;
    }

    set radius(radius){
        this._radius = radius;
    }

    get diameter(){
        return this._diameter = this.radius * 2;
    }

    set diameter(diameter){
        this._diameter = diameter;
        this.radius = diameter / 2;
    }

    get circumference(){
        return this._circumference = this.diameter * Math.PI;
    }

    set circumference(circumference){
        this._circumference = circumference;
        this.radius = (circumference / Math.PI) / 2;
    }

    get area(){
        return this._area = Math.pow(this.radius, 2) * Math.PI;
    }

    set area(area){
        this._area = area;
    }
}