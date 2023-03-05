const weather = document.querySelector("div.weather");
const API_key = "261a49ec4075f351385d2d567384463a";
let resData;
const weatherInfo = {
    city    : "",
    wthMain : "",
    temp    : 0,
    feelsLike : "",
    windSpeed : 0,   
}
//https://api.openweathermap.org/data/2.5/weather?lat=37.6438784&lon=126.9170176&appid=261a49ec4075f351385d2d567384463a
function addTag(addTag, classNm, parentTag){
    const Tag = document.createElement(addTag);
    Tag.classList.add(classNm);
    parentTag.appendChild(Tag);    
}

function setWeaterInfo(){
    addTag("div", "weatherInfo1", weather);
    document.querySelector("div.weatherInfo1").innerText = weatherInfo.city;    
    addTag("div", "weatherInfo2", weather);
    document.querySelector("div.weatherInfo2").innerText = weatherInfo.wthMain;    
    addTag("div", "weatherInfo3", weather);    
    const weatherInfo3 = document.querySelector("div.weatherInfo3");
    addTag("div", "weatherInfo31", weatherInfo3);
    //addTag("div", "weatherInfo31", weatherInfo3);
    document.querySelector("div.weatherInfo31").innerText = weatherInfo.temp+"°";
    addTag("div", "weatherInfo32", weatherInfo3);
    document.querySelector("div.weatherInfo32").innerText = "Feels like : "+weatherInfo.feelsLike+"°";
    addTag("div", "weatherInfo33", weatherInfo3);
    document.querySelector("div.weatherInfo33").innerText = "Wind : "+weatherInfo.windSpeed+"km/h";       
}


function succesCallback(position){
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`${latitude}:${longitude}`);
    const url = "https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid="+API_key+"&units=metric";    
    fetch(url).then((response)=> response.json()).then((data)=> {
        weatherInfo.city = data.name;        
        weatherInfo.temp = Math.floor(parseInt(data.main.temp)); 
        weatherInfo.feelsLike = data.main.feels_like;        
        weatherInfo.wthMain = data.weather[0].main        
        weatherInfo.windSpeed = Math.floor(parseInt(data.wind.speed)); 
        //weather.innerText = weatherInfo.city +"\n"+weatherInfo.wthMain+"\n"+weatherInfo.temp+"°";
        setWeaterInfo();
        
    });
   
}

function failCallback(position){
    alert("Falil location information!");
}

navigator.geolocation.getCurrentPosition(succesCallback, failCallback);


