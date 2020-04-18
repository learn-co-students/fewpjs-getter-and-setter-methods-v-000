// Add your Circle class here
class Circle {
  constructor(radius){
    this.radius = radius;
  }

  get diameter(){
    return this.radius * 2
  }

  get circumference(){
    return (this.radius + this.radius) * Math.PI
  }

  get area(){
    return Math.PI * (this.radius * this.radius)
  }

  set diameter(newDiameter){
    return this.radius = newDiameter / 2

  }

  set circumference(newCircumference){
    return this.diameter = newCircumference / Math.PI
  }

  set area(newArea){}
}
