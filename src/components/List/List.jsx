import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles.js';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';


// const List= ({get states as props})
const List = ({ places, childClicked, isLoading, type, setType, rating, setRating }) => {
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);//state field that contains all references. elRefs=elementReferences

  // We want our list on the left to scroll to the place selected on the map on the right. We useEffect to accomplish this.
  // useEffect accepts a callback function and has a dependency array.
  // We recall this useEffect every time the places change.
  useEffect(() => {
    // 1 use Array constructor to construct as many elements as there are places. Array(places.length)
    // 2 call fill method .fill() to fill elements in the array with a value 

    // 3 call map method .map() which creates a new array from calling a function for every array element 
        // takes up to 3 arguments (1start, 2index, 3array) .map(function(start, index, arr)thisValue) 
        // don't need start value (1) but it's required so we give a value of underscore. 
        // only need index value (2). (3) not required. 
        // function returns refs[i] so we access the ref and return the value OR if the ref doesn't exist yet, create a new ref.
        // once we have refs, setElRefs to refs
    const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());

    setElRefs(refs); //set ElRefs is equal to refs
  }, [places]);

    // **** NOTE: THIS WILL NOT WORK WITHOUT THE ISLOADING STATE on the app page because at the start, we get an error that 
    //states places can't be found. We need a loading state to fix this. We use Circular Progress from MUI. **** 

    const theme = createTheme({
      palette: {
        primary: {
          // light: will be calculated from palette.primary.main,
          main: '#2b7a78',
          // dark: will be calculated from palette.primary.main,
          // contrastText: will be calculated to contrast with palette.primary.main
        },
        
        // error: will use the default color
      },
    });

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.container}>
      <Typography className={classes.header} variant='h4'>Restaurants, Hotels and Attractions</Typography>
      {/* if isLoading, render a div with Circular Progress inside. Otherwise, render everything else below. */}
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
      <>
        <FormControl variant="filled" className={classes.formControl}>
            <InputLabel className={classes.inputLabel} id="type">Type</InputLabel>
                <Select className={classes.select} id="type" value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem className={classes.menuItem} value="restaurants">Restaurants</MenuItem>
                    <MenuItem className={classes.menuItem} value="hotels">Hotels</MenuItem>
                    <MenuItem className={classes.menuItem} value="attractions">Attractions</MenuItem>
                </Select>
        </FormControl>
        <FormControl variant="filled" className={classes.formControl}>
            <InputLabel className={classes.inputLabel} id="rating">Rating</InputLabel>
              <Select className={classes.select} id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                  <MenuItem className={classes.menuItem} value="">All</MenuItem>
                  <MenuItem className={classes.menuItem} value="3">Above 3.0</MenuItem>
                  <MenuItem className={classes.menuItem} value="4">Above 4.0</MenuItem>
                  <MenuItem className={classes.menuItem} value="4.5">Above 4.5</MenuItem>
              </Select>
        </FormControl>
        <Grid container spacing={3} className={classes.list}>
              {places?.map((place, i) => (
                <Grid ref={elRefs[i]} item key={i} xs={12}>
                  <PlaceDetails
                    place={place}
                    selected={Number(childClicked) === i} //if childClicked = index, this place details has been selected. Returns a string so convert to # by calling Number().   
                    refProp={elRefs[i]}//pass elRef prop 
                  />
                </Grid>
          ))}
        </Grid>
      </>
      )}
    </div >
    </ThemeProvider>
  );
}

export default List;