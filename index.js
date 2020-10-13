// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
    this.pi = 3.14;
  }

  get diameter(){
    return 2 * this.radius;
  }

  set diameter(newDiameter){
    this.radius = newDiameter / 2;
  }

  get circumference(){
    return this.pi * this.diameter;
  }

  set circumference(newCircumference){
    this.radius = newCircumference / (this.pi * 2);
  }

  get area(){
    return this.pi * this.radius * this.radius
  }
}
