let signinBtn = document.querySelector("#signinForm");
signinBtn.addEventListener("submit", function(event) {
    let uname = document.querySelector("#username").value;
    let passs = document.querySelector("#password").value;
    if(passs === "" || uname === "")
    {
        alert("USERNAME and PASSWORD are required!");
    }
    else
    {
        alert("SIGNIN Successful")
    }
}); 