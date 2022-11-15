import axios from 'axios';

// Our API calls
export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            // pass sw and ne properties to get bounds
            params: {
                bl_latitude: sw.lat, //bottom-left-lat
                tr_latitude: ne.lat, //top-right-lat
                bl_longitude: sw.lng, //bottom-left-long
                tr_longitude: ne.lng, //top-right-long
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_PLACES_API_KEY,
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });

        return data;
    } catch (error) {
        console.log(error)
    }
};

export const getWeatherData = async (lat, lng) => {
    try {
      if (lat && lng) {
        const { data } = await axios.get('https://yahoo-weather5.p.rapidapi.com/weather', {
          params: { lon: lng, lat: lat, },
          headers: {
            'x-rapidapi-key': process.env.REACT_APP_WEATHER_API_KEY,
            'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com',
          },
        });
  
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

