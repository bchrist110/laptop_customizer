import React from 'react';
import SummaryItem from '../SummaryItem/SummaryItem'
import Total from '../total'

export default function Summary(props) {
    const items = Object.keys(props.selected).map((feature, idx) =>  <SummaryItem 
                                                                        feature={feature} 
                                                                        selected={props.selected} 
                                                                        key={idx} 
                                                                     /> 
    )

    return (
        <div>
            {items}
            <Total selected={props.selected} />
        </div>
    )
    
}