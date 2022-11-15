// import React from 'react'
// import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
// import PhoneIcon from '@material-ui/icons/Phone';

// import Rating from '@material-ui/lab/Rating';

// import useStyles from './styles.js';


// const PlaceDetails = ({ place, selected, refProp }) => {
//   const classes = useStyles();
//   // if selected, call that refProp. Each ref has current property. 
//   // scrollIntoView method scroll's ancestor's containers and makes element of which it is called on visible to user.
//   // so, if selected on the map on the right, scroll that selection into view on the list on the left.
//   if(selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

//  return (
//     <Card className={classes.content} elevation={6}>
//       <CardMedia
//         style={{ height: 350 }}
//         image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
//         title={place.name}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5">{place.name}</Typography>
//         {place?.cuisine?.map(({ name }) => (
//           <Chip key={name} size="small" label={name} className={classes.chip} />
//         ))}
//         {/* displays rating and reviews in cards on left */}
//         <Box display="flex" justifyContent="space-between" my={1}>
//           <Rating name="read-only" value={Number(place.rating)} readOnly />
//           <Typography component="legend">out of {place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
//         </Box>
//         <Box display="flex" justifyContent="space-between">
//           <Typography component="legend">Ranking</Typography>
//           <Typography gutterBottom variant="subtitle1">
//             {place.ranking}
//           </Typography>
//         </Box>
//         <Box display="flex" justifyContent="space-between">
//           <Typography component="legend">Price</Typography>
//           <Typography gutterBottom variant="subtitle1">
//             {place.price_level}
//           </Typography>
//         </Box>
//         {place?.awards?.map((award) => (
//           <Box display="flex" justifyContent="space-between" my={0} alignItems="center">
//             <img src={award.images.small} alt={award.display_name} />
//             <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
//           </Box>
//         ))} 
//           {place.address && (
//           <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
//             <LocationOnIcon />{place.address}
//           </Typography>
//         )}
//          {place.phone && (
//           <Typography variant="body2" color="textSecondary" className={classes.spacing}>
//             <PhoneIcon /> {place.phone}
//           </Typography>
//         )}        
//       </CardContent>
//       <CardActions>
//         <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
//           Trip Advisor
//         </Button>
//         <Button size="small" color="primary" onClick={() => window.open(place.write_review, '_blank')}>
//           Write review
//         </Button>
//         <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
//           Website
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

// export default PlaceDetails

import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

const PlaceDetails = ({ place, selected, refProp }) => {
  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const classes = useStyles();

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={place.name}
        alt={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">{place.name}</Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
            <img src={award.images.small} alt={place.award} />
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place.address && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
            <LocationOnIcon />{place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography variant="body2" color="textSecondary" className={classes.spacing}>
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
          Trip Advisor
        </Button>
        <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
          Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;