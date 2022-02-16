window.onload = main;

function main() {
    document.getElementById("menu_tancat").addEventListener("click", obreMenu);
    document.getElementById("tancar_menu").addEventListener("click", tancaMenu);
}

//Funció per obrir el menú en telèfons
function obreMenu() {
    var menu_tanc = document.getElementById("menu_tancat");
    var menu_ob = document.getElementById("menu_obert");

    if(menu_ob.style.display == "" || menu_ob.style.display == "none") {
        menu_tanc.style.display = "none";
        menu_ob.style.display = "flex";
        menu_ob.style.flexDirection = "column";
        menu_ob.style.background = "black";
        menu_ob.style.zIndex = 20;
    }
    console.log("a");
    console.log(menu_ob.style.display)
}

//Funció per tancar el menú en telèfons
function tancaMenu() {
    var menu_tanc = document.getElementById("menu_tancat");
    var menu_ob = document.getElementById("menu_obert");

    if(menu_ob.style.display != "none") {
        menu_ob.style.display = "none";

        menu_tanc.style.display = "flex";
        menu_tanc.style.justifyContent = "center";
    }
}