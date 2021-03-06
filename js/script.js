
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

function startCity() {
  // Création de l'objet apiWeather
  const saisie = document.getElementById("city-input").value;
  alert("Vous avez saisi : "+ saisie);
    
  const apiWeather = new API_WEATHER(saisie);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

function getThreeDaysForecastCity() {
  
  const ville = document.getElementById("city-input").value;
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(ville);
  // Appel de la fonction fetchThreeDayForecast
  apiWeather
    .fetchThreeDaysForecast()
    .then(function(response) {

      // Récupère la donnée d'une API
      const data = response.data;

      for(var i=1; i<4; i++)
      {
        // On récupère l'information principal
        const main = data.list[i].weather[0].main;
        const description = data.list[i].weather[0].description;
        const temp = data.list[i].temp.day;
        const icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);

        // Modifier le DOM
        document.querySelectorAll('#today-forecast-main')[i].innerHTML = main;
        document.querySelectorAll('#today-forecast-more-info')[i].innerHTML = description;
        document.querySelectorAll('#icon-weather-container')[i].innerHTML = icon;
        document.querySelectorAll('#today-forecast-temp')[i].innerHTML = `${temp}°C`;
      }

    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

function getThreeDaysForecast() {
  
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchThreeDayForecast
  apiWeather
    .fetchThreeDaysForecast()
    .then(function(response) {

      // Récupère la donnée d'une API
      const data = response.data;

      for(var i=1; i<4; i++)
      {
        // On récupère l'information principal
        const main = data.list[i].weather[0].main;
        const description = data.list[i].weather[0].description;
        const temp = data.list[i].temp.day;
        const icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);

        // Modifier le DOM
        document.querySelectorAll('#today-forecast-main')[i].innerHTML = main;
        document.querySelectorAll('#today-forecast-more-info')[i].innerHTML = description;
        document.querySelectorAll('#icon-weather-container')[i].innerHTML = icon;
        document.querySelectorAll('#today-forecast-temp')[i].innerHTML = `${temp}°C`;
      }

    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

