// Add your Circle class here

class Circle{
  constructor(radius){
    this.radius = radius;
  }
  
  get diameter(){
    return 2 * this.radius;
  }
  
  get circumference(){
    return Math.PI * this.diameter;
  }
  
  get area(){
    return Math.PI * this.radius * this.radius;
  }
  
  set diameter(diameter){
    this._diameter = diameter;
    this.radius = this._diameter / 2;
  }
  
  set circumference(circumference){
    this._circumference = circumference;
    this.radius = this._circumference / (2 * Math.PI);
  }
  
  set area(area){
    this._area = area;
    this.radius = Math.sqrt(this._area / Math.PI)
  }
}