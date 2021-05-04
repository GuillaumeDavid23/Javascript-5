//Fonction de validation de l'email
const validateEmail = () => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.form.mail.value)){
        return (true);
    }
    return (false);
}

//Fonction de validation du NOM
const validateUser = () => {
    if (/^[A-Z]*[a-z]*$/.test(document.form.user.value)){
        return (true);
    }
    return(false);
}

//Fonction de validation de l'age (>9ans)
const validateAge = () => {
    if (/^[1-9][0-9]$/.test(document.form.age.value)){
        return (true);
    }
    return(false);
}


//Fonction principale
const validate = () => {
    //Validation du NOM
    if(validateUser() == true){ //Si tout va bien
        document.getElementById("errorName").style.display = "none";
    }
    else if (document.form.user.value === ""){ //Si c'est vide
        document.getElementById("errorName").style.display = "block";
    }
    else{ //Si c'est faux
        document.getElementById("errorName").style.display = "block";

    }

    //Validation de l'email
    if(validateEmail() == true){ //Si tout va bien
        document.getElementById("errorMail").style.display = "none";
    }
    else{ //Si c'est faux
        document.getElementById("errorMail").style.display = "block";
    }

    //Validation de l'age
    if(validateAge() == true){ //Si tout va bien
        document.getElementById("errorAge").style.display = "none";
    }
    else{ //Si c'est faux
        document.getElementById("errorAge").style.display = "block";
    }
}