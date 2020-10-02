import React from 'react';
import WorkPage from './WorkPage';
// import WorkPicAddBook from './images/work-picture-addbook.png';

const AddBookPage = () => {
    return (
        <>
            <WorkPage
                backgroundColor="rgb(253, 167, 159)"
                backImg="rgb(252, 210, 207)"
                // workImg={WorkPicAddBook}
                heading="Address Book"
                copy="An app built using React, were the user can store their 
                friends and acquaintances telephone numbers."
                workUrl="#"
                previousUrl="#"
                nextUrl="#"
            />
        </>
    )
}

export default AddBookPage;