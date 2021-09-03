function validar() {
    var name = document.getElementById("name").value;
    var edad = document.getElementById("edad").value;
    var sex = document.getElementById("sex").value;
    var ritmo;
    var texto;
    if (edad === "") {
        texto = "Introduzca la edad";
    }
    else if (name === "") {
        texto = "Introduzca el nombre";
    }
    else if (sex === "Femenino") {
        ritmo = (210 - parseInt(edad)) / 10;
        texto = "La cantidad de pulsaciones es de" + ritmo;
    }
    else {
        ritmo = (220 - parseInt(edad)) / 10;
        texto = "La cantidad de pulsaciones recomendadas por 10 segundos es de " + ritmo+" pulsaciones";
    }
    window.alert(texto);


}
