import React from 'react';
import SummaryItem from '../SummaryItem/SummaryItem'

export default function Summary(props) {
    console.log(Object.keys(props.selected))
    return Object.keys(props.selected).map((feature, idx) =>  <SummaryItem feature={feature} selected={props.selected} key={idx} /> )
    
}