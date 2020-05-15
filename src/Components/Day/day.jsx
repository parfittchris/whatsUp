import React from 'react';
import './day.css';

export default function day(props) {
    return (
      <div className='dayComponent'>
        <div>{props.day}</div>
        <img
          src={require(`./../../assets/${props.type}.png`)}
          alt='weatherImg'
          className='weatherImg'
        />
        <div>{props.type}</div>
        <div className='temps'>
          <div className="tempItem">High:{props.high}</div>
          <div className="tempItem">Low:{props.low}</div>
        </div>
      </div>
    );
}
