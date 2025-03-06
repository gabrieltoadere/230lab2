function citysearch() {
    const cityName=document.getElementById('city-search').value.trim();
    const weatherInfo=document.getElementById('forecast');


   fetch('sample.json')
   .then(response => { 
        return response.json();
   })
   .then(weatherdata => {
        const citydata= weatherdata.find(city => city.cityName.toLowerCase() === cityName.toLowerCase());

        if(citydata) {
                weatherInfo.innerHTML=`
                <div id="weather-info">
                <p id="temp-data" class="weather-forecast">Temperature : ${citydata.temperatureCelsius}°C</p>
                <p class="weather-forecast">UV : ${citydata.uvIndex}</p>
                <p class="weather-forecast">Humidity : ${citydata.humidity * 100}%</p>
                <p class="weather-forecast">Wind Speed : ${citydata.windSpeed}</p> 
                </div>
                <div id="conversion-container" class="conversion-button-container">
                    <button class="conversion-button" onclick=tofahrenheit(${citydata.temperatureCelsius})>fahrenheit</button>
                </div>
                `;
            } else {
                weatherInfo.innerHTML=`<p>City not found.</p>`;
            }
    });
}


function tofahrenheit(temp) {
    const fahrenheit=(temp * 9/5) + 32;
    document.getElementById("temp-data").innerHTML=
    `<p class="weather-forecast temp-data">Temperature :${Math.round(fahrenheit)}°F</p>`;

    document.getElementById("conversion-container").innerHTML=
    `<button class="conversion-button" onclick="tocelsius(${fahrenheit})">Celsius</button>`;
}

function tocelsius(temp) {
    const celsius=(temp - 32) * 5/9;
    document.getElementById("temp-data").innerHTML=`<p class="weather-forecast temp-data">Temperature :${Math.round(celsius)}°C</p>`;

    document.getElementById("conversion-container").innerHTML=
    `<button class="conversion-button" onclick="tofahrenheit(${celsius})">Fahrenheit</button>`;






