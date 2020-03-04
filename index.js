class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    let pi = Math.PI;

    set diameter(diameter) {
        this._diameter = radius * 2;
    }

    set circumference(circumference) {
        this._circumference = pi * diameter;
    }

    set area(area) {
        this._area = pi * (radius * radius);
    }

}