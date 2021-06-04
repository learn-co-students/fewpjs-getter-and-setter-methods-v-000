class Circle {
  constructor(radius){
    this.radius = radius
  }

  get diameter(){
    return this.radius * 2
  }

  get circumference(){
    return this.diameter * 3.14
  }

  get area(){
    return 3.14 * (this.radius * this.radius)
  }

  set diameter(input){
    this.radius = input / 2
  }

  set circumference(input){
    this.radius = (input / 3.14) / 2
  }
}