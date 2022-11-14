var pregunta = prompt("Ingresa tu opcion: Piedra, papel o tijera");
var user = pregunta.toLowerCase();
var opcion = ["piedra", "papel", "tijera"];
var machine = opcion[Math.floor(Math.random() * 3)]

if((user === "piedra" && machine === "papel") || (user === "papel" && machine === "tijera")  || (user === "tijera" && machine === "piedra")){
    console.log("Machine Win ", user, machine);
}else if  (user === machine) {
    console.log("Nobody Wins", user, machine);
}else{
    console.log("User Win", user, machine);
}
