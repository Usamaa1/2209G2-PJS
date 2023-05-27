let userArray = [];

(() => {

 let userInfo =  localStorage.getItem('userData')

  if(userInfo){
    userArray = JSON.parse(userInfo)
  }

  console.log(userInfo)
  console.log(userArray)


})()

let addUser = (e) => {
    e.preventDefault();

  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let cPassword = document.getElementById('cPassword').value;
  let city = document.getElementById('city').value;
  let gender = document.getElementById('gender').value;



  for(let i=0; i < userArray.length; i++ ){
    
    if(email === userArray[i].email){
      document.getElementById('emailError').textContent = 'Email already exist'
      setTimeout(()=>{
        document.getElementById('emailError').innerHTML = ``
      },3000)
      return;
  
    }
  }

  if(password !== cPassword){

    document.getElementById('passError').innerHTML = `Kindly enter same password`;

    setTimeout(()=>{
      document.getElementById('passError').innerHTML = ``
    },3000)
      return;
  }

  let userObj = {
    firstName,
    lastName,
    email,
    password,
    cPassword,
    city,
    gender
  }

  userArray.push(userObj)
  
  let stringified = JSON.stringify(userArray);
  console.log(stringified);
  localStorage.setItem('userData', stringified)
  console.log(userObj)

  e.target.reset();
};







