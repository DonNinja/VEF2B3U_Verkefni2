function Pizza(name, verð, stærð, álegg) {
	this.name = 'sveppapizza';
	this.verð = 1000;
	this.stærð = 'lítil';
	this.álegg = 'sveppir';
}
var pizzaeitt = new pizza('Margherita', 1990, 'miðlungs', 'ostur');
var pizzatvö = new pizza('Kjötveisla', 2500, 'stór', 'hakk, pepperoni & skinka');

var pizza1 = pizzaeitt.name + ': Verð: ' + pizzaeitt.verð + ' Stærð: ' + pizzaeitt.stærð + ' Álegg: ' + pizzaeitt.álegg;
var eitt = document.getElementById("uno");
eitt.textContent = pizzaeitt;

var piza2 = document.getElementById("dos");
var tvo = pizza.pizzatvo();
piza2.textContent = tvo;