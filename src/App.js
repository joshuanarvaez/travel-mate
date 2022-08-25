import React, {useState, useEffect} from 'react'
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData } from './api'
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
    // App is our parent component. We can send these states to other components by passing them in the return in <List>, <Map>
    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);

    const [childClicked, setChildClicked] = useState(null);

    const [coords, setCoords] = useState({});
    const [bounds, setBounds] = useState({});

    const [isLoading, setIsLoading] = useState(false);
    //isLoading state has initial value of false. Set it to true before we getPlacesData. Then after fetch data, set it back to false.
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(( { coords: { latitude, longitude } }) => {
            setCoords({ lat: latitude, lng: longitude });
        })
    }, []);//runs only at the start because of this dependency array

// For filtering based on rating - filter() method creates a new array filled with elements that pass a test provided by a function.
    useEffect(() => {
        // if place.rating is larger than current rating, return that place
        const filteredPlaces = places.filter((place) => place.rating > rating);

        setFilteredPlaces(filteredPlaces);
    }, [rating]);//runs only when rating changes


    useEffect(() => {
        if(bounds.sw && bounds.ne) {
            setIsLoading(true);
           
            getPlacesData(type, bounds.sw, bounds.ne)
                .then((data) => {
                // check if place has a name and place has a number of reviews greater than 0. If yes, display on map. 
                    setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
                    setFilteredPlaces([])
                    setIsLoading(false);
                })
        }
    }, [ type, bounds]);// runs every time we have new type or new bounds

    console.log(places);
     
    return (
    <>
            <CssBaseline />
            <Header setCoords={setCoords} />
            <Grid container spacing={3} style={{ width: '100%', backgroundColor: '#3aafa9'}}>
                <Grid item xs={12} md={4}>
                    {/* We pass the following states as props over to the List component. */}
                    <List 
                    places={filteredPlaces.length ? filteredPlaces : places} // if there are filtered places, return those. Else return all places.
                    childClicked={childClicked}
                    isLoading={isLoading} 
                    type={type}
                    setType={setType}
                    rating={rating}
                    setRating={setRating}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    {/* We pass the following states as props over to the Map component. */}
                    <Map
                    setCoords={setCoords}
                    setBounds={setBounds}
                    coords={coords}
                    places={filteredPlaces.length ? filteredPlaces : places} // if there are filtered places, return those. Else return all places.
                    setChildClicked={setChildClicked}
                    />
                </Grid> 
            </Grid>
            </>
            );
}

            export default App