const loginDiv = document.querySelector("div.login");

const loginSpan1 = document.createElement("span");
loginDiv.appendChild(loginSpan1);
loginSpan1.innerText="로그인 : ";
const loginSpan2 = document.createElement("span");
loginDiv.appendChild(loginSpan2);
const loginSpan3 = document.createElement("span");
loginDiv.appendChild(loginSpan3);

const loginInput = document.createElement("input");
loginInput.type = "text";

const loginBtn = document.createElement("button");
loginBtn.className = "sub"
loginBtn.type = "button";
loginBtn.innerText = "입력";


loginSpan2.appendChild(loginInput);
loginSpan2.appendChild(loginBtn);

let lnModifyInput = document.createElement("input");


function chkGreetings(){
    const day = new Date();
    const hours = day.getHours();
    const greetings = ["Good morning ", "Good afternoon ", "Good evenning "]
    let greetVal = "";
    if(hours >= 5 && hours <= 9){
        greetVal = greetings[0];
    } else if(hours >= 10 && hours <=17){
        greetVal = greetings[1];
    } else{
        greetVal = greetings[2];
    }
    return greetVal;
}


function handlerClick(event) {        
    
    const val = loginInput.value;

    if(localStorage.getItem("login") != "" && localStorage.getItem("login") != null){
        return;
    }
    if(val === ""){
        alert("Check Login Input!");
    } else{
        localStorage.setItem("login",JSON.stringify(val));
        loginInput.style.display  = "none";
        loginBtn.style.display = "none";        
        loginSpan1.innerText = chkGreetings();
        loginSpan2.innerText = val;
    }
}

function keypressHandler(event){
    if(event.keyCode == '13'){        
        let modifyVal = lnModifyInput.value;
        loginSpan2.innerText = modifyVal;
        localStorage.setItem("login",JSON.stringify(modifyVal));
        loginSpan2.style.display = "inline";
        loginSpan3.style.display = "none";
        event.preventDefault();
        loginSpan3.removeChild(lnModifyInput);        
    }
}
function clickBodyEvent(event){
    const target = event.target;        
    if(target === lnModifyInput){                
        return;
    } else{        
        if(loginSpan3.style.display !== "none"){
            let modifyVal = lnModifyInput.value;
            loginSpan2.innerText = modifyVal;
            localStorage.setItem("login",JSON.stringify(modifyVal));
            loginSpan2.style.display = "inline";
            loginSpan3.style.display = "none";
            event.preventDefault();
            loginSpan3.removeChild(lnModifyInput); 
        }
    }
    
}
function dblclickHandler(){               
    loginSpan3.appendChild(lnModifyInput);    
    lnModifyInput.value = loginSpan2.innerText;
    loginSpan2.style.display = "none";
    loginSpan3.style.display = "inline";
    document.addEventListener("keypress",keypressHandler);
    document.body.addEventListener('click', clickBodyEvent);
}


if(localStorage.getItem("login") === "" || localStorage.getItem("login") === null){
    
} else{
    const localVal = JSON.parse(localStorage.getItem("login"));    
    loginInput.style.display  = "none";
    loginBtn.style.display = "none";    
    loginSpan1.innerText = chkGreetings();
    loginSpan2.innerText = localVal;
}

loginBtn.addEventListener("click", handlerClick);
loginSpan2.addEventListener("dblclick", dblclickHandler);




