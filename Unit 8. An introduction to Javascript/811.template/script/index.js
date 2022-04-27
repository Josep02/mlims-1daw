function main() {
  let lat;  
  let lon;
  let API_key;

  lat = 38.8430500;
  lon = -0.1170700;
  API_key = '414ec66b7cd0c6fa90634c52a42c95e4';

  
  // Current Weather Data
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;

  fetch(currentWeatherUrl)
  .then(response => response.text())
  .then(function (result) {
     console.log(result);

     result = JSON.parse(result);

    
    let divData = document.querySelector("#data")

    let p = document.createElement('p');
    p.innerHTML = "Degrees: " +result.main.temp + "ºC" + " <br> " +"Weather: " +result.weather[0].description + " <br> " + "Wind speed: " +result.wind.speed + "m/s";
    divData.append(p);

  }); 
}

document.addEventListener('DOMContentLoaded', main);