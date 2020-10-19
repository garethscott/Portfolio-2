import React from 'react';
import WorkPage from './WorkPage';
import WorkPicTodo from './images/work-picture-todoapp.png';

const TodoPage = () => {
    return (
        <>
            <WorkPage
                backgroundColor="rgb(5, 205, 229)"
                backImg="rgb(149, 242, 253)"
                workImg={WorkPicTodo}
                heading="Todo App"
                copy="The To-do project is a full-stack application were the user can submit 
                and store to-dos. The front-end is built entirely in React, and the back-end 
                is built in Node.js and Express, connected to a MongoDB database."
                workUrl="#"
                previousUrl="pokemonapp"
                nextUrl="addressbook"
            />
        </>
    )
}

export default TodoPage;