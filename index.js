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
    set diameter(radius) {
        this.radius = this.radius * 2;
    }
    set circumference(radius) {
        this.radius = Nath.PI * this.diameter;
    }
    set area(radius) {
        this.radius = Nath.PI * (this.radius * this.radius);
    }

}
