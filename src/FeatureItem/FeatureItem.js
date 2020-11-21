import React from 'react';
import USCurrencyFormat from '../USCurrencyFormat.js';
// import slugify from 'slugify';

export default function FeatureItem(props) { 
    console.log(props.selected)
    console.log(props.feature)
    console.log(props.item)
    console.log(props.selected[props.feature])

    let handleChange = (e) => {
      console.log("hi")
      // props.handleUpdate(props.feature, e.target.value)
    }    
    return (
            <div className="feature__item">
            <input
              type="radio"
              className="feature__option"
              name={props.item.name}
              value={props.item}
              checked={props.item.name === props.selected[props.feature].name}
              // onChange={e => props.handleUpdate(props.feature, e.target.value)}
              onChange={handleChange}
            />
            <label className="feature__label">
              {props.item.name} ({USCurrencyFormat.format(props.item.cost)})
            </label>
          </div>
        )
}