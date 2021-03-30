// var colors = ["yellow", "blue", "red", "orange"];
// var i = 0;
// var text = "";
// while (colors[i]) {
//     text += colors[i] + "<br>";
//     i++;
//     console.log(colors[i]);
// }


// var cars = ["BMW", "Volvo", "Saab", "Ford"];
// var i = 0;
// var text = "";
// while (cars[i]) {
//     text += cars[i] + "<br>";
//     i++;
// }

// const links = document.getElementsByTagName("a");

// for (i = 1; i <= links.length; i++) {
//     console.log("This is  link number " + i);
// }

// const colors2 = ["yellow", "blue", "red", "orange"];
// for (i = 0; i < colors2.length; i++) {
//     console.log(colors2[i]);
// }
const colors3 = ["yellow", "blue", "red", "orange"];

colors3.forEach(element => console.log(element));
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));


// Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
// 4 regels
// Hoeveel regels neemt mijn forEach method in beslag?
// 1 regel
// Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
// het heeft een callback function. dit is een functie met een argument naar een andere functie. De forEach methdo is ook makkelijker leesbaar.
// Kun je een array method gebruiken op een object? Het antwoord is nee.

// Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
// Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?

const object = { Fruit1: 213, Fruit2: 2, Groente1: 3, Groente2: 4, Ongezoend: 5 };

for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
