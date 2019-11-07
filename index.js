class Circle {
	constructor(radius) {
		this.radius = radius;
	}

	get diameter() {
		return this.radius * 2;
	}

	get circumference() {
		let pi = Math.PI;
		let diameter = this.radius * 2;
		return pi * diameter;
	}

	get area() {
		let pi = Math.PI;
		return this.radius ** 2 * pi;
	}

	set diameter(diameter) {
		this.radius = diameter / 2;
	}

	set circumference(circumference) {
		let pi = Math.PI;
		this.radius = circumference / pi / 2;
	}

	set area(area) {
		let pi = Math.PI;
		this.radius = Math.sqrt(area / pi);
	}
}
