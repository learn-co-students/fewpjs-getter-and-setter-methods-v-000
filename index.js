class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return 2 * this.radius
    }

    get circumference() {
        return this.diameter * Math.PI
    }

    get area() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    set diameter(newDiameter) {
        this.radius = newDiameter / 2
    }

    set circumference(newCircumference) {
        this.radius = newCircumference / (2 * Math.PI)  
    }
}