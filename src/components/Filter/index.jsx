import React from 'react';
import './filter.css';



const Filter = (props) => {
    return (<div>
        {props.index !== 0 ? <button className="filterStyle">{props.filter}</button> : <button className="filterStyle active">{props.filter}</button>}
    </div>);
}

export default Filter;

