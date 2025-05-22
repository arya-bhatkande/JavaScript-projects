async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'c62787c5d75b41d96548c884b5140718'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      const data = response.data;     

      document.getElementById('cityName').textContent = data.name;
      document.getElementById('temperature').textContent = data.main.temp;
      document.getElementById('description').textContent = data.weather[0].description;
      document.getElementById('humidity').textContent = data.main.humidity;

      document.getElementById('weatherResult').style.display = 'block';
    } catch (error) {
      alert('Error fetching weather data. Please check the city name and try again.');
      console.error(error);
    }
  }