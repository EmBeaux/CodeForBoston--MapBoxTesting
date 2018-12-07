import React, { Component } from 'react';
import '../../../stylesheets/App.css';
import Cities from "../../cities.json"
import IndexPageContainer from "../containers/IndexPageContainer.js"

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    zeroTen: [],
    elevenTwenty: [],
    twentyOneThirty: [],
    thirtyOneFourty: [],
    fourtyOneHundred: []
  }
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
          id: city.rank,
          lat: city.latitude,
          long: city.longitude
        }
      )
    }else if(city.rank <= 20){
      newelevenTwenty.push(
        {
          id: city.rank,
          lat: city.latitude,
          long: city.longitude
        }
      )
    }else if(city.rank <= 30){
      newtwentyOneThirty.push(
        {
          id: city.rank,
          lat: city.latitude,
          long: city.longitude
        }
      )
    }else if(city.rank <= 40){
      newthirtyOneFourty.push(
        {
          id: city.rank,
          lat: city.latitude,
          long: city.longitude
        }
      )
    }else{
      newfourtyOneHundred.push(
        {
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
    console.log(this.state.fourtyOneHundred)
    return(
      <div className="pageWrapper">
        <IndexPageContainer
          zeroTen = {this.state.zeroTen}
          elevenTwenty = {this.state.elevenTwenty}
          twentyOneThirty = {this.state.twentyOneThirty}
          thirtyOneFourty = {this.state.thirtyOneFourty}
          fourtyOneHundred = {this.state.fourtyOneHundred}
        />
      </div>
    )
  }
}

export default App;
