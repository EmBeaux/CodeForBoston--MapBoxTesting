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
    let count = 0
    if(this.props.zeroTen["Top Ten!"].length > 0){
      let allCities = [this.props.zeroTen["Top Ten!"], this.props.elevenTwenty["Eleven Through Twenty"], this.props.twentyOneThirty["Twenty-One Through Thirty"], this.props.thirtyOneFourty["Thirty-One Through Fourty"], this.props.fourtyOneHundred["The Rest!"]]
      allButtons = allCities.map(cities => {
        
        return(
          <DropdownButtonComponent
            renderMenuItems = {this.renderMenuItems}
            title = "Baddabing"
            id = {this.getRandomInt(100000)}
            cities = {cities}
          />
        )
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
