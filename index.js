// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius=radius
    }

    get diameter(){
        return 2*this.radius
    }
    set diameter(diameter){
        this.radius=diameter/2
    }

    get circumference(){
        return Math.PI*this.diameter
    }
    set circumference(cir){
        this.radius=cir/(2*Math.PI)
    }

    get area(){
        return Math.PI*this.radius*this.radius
    }
    set area(area){
        this.radius=Math.sqrt(area/Math.PI)
    }
}
/*
let cir = new Circle(3);
console.log(cir.radius,"radius");
console.log(cir.diameter,"diameter");
console.log(cir.circumference,"cir");
console.log(cir.area,"area");*/