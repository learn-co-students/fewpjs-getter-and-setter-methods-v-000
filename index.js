const pi = Math.PI;

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return this.diameter * pi;
  }

  get area() {
    return (this.radius * this.radius) * pi;
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  set circumference(circumference) {
    this.radius = circumference / (2 * pi)
  }
}
