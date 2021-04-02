// Add your Circle class here
class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius
    }

    get diameter() {
        return 2 * this.radius;
    }
    get circumference() {
        return Math.PI * this.diameter;
    }

    get area() {
        return Math.PI * this.radius**2;
    }

    set diameter(diameter) {
        this._radius = diameter/2;
    }

    set circumference(circumference) {
        this._radius = circumference/(2*Math.PI)
    }

    set area(area) {
        this._radius = Math.sqrt(area/Math.PI)
    }
}