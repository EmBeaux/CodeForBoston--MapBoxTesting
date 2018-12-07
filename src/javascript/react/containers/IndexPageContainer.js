import React, { Component } from 'react';
import '../../../stylesheets/App.css';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

class IndexPageContainer extends Component {
  constructor(props) {
  super(props);
  this.state = {

  }
  this.handleClick = this.handleClick.bind(this)
  this.makeMarkers = this.makeMarkers.bind(this)
  this.makeLayer = this.makeLayer.bind(this)
}

handleClick(id){
  console.log(id)
}

makeMarkers(array){
  let markers = array.map(item => {
    let lat = item.lat
    let long = item.long
    let id = item.id

    let handleClick = () => {
      this.handleClick(id)
    }

    return(
        <Feature key={id} coordinates={[long, lat]} onClick={handleClick}/>
    )
  })
  return markers
}

makeLayer(array, number, id, color){
  return(
    <Layer
      type='circle'
      id={id}
      paint={{'circle-radius': parseInt(number),
              'circle-color': `${color}`,
              'circle-opacity': 0.8}}
      layout={{}}
    >
      {array}
    </Layer>
  )
}

  render() {
    let topTen = this.makeMarkers(this.props.zeroTen)
    let elevenTwenty = this.makeMarkers(this.props.elevenTwenty)
    let twentyOneThirty = this.makeMarkers(this.props.twentyOneThirty)
    let thirtyOneFourty = this.makeMarkers(this.props.thirtyOneFourty)
    let fourtyOneHundred = this.makeMarkers(this.props.fourtyOneHundred)
    let layers1 = this.makeLayer(topTen, 15, "marker1", "#ff6d48")
    let layers2 = this.makeLayer(elevenTwenty, 10, "marker2", "#70ff28")
    let layers3 = this.makeLayer(twentyOneThirty, 8, "marker3", "#5044ff")
    let layers4 = this.makeLayer(thirtyOneFourty, 6, "marker4", "#f156ff")
    let layers5 = this.makeLayer(fourtyOneHundred, 4, "marker5", "#030203")

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
            {layers1}
            {layers2}
            {layers3}
            {layers4}
            {layers5}
          </Map>
      </div>
    )
  }
}

export default IndexPageContainer;
