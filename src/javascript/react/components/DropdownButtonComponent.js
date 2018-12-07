import React, { Component } from 'react';
import { DropdownButton } from 'react-bootstrap';

class DropdownButtonComponent extends Component {
  constructor(props) {
  super(props);
  this.state = {

  }
}

componentDidMount(){

}

  render() {
    let menuItems = this.props.renderMenuItems(this.props.cities)
    return(
      <div>
        <DropdownButton
          bsStyle="default"
          title={this.props.title}
          key={this.props.id}
          id={`dropdown-basic-1`}
        >
          {menuItems}
        </DropdownButton>
      </div>
    )
  }
}

export default DropdownButtonComponent;
