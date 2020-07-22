// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius = radius;
  }
  static get pi() {
    return Math.PI;
  }
  get diameter(){
    return this.radius*2;
  }
  get circumference (){
    return this.diameter*Circle.pi;
  }
  get area (){
    return Math.pow(this.radius,2)*Math.PI;
  }
  set diameter(newVal){
    this.radius = newVal/2;
  }
  set circumference(newVal){
    this.radius=newVal/Math.PI/2;
  }
  set area(newVal){
    this.radius=sqrt(newVal/Math.PI);
  }


}
