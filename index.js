// Add your Circle class here
let pi = 3.14;
class Circle {
  constructor(r) {
    this.radius = r;
  }

  set diameter(d) {
    this.radius = d / 2;
  }

  get diameter() {
    return this.radius * 2;
  }

  set circumference(c) {
    this.radius = c / (3.14 * 2);
  }

  get circumference() {
    return pi * 2 * this.radius;
  }

  set area(a) {
    this.radius = Math.sqrt(a / 3.14);
  }

  get area() {
    return this.radius * this.radius * pi;
  }
}