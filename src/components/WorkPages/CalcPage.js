import React from 'react';
import WorkPage from './WorkPage';
import WorkPicCalc from './images/work-picture-calc.png';

const CalcPage = () => {
    return (
        <>
            <WorkPage
                backgroundColor="rgb(242, 167, 48)"
                backImg="rgb(251, 212, 151)"
                workImg={WorkPicCalc}
                heading="Calculator"
                copy="The calculator project required me to build a fully functioning calculator using React."
                workUrl="https://garethscott.github.io/Calculator-Two/"
                previousUrl="/addressbook"
                nextUrl="/dicegame"
            />
        </>
    )
}

export default CalcPage;