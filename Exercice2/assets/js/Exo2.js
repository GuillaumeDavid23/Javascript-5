const verification = () => {
    let testPassword = document.form.password.value
    let testConfirmPassword = document.form.confirmPassword.value

    if(testPassword == testConfirmPassword){
        document.getElementById("password").classList.remove("bad");
        document.getElementById("confirmPassword").classList.remove("bad");

        document.getElementById("password").classList.add("good");
        document.getElementById("confirmPassword").classList.add("good");
    }
    else{
        document.getElementById("password").classList.remove("good");
        document.getElementById("confirmPassword").classList.remove("good");

        document.getElementById("password").classList.add("bad");
        document.getElementById("confirmPassword").classList.add("bad");
    }
}