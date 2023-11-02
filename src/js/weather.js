const getWeather = async (url) => {
  const response = await fetch(url);
  const weather = await response.json();
  try {
    const CityObject = (
      name,
      time,
      desc,
      icon,
      temp,
      speed,
      degree,
      direction,
    ) => ({
      location: name,
      localtime: time,
      weatherDesc: desc,
      weatherIcon: icon,
      tempC: temp,
      windSpeed: speed,
      windDegree: degree,
      windDir: direction,
    });

    const city = new CityObject(
      weather.location.name,
      weather.location.localtime,
      weather.current.condition.text,
      weather.current.condition.icon,
      weather.current.temp_c,
      weather.current.wind_kph,
      weather.current.wind_degree,
      weather.current.wind_dir,
    );
    return city;
  } catch (error) {
    const errorMessage = 'Please input a valid city name';
    console.error('Error fetching weather:', error);
    return errorMessage;
  }
};

// const addDetails = (cityDetails) => {
//   const mainContent = document.querySelector('.content');
// };

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
      //   addDetails(city);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  });
};

export default weather;

// const getImage = async (searchTerm) => {
//   const apiKeyGiphy = 'SfHwYIDhkDHSH6WYDLRRqP7XK72OWqnp';
//   const search = encodeURIComponent(searchTerm);
//   let url = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKeyGiphy}&s=${search}`;
//   const img = document.querySelector('img');
//   const response = await fetch(url);
//   const catData = await response.json();
//   img.src = catData.data.images.original.url;
// };
