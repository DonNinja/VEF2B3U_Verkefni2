let pizza = {
	price: [1990, 2150, 2300],
	size: ['stór', 'miðlungs', 'lítil'],
	toppings: ['pepperoni', 'skinka', 'ostur', 'beikon'],
	pizza1: function() {
		document.write('Margherita: Stærð: ' + this.size[2] + ' | Álegg: ' + this.toppings[2] + ' | Verð: ' + this.price[0] + ' ');
	},
	pizza2: function() {
		document.write('Meatlover\'s: Stærð: ' + this.size[0] + ' | Álegg: ' + this.toppings[0] + ', ' + this.toppings[1] + ', ' + this.toppings[3] + ' | Verð: ' + this.price[2] + '')
	}
};

var piza1 = document.getElementById("uno");
var piza2 = document.getElementById("dos");

var eitt = pizza.pizza1();
var tvo = pizza.pizza2();

piza1.textContent = eitt;
piza2.textContent = tvo;