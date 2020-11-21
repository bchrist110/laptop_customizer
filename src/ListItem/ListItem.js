import React from 'react';
import FeatureItem from '../FeatureItem/FeatureItem.js';
//import slugify from 'slugify';

export default function ListItem(props) {   
    const options = props.features[props.feature].map((item,key) => <FeatureItem item={item} feature={props.feature} features={props.features} key={key} handleUpdate={props.handleUpdate} selected={props.selected} />);
        return (
            <fieldset className="feature">
                <legend className="feature__name">
                    <h3>{(props.feature)}</h3>
                </legend>
                {options}
            </fieldset>
        )
}

ListItem.defaultProps= {
    feature: []
}