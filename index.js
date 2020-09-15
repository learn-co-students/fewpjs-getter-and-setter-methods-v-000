// Add your Circle class here
const pi = Math.PI
class Circle {
    constructor(radius) {
        this.radius = radius
    }


    //Using a getter, you can return a computed value as though it is a property! 
    //getting is to create psuedo properties

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return ( this.radius * 2 ) * pi
    }

    get area() {
        return pi * ( this.radius * this.radius )
    }

    //Using a setter, you can call a function each time the value of a pseudo-property is changed, making sure all data on an class instance is consistent.
    //setting is to create properties

    set circumference( circumference ) {
        this.radius = circumference / ( pi * 2 )
    }

    
    set diameter(diameter) {
        this.radius = diameter/2
    }

    set area(area) {
        this.radius = Math.sqrt( area / pi )
    }
}