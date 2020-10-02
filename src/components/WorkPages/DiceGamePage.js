import React from 'react';
import WorkPage from './WorkPage';
import WorkPicDiceGame from './images/work-picture-dicegame.png';

const DiceGamePage = () => {
    return (
        <>
            <WorkPage
                backgroundColor="rgb(5, 205, 229)"
                backImg="rgb(149, 242, 253)"
                workImg={WorkPicDiceGame}
                heading="Dice Game"
                copy="The Dice Game, in order for a participant to win they must score 
                over twenty-one to win, if they roll a score of one at anytime they loose 
                immediately! This app was built using HTML, CSS and vanilla Javascript."
                workUrl="https://garethscott.github.io/Dice-Multiplayer-Project-/"
                previousUrl="#"
                nextUrl="#"
            />
        </>
    )
}

export default DiceGamePage;