export   function  change(valBeforeClick,valAfterClick,cua){ 

    const d =document;
    const todosLoscua = d.querySelectorAll(".num");

    function winer(){
        d.querySelector(".ganador").outerHTML="<p class='h'>HAS GANADO</p>";

       // d.querySelector(".ganador").classList.add("h")
        setInterval(() => {
            window.location.reload();
        }, 2000);
        
    }

    switch (valBeforeClick) {
        case "1":
            cua.cua1 = valAfterClick;
            break;
        case "2":
            cua.cua2 = valAfterClick;
            break;
        case "3":
            cua.cua3 = valAfterClick;
            break;
        case "4":
            cua.cua4 = valAfterClick;
            break;
        case "5":
            cua.cua5 = valAfterClick;
            break;
        case "6":
            cua.cua6 = valAfterClick;
            break;
        case "7":
            cua.cua7 = valAfterClick;
            break;
        case "8":
            cua.cua8 = valAfterClick;
            break;
        case "9":
            cua.cua9 = valAfterClick;
            break;
    }
  //  function ganador() {
        if ( cua.cua1 ==valAfterClick ) {
            if (cua.cua2==valAfterClick && cua.cua3==valAfterClick) { 
                winer();
            }else if (cua.cua4==valAfterClick && cua.cua7==valAfterClick) {
                  winer();
            }else if (cua.cua5==valAfterClick && cua.cua9==valAfterClick){
                winer();
        }
        }
        if (cua.cua5==valAfterClick){
            if (cua.cua2==valAfterClick && cua.cua8==valAfterClick){
                winer();
            }else if (cua.cua4==valAfterClick && cua.cua6==valAfterClick){
                winer();
            }else if (cua.cua3==valAfterClick && cua.cua7==valAfterClick){
                winer();
        }
        }
        if (cua.cua9==valAfterClick){
            if (cua.cua7==valAfterClick && cua.cua8==valAfterClick){
                winer();
            }else if (cua.cua6==valAfterClick && cua.cua3==valAfterClick){
                winer();
            }
        }
}