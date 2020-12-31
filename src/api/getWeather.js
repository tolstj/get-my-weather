import axios from 'axios';
import geo from './geo';

function getWeather(cityName) {
  const [lat, lon] = geo[cityName];
  return axios.get(`http://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=civillight&output=json`);
}

export default getWeather;
