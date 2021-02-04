class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  set area(newArea) {
    this.radius = Math.sqrt(newArea/Math.PI);
  }
 
  set diameter(d) {
    this.radius = d/2;
  }

  set circumference(c) {
    this.radius = c/(Math.PI * 2);
  }
 
  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return this.radius * 2 * Math.PI;
  }

  get area() {
    return (this.radius ** 2) * Math.PI;
  }
}