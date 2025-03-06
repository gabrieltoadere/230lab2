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

          let string=cityData.humidity > 1.0 ? `
            <p class="foreecast-text" style=" color:purple;font-family: "Montserrat Subrayada"">${cityData.cityName}'s Humidity: ${cityData.humidity}</p>
          ` :  `
          <p style="color:orange;font-family: "Montserrat Subrayada"">${cityData.cityName}'s Humidity: ${cityData.humidity}</p>
        `;;

          document.getElementById("forecast").innerHTML = string;
        } else {
          document.getElementById("forecast").innerHTML = `<p class="foreecast-text">City not found.</p>`;
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  });