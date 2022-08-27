import React from 'react';
import './InputOption.css';
function InputOption(props) {
    return (
       <div className="inputOption">
            <props.icon style={{color:props.color}}/>
           <h4>{props.title}</h4>
       </div>
    );
}

export default InputOption;
