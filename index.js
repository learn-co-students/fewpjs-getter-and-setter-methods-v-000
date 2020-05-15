// Add your Circle class here

class Circle {

    constructor(radius){
        this._radius = radius
    }


    set diameter(input){
       return this._radius = input/2
    }

    get diameter(){
        return this._radius * 2
    }

    get radius() {
        return this._radius;
      }
    
      set radius(radius) {
       return this._radius = radius;
      }

    get circumference(){
        return Math.PI * 2 * this._radius;
    }

    set circumference(input){
        return this._radius = input / (2 * Math.PI)

    }
      
    get area(){
        return (this._radius * this._radius) * Math.PI;
    }

    set area(input){
        return this._radius = sqrt(input / Math.PI)

    }


}

