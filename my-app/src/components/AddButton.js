import React, { Component } from 'react';
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar";
import Button from 'react-bootstrap/lib/Button';

class AddButton extends Component{
  render(){
    return(
      <Button bsStyle ="info">Add New Recipe</Button>
    )
  }
}


export default AddButton;