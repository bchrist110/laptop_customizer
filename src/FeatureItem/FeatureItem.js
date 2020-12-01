import React from 'react';
import USCurrencyFormat from '../USCurrencyFormat.js';

export default function FeatureItem(props) { 
    let handleChange = (e) => {
      props.handleUpdate(props.feature, props.item)
    }  

    return (
            <div className="feature__item">
            <input
              id={props.itemHash}
              type="radio"
              className="feature__option"
              name={props.item.name}
              value={props.item}
              checked={props.item.name === props.selected[props.feature].name}
              onChange={handleChange}
            />
            <label htmlFor={props.itemHash} className="feature__label">
              {props.item.name} ({USCurrencyFormat.format(props.item.cost)})
            </label>
          </div>
        )
}