const addDetails = (cityDetails) => {
  const mainContent = document.querySelector('.city-content');
  mainContent.innerHTML = '';
  const prefixes = {
    location: 'Location',
    localtime: 'Date & Time',
    weatherDesc: 'Weather Description',
    tempC: 'Temperature',
    windSpeed: 'Wind Speed',
    windDegree: 'Wind Degree',
    windDir: 'Wind Direction',
  };

  Object.entries(cityDetails).forEach(([key, value]) => {
    const div = document.createElement('div');
    const prefix = prefixes[key];
    if (prefix === 'Wind Degree') {
      div.textContent = `${prefix}: ${value}°`;
    } else if (prefix === 'Temperature') {
      div.textContent = `${prefix}: ${value}°C`;
    } else if (prefix === 'Wind Speed') {
      div.textContent = `${prefix}: ${value} KM/H`;
    } else {
      div.textContent = `${prefix}: ${value}`;
    }
    div.classList.add(key);
    mainContent.appendChild(div);
  });
};

const getWeather = async (url) => {
  const response = await fetch(url);
  const weather = await response.json();
  const input = document.querySelector('.cityInput');

  try {
    const CityObject = (name, time, desc, temp, speed, degree, direction) => ({
      location: name,
      localtime: time,
      weatherDesc: desc,
      tempC: temp,
      windSpeed: speed,
      windDegree: degree,
      windDir: direction,
    });

    const city = new CityObject(
      weather.location.name,
      weather.location.localtime,
      weather.current.condition.text,
      weather.current.temp_c,
      weather.current.wind_kph,
      weather.current.wind_degree,
      weather.current.wind_dir,
    );
    input.value = '';
    input.placeholder = city.location;
    addDetails(city);
    return city;
  } catch (error) {
    input.value = '';
    input.placeholder = 'City name is not valid';
    console.error('Error fetching weather:', error);
    return null;
  }
};

const weather = () => {
  const apiKey = '14665755af7243cfbb4105110230211';
  let location = 'Sydney';
  let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
  const submit = document.querySelector('.citySubmit');

  getWeather(url);

  submit.addEventListener('click', async (submitEvent) => {
    submitEvent.preventDefault();

    location = document.querySelector('.cityInput').value;
    url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
    try {
      const city = await getWeather(url);
      addDetails(city);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  });
};

export default weather;
