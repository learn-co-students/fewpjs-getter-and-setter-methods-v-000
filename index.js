// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2
  }

  get circumference() {
    return this.diameter * Math.PI
  }

  get area() {
    return (this.radius**2) * Math.PI
  }

  set diameter(num) {
    this.radius = num/2
  }

  set circumference(num) {
    this.radius = num/(2 * Math.PI)
  }
}
