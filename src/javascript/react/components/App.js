import React, { Component } from 'react';
import '../../../stylesheets/App.css';
import Cities from "../../cities.json"
import IndexPageContainer from "../containers/IndexPageContainer.js"
import MenuContainer from "../containers/MenuContainer.js"
import CheckboxComponent from "./CheckboxComponent.js"

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
    zoom: 2.5,
    show1: true,
    show2: true,
    show3: true,
    show4: true,
    show5: true,
  }
  this.changeCenterScreen = this.changeCenterScreen.bind(this)
  this.changeShow = this.changeShow.bind(this)
  this.establishArray = this.establishArray.bind(this)
}

changeCenterScreen(newCenter, zoom){
  let lat = newCenter.lat
  let long = newCenter.long
  this.setState({
    center: [long, lat],
    zoom: 11
   })
}

changeShow(event){
  const target = event.target;
  const value = target.checked;
  const name = target.name;

setTimeout(function() {
  this.setState({
    [name]: value
  });
}.bind(this), 1000)

  setTimeout(function() {
    this.establishArray(Cities)
  }.bind(this), 1000)
}

establishArray(array){
  let newzeroTen = []
  let newelevenTwenty = []
  let newtwentyOneThirty = []
  let newthirtyOneFourty = []
  let newfourtyOneHundred = []

  array.forEach((city) => {
    if(city.rank <= 10 && this.state.show1 === true){
      newzeroTen.push(
        {
          group: "Top Ten",
          radius: 15,
          hexCode: "#ff6d48",
          city: city.city,
          id: city.rank,
          lat: city.latitude,
          long: city.longitude
        }
      )
    }else if(city.rank <= 20 && city.rank >= 11 && this.state.show2 === true){
      newelevenTwenty.push(
        {
          group: "11-20",
          radius: 10,
          hexCode: "#70ff28",
          city: city.city,
          id: city.rank,
          lat: city.latitude,
          long: city.longitude
        }
      )
    }else if(city.rank <= 30 && city.rank >= 21 && this.state.show3 === true){
      newtwentyOneThirty.push(
        {
          group: "21-30",
          radius: 8,
          hexCode: "#5044ff",
          city: city.city,
          id: city.rank,
          lat: city.latitude,
          long: city.longitude
        }
      )
    }else if(city.rank <= 40 && city.rank >= 31 && this.state.show4 === true){
      newthirtyOneFourty.push(
        {
          group: "31-40",
          radius: 6,
          hexCode: "#f156ff",
          city: city.city,
          id: city.rank,
          lat: city.latitude,
          long: city.longitude
        }
      )
    }else if( this.state.show5 === true && city.rank >= 41  ){
      newfourtyOneHundred.push(
        {
          group: "41-1000",
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

componentDidMount(){
  this.establishArray(Cities)
}

  render() {
    let ShowArray = [ this.state.show1, this.state.show2, this.state.show3, this.state.show4, this.state.show5 ]
    let count = 0
    let mappedCheckboxes = ShowArray.map(show => {
      count++
      return(
        <CheckboxComponent
          name = { `${count}` }
          show = {"show" + `${count}`}
          checked = {show}
          changeShow = { this.changeShow }
        />
      )
    })
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
          ShowArray = { ShowArray }
        />
        <MenuContainer
          zeroTen = { this.state.zeroTen }
          elevenTwenty = { this.state.elevenTwenty }
          twentyOneThirty = { this.state.twentyOneThirty }
          thirtyOneFourty = { this.state.thirtyOneFourty }
          fourtyOneHundred = { this.state.fourtyOneHundred }
          changeCenterScreen = { this.changeCenterScreen }
          changeShow = { this.changeShow }
        />
        <form>
          {mappedCheckboxes}
        </form>
      </div>
    )
  }
}

export default App;
