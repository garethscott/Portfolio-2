import React from 'react';
import WorkPage from './WorkPage';
// import WorkPicPoke from './images/work-picture-poke.png';

const PokePage = () => {
    return (
        <>
            <WorkPage
                backgroundColor="rgb(242, 167, 48)"
                backImg="rgb(251, 212, 151)"
                // workImg={WorkPicPoke}
                heading="Pokemon App"
                copy="The Pokemon app was team project working with git using a collaborator 
                workflow. As a team we had to fix bugs and make additions to the existing Pokemon 
                app. The Pokemon app allowed the user to search and research their favourite 
                Pokemon."
                workUrl="#"
                previousUrl="/weatherapp"
                nextUrl="/todoapp"
            />
        </>
    )
}

export default PokePage;