import React, { Component } from 'react';
import '../../../stylesheets/App.css';
import ReactMapboxGl, { Layer, Feature, ZoomControl, RotationControl, Popup } from "react-mapbox-gl";
import LayerComponent from '../components/LayerComponent.js'

class IndexPageContainer extends Component {
  constructor(props) {
  super(props);
  this.state = {

  }
}

  render() {
    const PROPCITIES = [this.props.zeroTen, this.props.elevenTwenty, this.props.twentyOneThirty, this.props.thirtyOneFourty, this.props.fourtyOneHundred]

    let mappedCities = PROPCITIES.map(cities => {
      return(
        <LayerComponent
          array={cities}
        />
      )
    })

    const Map = ReactMapboxGl({
      accessToken: "pk.eyJ1IjoiZW1iZWF1eCIsImEiOiJjanBlY3VlcTkwM29nM2twYWdwYm8yMHZlIn0.61Iv18JsWjaMsZzLrZR0Ag"
    })


    return(
      <div className="mapWrapper">
        <Map
          style='mapbox://styles/mapbox/light-v9'
          containerStyle={{
              height: "70vh",
              width: "70vw"
            }}
          zoom={[this.props.zoom]}
          center={this.props.center}
            >
            <ZoomControl />
            <RotationControl />
            {mappedCities}
          </Map>
      </div>
    )
  }
}

export default IndexPageContainer;
