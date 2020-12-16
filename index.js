// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return this.diameter = this.radius * 2;
    }
    get circumference() {
        return this.circumference = this.diameter * Math.PI;
    }
    get area() {
        return this.area = Math.PI * (this.radius ^ 2);
    }
    set diameter(diameter) {
        this.radius = diameter / 2;
    }
    set circumference(circumference) {
        this.radius = circumference / Math.PI / 2;
    }
    set area(area) {
        this.radius = area / Math.PI;
    }
}