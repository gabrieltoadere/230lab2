document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("search-button");
    const cityInput = document.getElementById("search-bar");
  
    submitButton.addEventListener("click", function () {
      const cityName = cityInput.value.trim();
      if (cityName) {
        // Store the selected city in localStorage
        localStorage.setItem("selectedCity", cityName);
        alert(`City "${cityName}" submitted!`);
      } else {
        alert("Please enter a city name.");
      }
    });
  });