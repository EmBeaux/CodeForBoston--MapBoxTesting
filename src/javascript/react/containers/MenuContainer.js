import React, { Component } from 'react';
import { MenuItem } from 'react-bootstrap';
import  DropdownButtonComponent from '../components/DropdownButtonComponent.js';

class MenuContainer extends Component {
  constructor(props) {
  super(props);
  this.state = {

  }
  this.renderMenuItems = this.renderMenuItems.bind(this)
  this.getRandomInt = this.getRandomInt.bind(this)
}

componentDidMount(){

}

getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

renderMenuItems(array){
  let mappedArray = array.map(item => {
    let handleClick = () => {
      this.props.changeCenterScreen(item)
    }
    return(
      <MenuItem onClick={handleClick}>{item.city}</MenuItem>
    )
  })
  return(mappedArray)
}
  render() {
    let allButtons;
    if(this.props.zeroTen.length > 0 || this.props.elevenTwenty.length > 0 || this.props.twentyOneThirty.length > 0 || this.props.thirtyOneFourty.length > 0 || this.props.fourtyOneHundred.length > 0 ){
      let allCities = [this.props.zeroTen, this.props.elevenTwenty, this.props.twentyOneThirty, this.props.thirtyOneFourty, this.props.fourtyOneHundred]
      allButtons = allCities.map(cities => {
        if(cities.length > 0){
          return(
            <div>
            <DropdownButtonComponent
            renderMenuItems = {this.renderMenuItems}
            title = {cities[0].group}
            id = {cities[0].group}
            cities = {cities}
            key = {cities[0].group}
            />
            </div>
          )
        }
      })
    }
    return(
      <div>
        {allButtons}
      </div>
    )
  }
}

export default MenuContainer;
