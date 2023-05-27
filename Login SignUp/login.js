let userArray = [];

(() => {

 let userInfo =  localStorage.getItem('userData')

  if(userInfo){
    userArray = JSON.parse(userInfo)
  }

  console.log(userInfo)
  console.log(userArray)


})()

let login = (e) => {
    e.preventDefault();

  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
 
  let isEmailValid = false;

  for(let i=0; i < userArray.length; i++ ){
    
    if(email === userArray[i].email){

        isEmailValid = true;

        if(password === userArray[i].password){
            window.location.href = 'index.html'
        }else{
            document.getElementById('passError').innerText = 'Incorrect Password'
            
            setTimeout(()=>{
                document.getElementById('passError').innerText = ''
                
            },3000)
        }

    }


  }


  if(!isEmailValid){
    document.getElementById('emailError').innerText = 'Incorrect Email'
            
    setTimeout(()=>{
        document.getElementById('emailError').innerText = ''
        
    },3000)
  }

  

};




// function showPassword(){
//   let password = document.getElementById('password');


//   password.toggleAttribute("type");


// }


