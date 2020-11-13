import React from 'react';
import USCurrencyFormat from '../USCurrencyFormat.js';
import slugify from 'slugify';

export default function FeatureItem(props) { 
    console.log(props.selected)
    console.log(props.feature)
    console.log(props.item)
    console.log(props.selected[props.feature])
    return (
            <div className="feature__item">
            <input
              type="radio"
              className="feature__option"
              name={slugify(props.feature)}
               value={props.item}
               checked={props.item.name === props.selected[props.feature].name}
               onChange={e => this.props.handleUpdate(props.selected[props.feature].name, e.target.value)}
            />
            <label className="feature__label">
              {props.item.name} ({USCurrencyFormat.format(props.item.cost)})
            </label>
          </div>
        )
}