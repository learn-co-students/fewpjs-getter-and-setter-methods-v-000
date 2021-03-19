// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2
  }

  get circumference() {
    return Math.PI * this.diameter
  }

  get area() {
    return Math.PI * (this.radius * this.radius)
  }

  set diameter(value) {
    this.radius = value / 2
    return this.diameter
  }

  set circumference(value) {
    this.diameter = value / Math.PI
    return this.circumference
  }

  set area(value) {
    this.circumference = (value / Math.PI) / (value / Math.PI)
    return this.area
  }
}