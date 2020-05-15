// Add your Circle class here

class Circle {

    constructor(radius){
        this.radius = radius
    }


    set diameter(input){
       return this.radius = input/2
    }

    get diameter(){
        return this.radius * 2
    }

    

    get circumference(){
        return Math.PI * 2 * this.radius;
    }

    set circumference(input){
        return this.radius = input / (2 * Math.PI)

    }
      
    get area(){
        return (this.radius * this.radius) * Math.PI;
    }

    set area(input){
        return this.radius = sqrt(input / Math.PI)

    }


}

