import axios from 'axios';

// We made this call dynamic by passing type as a parameter and making our call a template string. 
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
