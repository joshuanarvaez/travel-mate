import React from 'react'
import GoogleMapReact from 'google-map-react';
import {  useMediaQuery, Typography, Paper } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

import mapStyles from './mapStyles'

// const Map = ({ functions we get as props })
const Map = ({ setCoords, setBounds, coords, places, setChildClicked }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:600px)');

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles}}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}// on child click, call setChildClicked and set child - used to make places clickable on map.
      >
        {/* we use latitude and longitude to display places in the map */}
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}//we get values as strings so we use number constructor to convert to numbers
            lng={Number(place.longitude)}
            key={i}
          > 
          {
            // if it is not desktop, show the location pin on map. Otherwise show the paper and rating.
            !isDesktop? (
              <LocationOnOutlinedIcon color='primary' fontSize='large'/>
            )  : (
              <Paper elevation={3} className={classes.paper}>
                <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                <img
                  className={classes.pointer}
                  src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                  alt={place.name}
                />
                <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
              </Paper>
            )
          }
          </div>
        ))}   
      </GoogleMapReact>
    </div>
  );
}

export default Map;