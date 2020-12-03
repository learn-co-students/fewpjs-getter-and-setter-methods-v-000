// Add your Circle class here

class Circle{
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  set area(area) {
    this.radius = Math.sqrt(area/Math.PI);
  }

  get circumference() {
    return 2 * Math.PI * this.radius;
  }

  set circumference(circumference) {
    this.radius = circumference / (2 * Math.PI);
  }
}
