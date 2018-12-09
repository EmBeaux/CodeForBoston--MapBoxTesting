import React, { Component } from 'react';
import '../../../stylesheets/App.css';
import Cities from "../../cities.json"
import IndexPageContainer from "../containers/IndexPageContainer.js"
import MenuContainer from "../containers/MenuContainer.js"

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    zeroTen: [],
    elevenTwenty: [],
    twentyOneThirty: [],
    thirtyOneFourty: [],
    fourtyOneHundred: [],
    center: [-90, 40.35],
    zoom: 2.5
  }
  this.changeCenterScreen = this.changeCenterScreen.bind(this)
}

changeCenterScreen(newCenter, zoom){
  let lat = newCenter.lat
  let long = newCenter.long
  this.setState({
    center: [long, lat],
    zoom: 11
   })
}

componentDidMount(){
  let newzeroTen = []
  let newelevenTwenty = []
  let newtwentyOneThirty = []
  let newthirtyOneFourty = []
  let newfourtyOneHundred = []

  Cities.forEach((city) => {
    if(city.rank <= 10){
      newzeroTen.push(
        {
          radius: 15,
          hexCode: "#ff6d48",
          city: city.city,
          id: city.rank,
          lat: city.latitude,
          long: city.longitude
        }
      )
    }else if(city.rank <= 20){
      newelevenTwenty.push(
        {
          radius: 10,
          hexCode: "#70ff28",
          city: city.city,
          id: city.rank,
          lat: city.latitude,
          long: city.longitude
        }
      )
    }else if(city.rank <= 30){
      newtwentyOneThirty.push(
        {
          radius: 8,
          hexCode: "#5044ff",
          city: city.city,
          id: city.rank,
          lat: city.latitude,
          long: city.longitude
        }
      )
    }else if(city.rank <= 40){
      newthirtyOneFourty.push(
        {
          radius: 6,
          hexCode: "#f156ff",
          city: city.city,
          id: city.rank,
          lat: city.latitude,
          long: city.longitude
        }
      )
    }else{
      newfourtyOneHundred.push(
        {
          radius: 6,
          hexCode: "#030203",
          city: city.city,
          id: city.rank,
          lat: city.latitude,
          long: city.longitude
        }
      )
    }
  })
  this.setState({
    zeroTen: newzeroTen,
    elevenTwenty: newelevenTwenty,
    twentyOneThirty: newtwentyOneThirty,
    thirtyOneFourty: newthirtyOneFourty,
    fourtyOneHundred: newfourtyOneHundred
  })
}

  render() {
    return(
      <div className="pageWrapper">
        <IndexPageContainer
          zeroTen = {this.state.zeroTen}
          elevenTwenty = {this.state.elevenTwenty}
          twentyOneThirty = {this.state.twentyOneThirty}
          thirtyOneFourty = {this.state.thirtyOneFourty}
          fourtyOneHundred = {this.state.fourtyOneHundred}
          center = {this.state.center}
          zoom = {this.state.zoom}
        />
        <MenuContainer
          zeroTen = {{"Top Ten!": this.state.zeroTen}}
          elevenTwenty = {{"Eleven Through Twenty": this.state.elevenTwenty}}
          twentyOneThirty = {{"Twenty-One Through Thirty": this.state.twentyOneThirty}}
          thirtyOneFourty = {{"Thirty-One Through Fourty": this.state.thirtyOneFourty}}
          fourtyOneHundred = {{"The Rest!": this.state.fourtyOneHundred}}
          changeCenterScreen = {this.changeCenterScreen}
        />
      </div>
    )
  }
}

export default App;
