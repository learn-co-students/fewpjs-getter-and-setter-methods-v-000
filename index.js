// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2
    }

    set diameter(diameter) {
        this.radius = diameter / 2
    }

    get circumference() {
        return pi * this.diameter
    }

    set circumference(circ) {
        this.diameter = circ / pi
    }

    get area() {
        return pi * (this.radius * this.radius)
    }

    set area(area) {
        this.radius = Math.sqrt(area / pi)
    }

}

let pi = Math.PI