document.addEventListener("DOMContentLoaded", function () {
    const selectedCity = localStorage.getItem("selectedCity");
    if (!selectedCity) {
      alert("No city selected. Please go back to the main page and submit a city.");
      return;
    }
  
    let isCelsius = true; 
    let temperatureCelsius = null; 
  
    const temperatureInfo = document.getElementById("forecast");
    const toggleUnitButton = document.getElementById("toggleUnitButton");
    let cityData=undefined;
    fetch('sample.json')
      .then(response => response.json())
      .then(data => {
        cityData = data.find(city => city.cityName.toLowerCase() === selectedCity.toLowerCase());
        if (cityData) {
          temperatureCelsius = cityData.temperatureCelsius;
          displayTemperature(temperatureCelsius, isCelsius); 
        } else {
          temperatureInfo.innerHTML = `<p>City not found.</p>`;
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  
    toggleUnitButton.addEventListener("click", function () {
      isCelsius = !isCelsius;
      displayTemperature(temperatureCelsius, isCelsius); 
      toggleUnitButton.textContent = isCelsius ? "Switch to Fahrenheit" : "Switch to Celsius";
    });
  
    function displayTemperature(tempCelsius, isCelsius) {
      const tempValue = isCelsius ? tempCelsius : (tempCelsius * 9 / 5) + 32; 
      const tempUnit = isCelsius ? "°C" : "°F";
  
      const color = tempCelsius > 20 ? "yellow" : "blue";
  
      temperatureInfo.innerHTML = `
        <p style="color: ${color};">
          ${cityData.cityName}'s Temperature: ${tempValue.toFixed(2)}${tempUnit}
        </p>
      `;
    }
  });