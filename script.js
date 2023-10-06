//ACT 3


let password = prompt ("enter your password");
let ken =(password.length);
if (ken == 8){
    console.log ("Welcome");
}else if (ken <= 8 ){
    console.log ("Password is too short");
}else if (ken >= 8){
    console.log("Password should be 8 characters");
}else {
    console.log("Please provide a password");
}