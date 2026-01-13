//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
let apikey = "e8b75fccb011dcc10f2dc50e509420db"

function search() {
    let city = document.getElementById("cityInput").value;
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apikey;
    let httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", url);
    httpRequest.send();
    httpRequest.responseType = "json";

    httpRequest.onload = function() {
        let response = httpRequest.response;
        console.log(response);

        document.getElementById("city-name").innerHTML = response.name;
        document.getElementById("temp").innerHTML = response.main.temp;

        if(response.weather[0].icon == "04n" || response.weather[0].icon == "04d") {
            document.getElementById("weather-icon").src = "Images/broken-clouds.png";
        }else if(response.weather[0].icon == "01n" || response.weather[0].icon == "01d") {
            document.getElementById("weather-icon").src = "Images/sun.png";
        }else if(response.weather[0].icon == "03n" || response.weather[0].icon == "03d") {
            document.getElementById("weather-icon").src = "Images/scattered-clouds.png";
        }else

        document.getElementById("wind").innerHTML = response.wind.speed + " Km/h";
        document.getElementById("humidity").innerHTML = response.main.humidity + " %";
    }
}

