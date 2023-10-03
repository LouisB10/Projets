let gamechoice = document.querySelector(".choice");
let modalchoice = document.querySelector(".modal-select-game");


let modalopen = false;

gamechoice.addEventListener("click", function(){
    if (modalopen) {
        modalchoice.style.display = "none";
        modalopen = false;
     } else {
        modalchoice.style.display = "flex";
        modalopen = true;
     }
})