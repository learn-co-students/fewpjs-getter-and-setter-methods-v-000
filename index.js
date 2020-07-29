class Circle {
    constructor(radius) {
        this.radius = radius;
    };

    get diameter() {
        return this.radius * 2
    };

    get circumference() {
        return Math.PI * this.diameter
    };

    get area() {
        return Math.PI * (this.radius * this.radius)
    };

    set diameter(d) {
        return this.radius = d / 2
    };

    set circumference(c) {
        return this.radius = (c / Math.PI) / 2 
    };

}