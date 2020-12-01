import React from 'react'
import USCurrencyFormat from './USCurrencyFormat.js'

export default function Total(props) {
    const totalCost = Object.keys(props.selected).reduce(
        (acc, curr) => acc + props.selected[curr].cost,
        0
    );

    return (
        <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {USCurrencyFormat.format(totalCost)}
              </div>
        </div>
    )
}