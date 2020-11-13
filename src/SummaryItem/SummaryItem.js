import React from 'react';
import USCurrencyFormat from '../USCurrencyFormat.js';

const SummaryItem = (props) => {
    const selectedOption = props.selected[props.feature];
    return (
        <div className="summary__option">
          <div className="summary__option__label">{props.feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
    )
}

export default SummaryItem