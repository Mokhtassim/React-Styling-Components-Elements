import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
 const style={
     '@media (min-width: 500px)': {
         width: '450px'
     }
 }
    return (
        <div className="person" style={style}>
            <h2 onClick={props.click}>i'm {props.name}, Age: {props.age}</h2>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    )
    
};

export default Radium(person);