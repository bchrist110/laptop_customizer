import React from 'react';
import ListItem from '../ListItem/ListItem.js';

function FeaturesList(props) {
    const featuresRender = Object.keys(props.features).map((feature, i) => <ListItem feature={feature} features={props.features} key={i} handleUpdate={props.handleUpdate} selected={props.selected} />);
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {featuresRender}
            </form>
        )
}

FeaturesList.defaultProps = {
    features: []
}



export default FeaturesList