// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return this.radius * 2
    }
    
    get circumference(){
        return this.diameter * Math.PI
    }

    get area(){
        return ( this.radius**2) * Math.PI
    }

    set diameter(diam){
        this.radius = diam / 2
    }

    set circumference(circum){
        this.radius = (circum / Math.PI) / 2
     }
}