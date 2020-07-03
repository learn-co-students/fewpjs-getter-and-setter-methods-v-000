// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    } 
    get diameter() {
        return this.radius * 2
    }
    get circumference() {
        return Math.PI * this.diameter
    }
    get area() {
        return Math.PI * (this.radius * this.radius)
    }   
    set radius(radius) {
        this.radius = this.radius;
        // return 
    }     
    set diameter(diameter) {
        // this.radius = this.radius * 2;
        this.radius = radius * 2;
    }
    set circumference(circumference) {
        // this.radius = Math.PI * this.diameter;
        this.radius = Math.PI * diameter;
    }
    set area(area) {
        // this.radius = Math.PI * (this.radius * this.radius);
        this.radius = Math.PI * (radius * radius);
    }

}
