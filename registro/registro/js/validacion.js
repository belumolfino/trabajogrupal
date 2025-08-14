function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.addEventListener("DOMContentLoaded", function(){


    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("email");
    const password1 = document.getElementById("password1");
    const password2 = document.getElementById("password2");
    const terminos = document.getElementById("terminos");
    const regBtn = document.getElementById("regBtn");

    

    regBtn.addEventListener("click", function() {  
        if (!regBtn) return;

        if ( nombre.value.trim() === "" || apellido.value.trim() === "" || email.value.trim() === "" || password1.value.trim() === "" || password2.value.trim() === ""){
            showAlertError();
            return;
        }

        if(password1.value.length < 6){
            showAlertError();
            return;
        }

        if(password1.value !== password2.value){   
            showAlertError();
        }

        if(!terminos.checked){
            showAlertError();
        }

        showAlertSuccess();
    });

});