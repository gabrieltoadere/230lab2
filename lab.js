    
        const submitButton = document.getElementById("search-button");
        const cityInput = document.getElementById("city-search");
        const main = document.getElementById("backtohome");
  
    submitButton.addEventListener("click", function () {
      const cityName = cityInput.value.trim();
      if (cityName) {
        localStorage.setItem("selectedCity", cityName);
        alert(`City "${cityName}" submitted!`);
      } else {
        alert("Please enter a city name.");
      }
    });
   

    main.addEventListener("click",function () {
      localStorage.removeItem("selectedCity");
    });
  