import React from 'react';
import WorkPage from './WorkPage';
import WorkPicWeatherApp from './images/work-picture-weatherapp.png';

const WeatherAppPage = () => {
    return (
        <>
            <WorkPage
                backgroundColor="rgb(253, 167, 159)"
                backImg="rgb(252, 210, 207)"
                workImg={WorkPicWeatherApp}
                heading="Weather App"
                copy="The application allows the user to find the forecast of a searched 
                for location. The app was built server-side using Node.js and express, 
                and rendered back-end with handlebars. The 
                weather forecast data is retrieved from the OpenWeatherMap API."
                workUrl="https://gentle-crag-79761.herokuapp.com/"
                previousUrl="/travelapp"
                nextUrl="/pokemonapp"
            />
        </>
    )
}

export default WeatherAppPage;