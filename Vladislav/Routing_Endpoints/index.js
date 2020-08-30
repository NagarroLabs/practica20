function handleSubmit(){
    const name = document.getElementById('firstName').value;
    const surname = document.getElementById('lastName').value;
    const phonenumber = document.getElementById('phoneNumber').value;
    const facebooklink = document.getElementById('facebookLink').value;
    const dateofbirth = document.getElementById('dateOfbirth').value;

    localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname);
    localStorage.setItem("NUMBER", phonenumber);
    localStorage.setItem("FACEBOOK", facebooklink);
    localStorage.setItem("BIRTHDATE", dateofbirth);
    return;
}