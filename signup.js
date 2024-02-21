let signupBtn = document.querySelector("#signupForm");
signupBtn.addEventListener("submit", function(event) {
    let uname = document.querySelector("#username").value;
    let pwd = document.querySelector("#password").value;
    let cnfrmPwd = document.querySelector("#cnfrmPwd").value;
    let email = document.querySelector("#email").value;
    let age = document.querySelector("#age").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let pNum = document.querySelector("#pNum").value;
    let city = document.querySelector("#city").value;
    let passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>0-9])/;

    if (uname === "" || pwd === "" || cnfrmPwd === "" || email === "" || age === "" || !gender || pNum === "" || city === "")
    {
        alert("* field can not be left empty");
    }

    if (pwd !== cnfrmPwd)
    {
        alert("Password and Confirm Password must be same");
    }

    if (age<=17 || age >= 31)
    {
        alert("Your age must be between 18 to 30");
    }

    if (!passwordRegex.test(pwd)) {
        alert("Password must contain at least one special character and one numeric character");
    }

});