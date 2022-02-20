var username = document.forms["vform"]["username"];
var password = document.forms["vform"]["password"];
var passwordConfimation = document.forms["vform"]["passwordConfimation"];

var name_error = document.getElementById("name_error");
var passwordError = document.getElementById("passwordError");
var passwordCError = document.getElementById("passwordCError");


username.addEventListener("blur", nameVerify, true);
password.addEventListener("blur", passwordVerify, true);
passwordConfimation.addEventListener("blur", passwordCVerify, true);


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}

function Validate() {
  if (username.value == "") {
    username.style.border = "1px solid red";
    name_error.textContent = "Username is required";
    username.focus();
    return false;
  }
  if (password.value == "") {
    password.style.border = "1px solid red";
    passwordError.textContent = "Password is required";
    password.focus();
    return false;
  }
  if (passwordConfimation.value == "") {
    passwordConfimation.style.border = "1px solid red";
    passwordCError.textContent = "Password Confirmation is required";
    passwordConfimation.focus();
    return false;
  }
  if (password.value !=passwordConfimation.value) {
    password.style.border = "1px solid red";
    passwordConfimation.style.border = "1px solid red";
    passwordCError.innerHTML = "Passwords doesnt match"
    return false;
  }
  else {
    alert("You registered succesfully!")
  }
}

function nameVerify() {
  if (username.value != "") {
    name_error.innerHTML = "";
    return true;
  }
}
function passwordVerify() {
  if (password.value != "") {
    passwordError.innerHTML = "";
    return true;
  }
}
function passwordCVerify() {
  if (password.value != "") {
    passwordError.innerHTML = "";
    return true;
  }
}

let button = document.querySelector(".btn");
button.disabled = false;
username.addEventListener("change", stateHandle);
password.addEventListener("change", stateHandle);
passwordConfimation.addEventListener("change", stateHandle);

function stateHandle() {
    if ((document.querySelector(".uname").value === "")
     (document.querySelector(".passwd").value === "")
    (document.querySelector(".cpasswd").value === "")) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }

}
function hidePass() {
  var x = document.getElementById("MyInput");
  var y = document.getElementById("hide1");
  var z = document.getElementById("hide2");
  if(x.type === 'password'){
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
  }else{
    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";
  }
}

function hidePass2() {
  var x = document.getElementById("MyInput2");
  var y = document.getElementById("hide11");
  var z = document.getElementById("hide21");
  if(x.type === 'password'){
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
  }else{
    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";
  }
}
