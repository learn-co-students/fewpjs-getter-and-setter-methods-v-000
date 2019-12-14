// Add your Circle class here

class Circle { // create a class of circle

    constructor (radius) {   // accept 1 parameter
        this.radius = radius;
    }

    get diameter() {  // define getter methods for diameter ( radius * 2)
        return this.radius * 2;
    }

    get circumference() {  // define getter methods for circumference (diameter * Math.PI)
        return (this.radius * 2) * Math.PI;
    }

    get area() {  // define getter methods for area (diamter * pi)
        return this.radius * this.radius * Math.PI;
    }

    set diameter(diameter) {  // define setter method for diameter
        this.radius = diameter / 2;
    }

    set circumference(circumference) {  // define setter method for circumference
       this.radius = circumference / ( Math.PI * 2 );
    }

    set area (area) {  // define setter method for area
        this.area = (radius * radius) * Math.PI;
    }

}

