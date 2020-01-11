import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="person">
            <h2 onClick={props.click}>i'm {props.name}, Age: {props.age}</h2>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    )
    
};

export default person;