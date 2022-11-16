# Project - Travel Mate

## Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Features](#features)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## Overview
![Alt text](/src/assets/screenshot.png?raw=true "Travel Mate Screenshot")

 Live demo: https://jn-travel-mate.netlify.app/ 

 We did not follow best practices are far as state management goes with this project. Redux toolkit or React Context is more suitable especially if we needed to go down further levels into components. But, for our purposes, it worked fine. 
 
 Things we did learn: Making API calls with Axios, Google Maps API and geolocations, managing our API's on Google Cloud console and Rapid API console, storing API keys in environment variables, what a deprecated API is and what it means for a project, how to use useEffects, Material UI styled components -  how to override and update styling, theming. 

### Built With
Google Maps API: https://developers.google.com/maps 
Rapid API - Travel Advisor: https://rapidapi.com/apidojo/api/travel-advisor/
React JS: https://reactjs.org/
Node JS: https://nodejs.org/en/ 
MaterialUI: https://mui.com/ 

## Dependencies
npm install @material-ui/core @material-ui/icons @material-ui/lab @react-google-maps/api axios google-map-react

## Features
This application enables users to search/filter restaurants and attractions near them. Users can also explore restaurants and attractions anywhere in the world by updating the search box with a new location or simply dragging their cursor on the map. Clicking on the restaurant or attraction card on the map gives the user more information on that particular place. We accomplish this with geolocation, Google Maps API, and Travel Advisor API.

## Contact
Website - https://jhn-portfolio.netlify.app/
LinkedIn - https://www.linkedin.com/in/joshua-narvaez/ 

## Acknowledgements
Adrian Hajdin - JavascriptMastery JSM
Github - https://github.com/adrianhajdin/project_travel_advisor 
Project 1: https://www.youtube.com/watch?v=GDa8kZLNhJ4
