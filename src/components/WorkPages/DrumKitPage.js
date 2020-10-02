import React from 'react';
import WorkPage from './WorkPage';
import WorkPicDrumKit from './images/work-picture-drumkit.png';

const DrumKitPage = () => {
    return (
        <>
            <WorkPage
                backgroundColor="rgb(242, 167, 48)"
                backImg="rgb(251, 212, 151)"
                workImg={WorkPicDrumKit}
                heading="Drum Kit"
                copy="The drum kit app, when any of the listed keys are pressed plays sound effects 
                of the associated drum or cymbal. This was built using HTML, CSS and vanilla Javascript."
                workUrl="https://garethscott.github.io/Drumkit-Project/"
                previousUrl="/dicegame"
                nextUrl="/keycode"
            />
        </>
    )
}

export default DrumKitPage;