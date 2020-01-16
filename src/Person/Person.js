import React from 'react';
// import './Person.css';
// import Radium from 'radium';
import styled from 'styled-components'

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 2px solid #333;
    box-shadow: 4px 4px 4px 4px #ccc;
    padding: 6px;
    text-align: center;
`;

const person = (props) => {
    return (
        // <div className="person" style={style}>
        <StyledDiv>
            <h2 onClick={props.click}>i'm {props.name}, Age: {props.age}</h2>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </StyledDiv>
    )
    
};

export default person;