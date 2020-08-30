window.addEventListener('load', ()=>{

    /*const params = (new URL(document.location)).searchParams;
    const name = params.get('firstName');
    const surname = params.get('lastName');
    const pnumber = params.get('phoneNumber');
    const flink = params.get('facebookLink');
    const dbirth = params.get('dateOfbirth');*/

    const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME');
    const pnumber = localStorage.getItem('NUMBER');
    const flink = localStorage.getItem('FACEBOOK');
    const dbirth = localStorage.getItem('BIRTHDATE');


    document.getElementById('result-fname').innerHTML = name;
    document.getElementById('result-lname').innerHTML = surname;
    document.getElementById('result-pnum').innerHTML = pnumber;
    document.getElementById('result-flink').innerHTML = flink;
    document.getElementById('result-dbirth').innerHTML = dbirth;
})