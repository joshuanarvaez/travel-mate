import React, { useState }from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles'

const Header = ({setCoords}) => {
  const classes = useStyles(); 
  const [autocomplete, setAutocomplete] = useState(null);// state for autocomplete - search.
  
  // onLoad handler function gets the autocomplete and sets it - so we have it in state and can use it.
  const onLoad = (autoC) => setAutocomplete(autoC);

// onPlaceChanged handler function finds latitude and longitude of new location so we can set it to state.
// More specifically, we want to go back inside of App and change the coordinates. 
// We do that by passing setCoords as a prop to the header in App and then passing setCoords as a prop to header above.
// Then, we set setCoords here to the new location's lat and lng.
  const onPlaceChanged = () => {
    // we use the getPlace() method to find lat and lng which is in the Google Maps API docs - autocomplete.
    const lat = autocomplete.getPlace().geometry.location.lat()
    const lng = autocomplete.getPlace().geometry.location.lng()
    
    setCoords({ lat, lng });
  }
  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h5' className={classes.title}>
          Travel Mate
        </Typography>
        <Box display='flex'>
          <Typography variant='h6' className={classes.title}>
          Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon/>
              </div>
              <InputBase placeholder='Search...' classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header