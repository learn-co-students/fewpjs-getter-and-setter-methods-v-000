// Add your Circle class here

class Circle {
    constructor(radius) {
      this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    get circumference() {
        return Math.PI * this.diameter;
    }

    get area() {
        return Math.PI * this.radius ** 2
    }

    set diameter(d) {
        if (d > 0) {
            this.radius = d/2
        }
    }

    set circumference(c) {
        if (c > 0) {
            this.radius = c/(2 * Math.PI)
        }
    }

    set area(a) {
        if (a > 0) {
          this.radius = squareIt(a * Math.PI)
        }
    }
  }