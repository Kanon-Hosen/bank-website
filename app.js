const loginBtn = document.getElementById('login_btn').addEventListener('click', function () {
    console.log("click");
    const email = document.getElementById('exampleInputEmail1');
    const emailValue = email.value;
    const password = document.getElementById('exampleInputPassword1');
    const passwordValue = password.value;

    if (emailValue === 'kanon5866@gmail.com' && passwordValue === 'kanon') {
        window.location.href = 'home.html';
    }
    else if (emailValue === '' && passwordValue === '') {
        alert('Please porvide your information');
    }
    else {
        alert("Invalid User");
    }
});