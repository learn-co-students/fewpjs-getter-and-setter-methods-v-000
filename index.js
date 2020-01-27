// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this._diameter = (2 * this.radius)
  }

  get circumference() {
    return this._circumference = Math.PI * 2 * this.radius
  }

  get area() {
    return this._area = Math.PI * (this.radius * this.radius)
  }

  set diameter(measurement) {
    this.radius = measurement/2
  }

  set circumference(measurement) {
    this.radius = (measurement/2)/Math.PI
  }

  set area(measurement) {
    this.radius = Math.sqrt(measurement/Math.PI)
  }

}