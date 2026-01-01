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
    }
}

