import React from 'react';
import classes from './Content.module.css';
const content = props => {
    /* const btnStyle = {
         backgroundColor: '#ff4949',
         padding: '0.5rem 1rem',
         border: '1px solid #ff4949'
     };*/
    return (
        <div className={classes.Content}>
            <h1>This is a react Component</h1>
            <p>It's Really working</p>
            <button onClick={props.click}>Toggle Persons</button>
        </div>
    )
}
export default content;