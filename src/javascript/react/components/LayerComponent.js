import React, { Component } from 'react'
import { Layer, Feature } from "react-mapbox-gl";

const LayerComponent = (props) => {

  let markers = props.array.map(item => {
    let lat = item.lat
    let long = item.long
    let id = item.id

    return(
        <Feature key={id} coordinates={[long, lat]}/>
    )
  })
  debugger
  return (
    <div key={props.array[0].id}>
    <Layer
      type='circle'
      id={props.array[0].id}
      paint={{'circle-radius': parseInt(props.array[0].radius),
              'circle-color': `${props.array[0].hexCode}`,
              'circle-opacity': 0.8}}
      layout={{}}
    >
      {markers}
    </Layer>
    </div>
  )
}

export default LayerComponent;
