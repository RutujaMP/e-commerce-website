usercredential = [];


function usercred(usernm, userpass) {
    this.username = usernm;
    this.password = userpass;
}

function signup() {
    var username = document.querySelector("#usertxt").value;
    var password = document.querySelector("#passtxt").value;

    userdetails = new usercred(username, password)
    usercredential.push(userdetails);
    var i = 1;
    for (ud of usercredential) {
        localStorage.setItem(i, JSON.stringify(ud));
        i++;
    }
    console.log(usercredential);
}

function login() {

    var username = document.querySelector("#usertxt").value;
    var password = document.querySelector("#passtxt").value;
    var keys = Object.keys(localStorage);
        
    var i = 1;
    for (userobj of keys) {

        object = JSON.parse(localStorage.getItem(userobj));
        
        if (username == object.username && password == object.password) {
            document.cookie = object.username; 
            document.querySelector("#loginvalidation").innerHTML = "Login successfull";
            document.querySelector("#loggedinuser").innerHTML = document.cookie;  
            location.reload(); 
        }
        i++;
    }  
    
  
    
}








