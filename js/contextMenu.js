function calendario(){
    window.location.href = "calendario.html"
}

// Inicializar la variable para llamar la funcion del menu 
var contextMenu = CtxMenu();

// agregar un objeto al menu
contextMenu.addItem("Ir al calendario", calendario, Icon = "calendario.svg");

// agregar un separador
contextMenu.addSeparator();

contextMenu.addItem("Ir a calculadora", Icon= "calculadora.svg");

contextMenu.addSeparator();

// agregar la funcion para reiniciar la pagina 
contextMenu.addItem("Recargar Página",
    function(){
        location.reload();
    },
    Icon = "actualizar-flecha.svg",
    index = undefined,
    bInvertIconDarkMode = true
);