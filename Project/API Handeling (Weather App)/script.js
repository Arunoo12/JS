document.addEventListener("DOMContentLoaded", function () {
  const userInput = document.getElementById("city-input");
  const addBtn = document.getElementById("get-weather-btn");
  const weatherInfoDiv = document.getElementById("weather-info");
  const cityName = document.getElementById("city-name");
  const cityTempreature = document.getElementById("tempreature");
  const cityDescription = document.getElementById("description");
  const errorMsg = document.getElementById("error-message");
  const api = "523509038785c14f74bd534a1ba6b9b6";

  addBtn.addEventListener("click", async function () {
    const finalUserInput = userInput.value.trim();
    if (!finalUserInput) {
      return;
    }
    try {
      const data = await fetchWeatherData(finalUserInput);
      displayWeatherInfo(data);
    } catch (error) {
      showError();
    }
  });
  async function fetchWeatherData(dataToFetch) {
    //get data from weather API
    // console.log("this is data to fetch", dataToFetch);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${dataToFetch}&appid=${api}`;
    const response = await fetch(url);
    console.log(response);
    if (!response.ok) {
      throw new Error("city not found");
    }
    const jsonData = await response.json();
    return jsonData;
  }
  function displayWeatherInfo(dataToShow) {
    // display content on screen
    console.log(dataToShow);
    const { name, main, weather } = dataToShow;
    cityName.textContent = name;
    cityTempreature.textContent = main.temp;
    cityDescription.textContent = weather[0].description;

    weatherInfoDiv.classList.remove("hidden");
    errorMsg.classList.add("hidden");
  }
  function showError() {
    weatherInfoDiv.classList.add("hidden");
    errorMsg.classList.remove("hidden");
  }
});
