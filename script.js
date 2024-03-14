function getWeather(){

  const apiKey = '9f4f3220cec3dfb63298d4eb27d39f35';
  const city = document.getElementById('city').value;

  if(!city){
    alert('Please enter a city')
    return;
  }
  
 const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}';
 const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}';



 fetch(currentWeatherUrl)
 .then (response => response.json())
 .then (data => {
  displayWeather(data);
 })
 .catch (error =>{
  console.error('Error fetching current weather data',error);
  alert('SORRY Error fetching current weather data, Please try again.')
 })


 fetch(forecastUrl)
 .then(response => response.json())
 .then(data => {
     displayHourlyForecast(data.list);
 })
 .catch(error => {
     console.error('Error fetching hourly forecast data:', error);
     alert('Error fetching hourly forecast data. Please try again.');
 });

}


