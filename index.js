
class Circle{
    constructor(radius){
        this.radius = radius ;
    }

// getters

    get diameter() {
        return (2 * this.radius)
    }

    get circumference(){
       return (Math.PI * this.diameter)
    }
    
    get area(){
        return (this.radius * this.radius) * Math.PI
    }

// setters
    set diameter(number) {
        this.radius = (number / 2)
        
    }

    set circumference(number) {
        this.radius = (number /( Math.PI * 2))
    }

}