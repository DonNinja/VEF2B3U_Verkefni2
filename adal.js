let pizza = {
	price: [1990, 2150, 2300],
	size: ['stór', 'miðlungs', 'lítil'],
	toppings: ['pepperoni', 'skinka', 'ostur', 'beikon'],
	pizzaeitt: function() {
		document.write('Margherita: Stærð: ' + this.size[2] + ' | Álegg: ' + this.toppings[2] + ' | Verð: ' + this.price[0] + ' <br />')
	},
	pizzatvo: function() {
		document.write('Meatlover\'s: Stærð: ' + this.size[0] + ' | Álegg: ' + this.toppings[0] + ', ' + this.toppings[1] + ', ' + this.toppings[3] + ' | Verð: ' + this.price[2] + '')
	}
};


var piza1 = document.getElementById("uno");
var eitt = pizza.pizzaeitt();
piza1.textContent = eitt;

var piza2 = document.getElementById("dos");
var tvo = pizza.pizzatvo();
piza2.textContent = tvo;