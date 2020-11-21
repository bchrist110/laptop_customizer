import React from 'react';
import USCurrencyFormat from '../USCurrencyFormat.js';
// import slugify from 'slugify';

export default function FeatureItem(props) { 
    console.log(props.selected)

    let handleChange = (e) => {
      console.log("hi")
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
              // onChange={e => props.handleUpdate(props.feature, e.target.value)}
              onChange={handleChange}
            />
            <label htmlFor={props.itemHash} className="feature__label">
              {props.item.name} ({USCurrencyFormat.format(props.item.cost)})
            </label>
          </div>
        )
}