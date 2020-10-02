import React from 'react';
import WorkPage from './WorkPage';
// import WorkPicTravelApp from './images/work-picture-travelapp.png';

const TravelAppPage = () => {
    return (
        <>
            <WorkPage
                backgroundColor="rgb(5, 205, 229)"
                backImg="rgb(149, 242, 253)"
                // workImg={WorkPicTravelApp}
                heading="Travel App"
                copy="A full-stacked application that allows the user to 
                discover their ideal destination based on their holiday requirements. 
                A group project, we adopted a contributor workflow. The app was built 
                using MongoDB, React, Express & Node.js."
                workUrl="#"
                previousUrl="#"
                nextUrl="#"
            />
        </>
    )
}

export default TravelAppPage;