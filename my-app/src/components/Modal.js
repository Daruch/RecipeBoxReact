import React, { Component } from 'react';




class Modal extends Component{
   constructor(props){
     super(props);
    
     this.handleChange = this.handleChange.bind(this); 
     this.handleSubmit = this.handleSubmit.bind(this);
    // this.saveRecipe = this.saveRecipe.bind(this);
   }
  
  /* saveRecipe(){
      this.props.saveRecipe();
   }*/
   
   handleChange(value){
     this.props.onChange(value);
   }

   handleSubmit(e){
     e.preventDefault();
   }


  render(){
   const {newRecipe, saveRecipe} = this.props;
   
    
   if (!this.props.show){
      return null;
    }
    
    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      width: 300,
      height: 300,
      margin: '0 auto',
      padding: 10,
      border:"1px solid grey",
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)'
     
    };

    return(
    <div style = {modalStyle}>
     <form onSubmit = {this.handleSubmit}>
       <label>Recipe Name</label>
         <input
           value = {newRecipe.recipename}
           onChange = {event=>this.handleChange(event.target.value, newRecipe.recipename)}
           type = 'text' 
           placeholder = "Enter Text" />
       <label>Ingridients</label>
         <input 
            value = {newRecipe.ingridients}
            type = 'text'
            onChange = {event=>this.handleChange(event.target.value.split(','), newRecipe.ingridients)}
            type = 'text'
            placeholder = "Enter Text" />
       <button type = "button" onClick = {saveRecipe}>Add recipes</button>
       <button type = "button" onClick = {this.onClose}>Close</button>
     </form>
    </div>
    )
  }
}




export default Modal;