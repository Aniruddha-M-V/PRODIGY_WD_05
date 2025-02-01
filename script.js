const city=document.querySelector("city");
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector('.weather-icon');
const errorMsg=document.querySelector('.error');
async function checkWeather(city){
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=3db4ec09c0f6f23f3157b1a92015f938&q=${city}`);
    if(response.status == 404){
        errorMsg.style.display = 'block';
        document.querySelector('.weather').style.display="none"; 
    }else
    {
    var data=await response.json();
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=data.main.temp+`°C`;
    document.querySelector('.humidity').innerHTML=data.main.humidity+`%`;
    document.querySelector('.wind').innerHTML=data.wind.speed+`km/h`; 
    document.querySelector('.weather').style.display="block";   
    errorMsg.style.display = 'none';
    if(data.weather[0].main=='Clouds'){
        weatherIcon.src='images/clouds.png';
    }else if(data.weather[0].main=='Clear'){
        weatherIcon.src='images/clear.png';
    }else if(data.weather[0].main=='Rain'){
        weatherIcon.src='images/rain.png';
    }else if(data.weather[0].main=='Drizzle'){
        weatherIcon.src='images/drizzle.png';
    }else if(data.weather[0].main=='Mist'){
        weatherIcon.src='images/mist.png';
    }
    }
}
searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});

