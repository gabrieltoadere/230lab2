document.addEventListener("DOMContentLoaded", function () {
    const selectedCity = localStorage.getItem("selectedCity");
    if (!selectedCity) {
      alert("No city selected. Please go back to the main page and submit a city.");
      return;
    }
  
    fetch('sample.json')
      .then(response => response.json())
      .then(data => {
        const cityData = data.find(city => city.cityName.toLowerCase() === selectedCity.toLowerCase());
        if (cityData) {
            if(cityData.uvIndex > 2) {
                document.getElementById("forecast").innerHTML = `
            <p style=" color: red;">${cityData.cityName}'s UV: ${cityData.uvIndex}</p>
          `;
            } else {
                document.getElementById("forecast").innerHTML = `
            <p style=" color: green;">${cityData.cityName}'s UV: ${cityData.uvIndex}</p>
          `;
            }
          
        } else {
          document.getElementById("forecast").innerHTML = `<p>City not found.</p>`;
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  });