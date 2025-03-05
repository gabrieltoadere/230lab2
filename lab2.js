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
                weatherInfo.innerHTML=`<div id="weather-info">
                <p>Temperature : ${citydata.cityName}°C</p>
                <p>UV : ${citydata.uvIndex}</p>
                <p>Humidity : ${citydata.humidity * 100}%</p>
                <p>Wind Speed : ${citydata.windSpeed}</p> 
                </div>
                `;
            } else {
                weatherInfo.innerHTML=`<p>City not found.</p>`;
            }
    });
}
