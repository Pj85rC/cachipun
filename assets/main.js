validacionJuego = false;

do{
let nJuegos = parseInt(prompt("Ingrese el número de veces que quiere jugar al cachipun", 1)); 
    //Condición Validación
    if(nJuegos == isNaN && nJuegos <= 0){
        alert("Dato incorrecto, ingrese digito númerico mayor a 0")
        validacionJuego=false;
    }
    else{
        alert("Usted tiene "+ nJuegos+ "intento(s)");
        validacionJuego=true;
    }
}while(validacionJuego==false)


for (let i = 1; i <= nJuegos; i++) {
    let pcGamer = Math.floor(Math.random() * 3 ) + 1
    let jugada;
    do{
        jugada = parseInt(prompt("Seleccione su jugada: \n 1.piedra, \n 2.papel \n 3.tijera", 1))

        if( jugada == pcGamer){
            alert("Usted ha empatado con la maquina");
        }
        switch (jugada){
            case "1":
                if(pcGamer==3){
                    alert("Felicidades!, ha ganado el juego, su selección es piedra vs la selección tijera por parte de la maquina")
                }
                else{
                    alert("Lo sentimos!, ha perdido el juego, su selección es piedra vs la selección papel por parte de la maquina")
                }
                break; 
            case "2":
                if(pcGamer==1){
                    alert("Felicidades!, ha ganado el juego, su selección es papel vs la selección piedra por parte de la maquina")
                }
                else{
                    alert("Lo sentimos!, ha perdido el juego, su selección es papel vs la selección tijera por parte de la maquina")
                }
                break; 
            case "3":
                if(pcGamer==2){
                    alert("Felicidades!, ha ganado el juego, su selección es tijera vs la selección papel por parte de la maquina")
                }
                else{
                    alert("Lo sentimos!, ha perdido el juego, su selección es tijera vs la selección piedra por parte de la maquina")
                }
                break; 
            default:
                alert("el caracter ingresado es invalido, intente nuevamente.")     
        }
    }
    while(jugada != isNaN && jugada > 0 && jugada < 4);
}











    