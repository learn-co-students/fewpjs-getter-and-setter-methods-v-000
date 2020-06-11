// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  //
  // set radius(radius) {
  //   return this.diameter() / 2
  // }

    set diameter(diameter) {
      // this._diameter = diameter;
      this.radius = diameter / 2;
    }

  get diameter() {
    return this.radius * 2;
  }



  // get circumference() {
  //   return (Math.PI * this.radius**)
  //   return (Math.PI * this.diameter(this.radius))
  // }

  get area() {
    return (this.radius * this.radius * Math.PI)
  }


  get circumference() {
    return this.radius * 2 * Math.PI
  }

  set circumference(circumference) {
    // this.circumference = circumference;
    this.radius = (circumference / (2 * Math.PI));
    // this.radius = (2 * Math.PI) / circumference;
  }
  //
  // get circumference() {
  //   return this.diameter() * Math.PI
  // }
  //
  // get circumference(radius) {
  //   return this.diameter(radius) * Math.PI
  // }

  // set circumference(radius) {
  //   this.circumference
  // }
}
