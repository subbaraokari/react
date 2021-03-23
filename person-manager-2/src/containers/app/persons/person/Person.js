import React from 'react';
import classes from './Person.module.css';
const person = props => {
    return (
        <div className={classes.Person} onClick={() => props.deleted(props.pid)}>
            <p>The person name is {props.name} and address is {props.address}</p>
        </div>
    )
}
export default person;