

const verification = () => {
    
    let testPassword = document.form.password.value
    let testConfirmPassword = document.form.confirmPassword.value

    if(testPassword == testConfirmPassword){
        document.form.password.style.borderColor = "green";
        document.form.confirmPassword.style.borderColor = "green";
    }
    else{
        document.form.password.style.borderColor = "red";
        document.form.confirmPassword.style.borderColor = "red";
    }
}