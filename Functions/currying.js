let fName = 'Hina'



let lastName = 'Khan'


function displayMessage(firstName){
    return function(lastName){
        console.log(`First Name: ${firstName} Last Name: ${lastName}`);
    }
}


let disp1 = displayMessage(fName)



lastName = 'Faizan'



let disp2 = disp1(lastName);


disp2







