import React, { Component } from 'react';
import './App.css';
import FeaturesList from './FeaturesList/FeaturesList.js'
import Summary from './Summary/Summary.js'
import FEATURES from './FEATURES.js';

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: 'Professor X AMD Fire Breather with sidewinder technology',
        cost: 1200
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <FeaturesList 
            features={FEATURES} 
            handleUpdate={(feature, newValue)=>this.updateFeature(feature, newValue)} 
            selected={this.state.selected} 
          />
          <section className="main__summary">
            <h2>Your cart</h2>
            <Summary selected={this.state.selected}/>
          </section>
        </main>
      </div>
    );
  }
}

export default App;