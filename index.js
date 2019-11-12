// Add your Circle class here
class Circle {
  constructor(radius) {
    this._radius = radius
  }

  get area() {
    return Math.PI * (this._radius * this._radius)
  }

  get circumference() {
    return Math.PI * this.diameter
  }

  set circumference(num) {
    this.diameter = num / Math.PI
  }

  get diameter() {
    return this._radius * 2
  }

  set diameter(num) {
    this._radius = num / 2
  }

  get radius() {
    return this._radius
  }
}
