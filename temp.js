document.addEventListener("DOMContentLoaded", function () {
    const selectedCity = localStorage.getItem("selectedCity");
    if (!selectedCity) {
      alert("No city selected. Please go back to the main page and submit a city.");
      return;
    }
  
    let isCelsius = true; // Default to Celsius
    let temperatureCelsius = null; // Store the temperature in Celsius
  
    const temperatureInfo = document.getElementById("forecast");
    const toggleUnitButton = document.getElementById("toggleUnitButton");
  
    // Fetch data and display temperature
    fetch('sample.json')
      .then(response => response.json())
      .then(data => {
        const cityData = data.find(city => city.cityName.toLowerCase() === selectedCity.toLowerCase());
        if (cityData) {
          temperatureCelsius = cityData.temperatureCelsius; // Store the temperature in Celsius
          displayTemperature(temperatureCelsius, isCelsius); // Display temperature
        } else {
          temperatureInfo.innerHTML = `<p>City not found.</p>`;
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  
    // Toggle between Celsius and Fahrenheit
    toggleUnitButton.addEventListener("click", function () {
      isCelsius = !isCelsius; // Toggle the unit
      displayTemperature(temperatureCelsius, isCelsius); // Update the displayed temperature
      toggleUnitButton.textContent = isCelsius ? "Switch to Fahrenheit" : "Switch to Celsius";
    });
  
    // Function to display temperature
    function displayTemperature(tempCelsius, isCelsius) {
      const tempValue = isCelsius ? tempCelsius : (tempCelsius * 9 / 5) + 32; // Convert to Fahrenheit if needed
      const tempUnit = isCelsius ? "°C" : "°F";
  
      // Set the color based on the temperature in Celsius
      const color = tempCelsius > 20 ? "yellow" : "blue";
  
      temperatureInfo.innerHTML = `
        <p style="color: ${color};">
          ${selectedCity}'s Temperature: ${tempValue.toFixed(2)}${tempUnit}
        </p>
      `;
    }
  });