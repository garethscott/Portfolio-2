import React from 'react';
import WorkPage from './WorkPage';
import WorkPicKeyCode from './images/work-picture-keycode.png';

const KeyCodePage = () => {
    return (
        <>
            <WorkPage
                backgroundColor="rgb(253, 167, 159)"
                backImg="rgb(252, 210, 207)"
                workImg={WorkPicKeyCode}
                heading="Key Code"
                copy="The Key Code project required me to build an app the would 
            listen for a pressed key on the keyboard, and present the relevantkeys 
            and codes of that particular key. This app was built using HTML, CSS 
            and Vanilla Javascript."
                workUrl="https://garethscott.github.io/Key-Code-Project/"
                previousUrl="#"
                nextUrl="#"
            />
        </>
    )
}

export default KeyCodePage;