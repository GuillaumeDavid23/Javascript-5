

const verification = () => {
    
    let testPassword = document.form.password.value
    let testConfirmPassword = document.form.confirmPassword.value

    if(testPassword == testConfirmPassword){
        alert("Mot de passe identiques");
    }
    else{
        alert("Mot de passe différents")
    }
}