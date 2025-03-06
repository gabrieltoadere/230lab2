function citysearch() {
    const cityName=document.getElementById('city-search').value.trim();
    const weatherInfo=document.getElementById('weather-info');


   fetch('sample.json')
   .then(response => { 
        return response.json();
   })
   .then(weatherdata => {
        const citydata= weatherdata.find(city => city.cityName.toLowerCase() === cityName.toLowerCase());

        if(citydata) {
                weatherInfo.innerHTML=`
                <div id="weather-info">
                <p class="weather-forecast">Temperature : ${citydata.temperatureCelsius}°C</p>
                <p class="weather-forecast">UV : ${citydata.uvIndex}</p>
                <p class="weather-forecast">Humidity : ${citydata.humidity * 100}%</p>
                <p class="weather-forecast">Wind Speed : ${citydata.windSpeed}</p> 
                </div>
                `;
            } else {
                weatherInfo.innerHTML=`<p>City not found.</p>`;
            }
    });
}





// function tempFinder(cityname){
//     fetch("sample.json") 
//         .then(response =>{
//             return response.json();
//         }) 
//         .then(data => {
//             const citydata = data.find(city => city.cityName.toLowerCase() === cityname.toLowerCase());

//             document.getElementById("result").innerHTML = 
//                 `<p><strong>Temperature:</strong> ${citydata.temperatureCelsius}°C</p>
//                 <button onclick()="converttofahrenheit('${citydata.temperatureCelsius}')">to fahrenheit</button>
//                 `;
//             })
//         .catch(error => console.error("Error loading JSON:", error));
// }

// function converttofahreinheit(temp) {
//     const fahrenheit = (temp * 9/5) + 32;
//     document.getElementById("result").innerHTML = 
//         `<p><strong>Temperature:</strong> ${(temp * 9/5)+32}°F</p>
//         <button onclick()="converttocelsius(${temp})">to celsius</button>
//         `;
// }

// function converttocelsius(temp) {
//     const fahrenheit = (temp * 9/5) + 32;
//     document.getElementById("result").innerHTML = 
//         `<p><strong>Temperature:</strong> ${temp}°F</p>
//         <button onclick()="converttofahrenheit(${temp})">to fahrenheit</button>
//         `;
// }


// function tempFinder(cityname) {
//     fetch("sample.json")
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             const citydata = data.find(city => city.cityName.toLowerCase() === cityname.toLowerCase());

//             document.getElementById("result").innerHTML = 
//                 `<p><strong>Temperature:</strong> ${citydata.temperatureCelsius}°C</p>
//                 <button onclick="converttofahrenheit(${citydata.temperatureCelsius})">to fahrenheit</button>
//                 `;
//         })
//         .catch(error => console.error("Error loading JSON:", error));
// }

// function converttofahrenheit(temp) {
//     const fahrenheit = (temp * 9/5) + 32;
//     document.getElementById("result").innerHTML = 
//         `<p><strong>Temperature:</strong> ${fahrenheit}°F</p>
//         <button onclick="converttocelsius(${fahrenheit})">to celsius</button>
//         `;
// }

// function converttocelsius(temp) {
//     const celsius = (temp - 32) * 5/9;
//     document.getElementById("result").innerHTML = 
//         `<p><strong>Temperature:</strong> ${celsius}°C</p>
//         <button onclick="converttofahrenheit(${celsius})">to fahrenheit</button>
//         `;
// }




