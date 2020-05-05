class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return (this.radius * 2) * Math.PI;
  }

  get area() {
    return (this.radius**2) * Math.PI;
  }

  set diameter(newDiam) {
    this.radius = newDiam / 2;
  }

  set circumference(newCirc) {
    this.radius = newCirc / (Math.PI * 2);
  }

  set area(newArea) {
    this.radius = Math.sqrt(newArea / Math.PI);
  }
}
