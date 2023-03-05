const timeArea = document.querySelector("div.time");

function printTime(){
    const date = new Date();
    const hr  = JSON.stringify(date.getHours()).padStart(2,"0");    
    const min = JSON.stringify(date.getMinutes()).padStart(2,"0");
    const sec = JSON.stringify(date.getSeconds()).padStart(2,"0");    
    timeArea.innerText = hr+":"+min+":"+sec;
}

printTime();

setInterval(() => {
    printTime();
}, 1000)