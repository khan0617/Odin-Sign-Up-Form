let passwordInput = document.getElementById('password');
let passwordConfirm = document.getElementById('confirmPass');
let submitBtn = document.getElementById('submitBtn');
let canAddClass = true;

passwordInput.addEventListener('input', checkPasswords);
passwordConfirm.addEventListener('input', checkPasswords);
submitBtn.addEventListener('click', (e) => {
    if(!checkPasswords()){
        e.preventDefault();
        alert("Passwords do not match");
        document.querySelector('.error-msg').style.visibility = "visible";
    }
});

function checkPasswords() {
    console.log("in check paswords");
    if(passwordInput.value != passwordConfirm.value){
        if(canAddClass){
            passwordInput.classList.add('error');
            passwordConfirm.classList.add('error');
            canAddClass = false;
            document.querySelector('.error-msg').style.visibility = "visible";
        }
        return false;

    }
    else{
        if(!canAddClass){
            passwordInput.classList.remove('error');
            passwordConfirm.classList.remove('error');
            canAddClass = true;
            document.querySelector('.error-msg').style.visibility = "hidden";
        }
        return true;
    }
}
