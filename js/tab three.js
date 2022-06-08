///variables
let userInEl = document.getElementById("emailin");
let passInEl = document.getElementById("passwordin");
let loginOutputEl = document.getElementById("outputLogin");
let returnLogEl = document.getElementById("returnLog");
let userArray = ["admin"]
let passArray = ["password"]


//THIS DOESNT TAKE IN VALUES GOOD???????
function signUp() {
  let userInElA = document.getElementById("emailin").value;
  let passInElA = document.getElementById("passwordin").value;
  userArray.push(userInElA);
  passArray.push(passInElA);
  console.log(userArray);
  console.log(passArray);
  returnLogEl.innerHTML = `Account Registered`
}



function login() {
  // Get User Login Input
  let email = userInEl.value;
  let password = passInEl.value;
  // Test User Login Input
  if (userArray.includes(email) == true && passArray.includes(password) == true){
    returnLogEl.innerHTML = 'Login Successful';
  } else {
    returnLogEl.innerHTML = 'Login Unsuccessful';
  }
}
