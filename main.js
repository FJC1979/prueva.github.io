import {change} from "/modulo/function-win.js";
// ``

const d = document;
let jugActual = "";

const todosLosCuadrados = d.querySelectorAll(".num");
//console.log(todosLosCuadrados[0]);
const cuadrados = {
    cua1: "",
    cua2: "",
    cua3: "",
    cua4: "",
    cua5: "",
    cua6: "",
    cua7: "",
    cua8: "",
    cua9: "",
};



    // usuario hace click

    d.addEventListener("click", (e) => {
        //se decalra las variables para guardas los valores antes y despues de hacer clik en el tablero.

        let valTableBeforeClick;
        var valTableAfterClick;
        const element = e.target; //element es el element donde se hizo el click.
        console.log(element.innerHTML);
        //let valActual=(valor=="X" || valor=="O");
        //if (valActual) return;// alert("ya se uso") ;

        // validar si es el evento es dentro del tablero.

        if (element.className == "num") {
            valTableBeforeClick = element.innerHTML;
            // cambio de jugador.
            if (element.innerHTML === "O" || element.innerHTML === "X")
                return alert("no se habilita el cuadrado debe elegir otro");
                if (jugActual === "a" || jugActual == "") {
                    jugActual = "b";
                    element.innerHTML = "X";
                    change(valTableBeforeClick, element.innerHTML,cuadrados);
                } else {
                    jugActual = "a";
                    element.innerHTML = "O";
                    change(valTableBeforeClick, valTableAfterClick,cuadrados);
                }
        }
    });
