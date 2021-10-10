let nJuegos = 0;

do {
    nJuegos = parseInt(prompt("Ingrese las veces que jugará", 1));    
} while (!isNaN(nJuegos) && nJuegos > 0 )

for (let i = 0; i < nJuegos; i++) {
    let player_game = 0

    do {
        player_game = parseInt(prompt( "1. Piedra \n 2. Papel \n Tijera"), 1 )
    } while (isNaN(player_game) || player_game < 1 || player_game > 3) ;
    
    const computer_game = Math.floor(Math.random() * 3 ) + 1
}


const piedra= 0;
const papel= 1;
const tijera= 2;

const opciones = ["piedra", "papel", "tijera"];

const OpcionUsuario;

OpcionUsuario = prompt("Seleccione su jugada: \n piedra: 0 \n papel: 1 \n tijera: 2", 0);

alert("Su eleccón es: " +OpcionUsuario)

let opciionPC = Math.floor(math.random() * 3)  *1









    