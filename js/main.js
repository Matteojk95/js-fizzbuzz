for (let i=0; i<=100; i++) {
    document.getElementById("squaresContainer").innerHTML+= `<div class="square">
       <p class="text-center text-white fs-3 fw-3 vertical-align-square">${i}</p>
       </div>`
       ;     
}
 
// Scrivi un programma che stampi i numeri da 1 a 100
for (let i=0; i<=100; i++) {

// per i multipli di 3 stampi “Fizz” al posto del numero 
if (i % 3 == 0) {
    console.log ("fizz");
} else if (i % 5 == 0) {
// e per i multipli di 5 stampi Buzz
console.log ("buzz");
} else if ( i % 3 == 0 && i % 5 == 0) {
    console.log ("FizzBuzz");
} else {
    console.log ("i");
}
}