// Add your Circle class here
// Use Math.PI to get an accurate measurement of pi (π)
const pi = Math.PI

// Circle will accept 1 parameter,
class Circle {
  constructor( radius ) {
    // radius, and use this.radius to store the value
    this.radius = radius;
  }

  // Define getter methods for:
  get diameter() {
    return this.radius * 2
  }

  // Define getter methods for:
  set diameter(diameter) {
    this.radius = diameter / 2
  }

  // Define getter methods for:
  get circumference() {
    return (this.radius * 2) * pi
  }

  // Define setter methods for
  set circumference(circumference) {
    this.radius = circumference / (pi * 2)
  }

  // Define setter methods for
  get area() {
    return pi * (this.radius * this.radius)
  }

  // Define setter methods for
  set area( area ) {
    this.radius = Math.sqrt(area / pi)
  }
}
