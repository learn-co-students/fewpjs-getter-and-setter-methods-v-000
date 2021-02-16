// Add your Circle class here
const pi = Math.PI;
class Circle {
  constructor(radius){
    this.radius = radius;
  }

// const pi = Math.PI;

get diameter() {
  return this.radius * 2;
}

get circumference() {
  return pi * this.diameter;
}

get area() {
  return pi * (this.radius*this.radius);
}

set diameter(diameter) {
  this.radius = diameter / 2
}

set circumference(circumference) {
  this.radius = circumference / (pi * 2);
}

set area(area) {
  this.radius = Math.sqrt(area / pi);
}
}
