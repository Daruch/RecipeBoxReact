import React, { Component } from 'react';
import './App.css';
import RecipeList from "./components/RecipeList";
import Modal from "./components/Modal";
import Button from '@material-ui/core/Button';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
       {recipename:'Soup', ingridients:['meet','carrot', 'butter']},
       {recipename:'Soup', ingridients:['meet','carrot', 'butter']},
       {recipename:'Soup', ingridients:['meet','carrot', 'butter']},
       {recipename:'Soup', ingridients:['meet','carrot', 'butter']},
      ],
      modalIsOpen: false,
      newRecipe: {recipename:'', ingridients:[]}
    };

    this.onDelete = this.onDelete.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.newRecipeUpdate = this.newRecipeUpdate.bind(this);
    this.saveNewRecipe = this.saveNewRecipe.bind(this);
    
  }

 //add new recipe
 saveNewRecipe(newRecipe){
    let recipes = this.state.recipes.slice();
    recipes.push({recipename:this.state.newRecipe.recipename, ingridients:this.state.newRecipe.ingridients});
    this.setState({recipes});
    this.setState({recipename:'', ingridients:[]}) 
 }

 
//update new recipe item from the modal
newRecipeUpdate(event){
  this.setState({newRecipe: {
    recipename:this.state.recipename,
    ingridients:this.state.ingridients,
  } });
  };             

 

  
// this.setState({newRecipe:{recipename:recipename,ingridients:ingridients}});
//  handleDelete(id)   this.setState(prevState => ({data: prevState.data.filter(el => el != id )}));}

onDelete(index){
  let recipes = this.state.recipes.slice();
  recipes.splice(index, 1);
  this.setState({recipes});
 }
  
  
toggleModal = () => {
   this.setState({
         modalIsOpen: !this.state.modalIsOpen
      });

}

  render() {   
    const {recipes, newRecipe} = this.state;
  
   
  return (
      <div>
      {recipes.length>0 && (
        <div>
         <RecipeList  
             recipes = {recipes} 
             onDelete = {this.onDelete}  
             showModal = {this.toggleModal}
               />
         <Modal 
            show = {this.state.modalIsOpen} 
            newRecipe = {newRecipe} 
            onChange = {this.newRecipeUpdate}
            saveRecipe = {this.saveNewRecipe}
           />
        <Button  variant="raised" color = "primary" onClick = {this.toggleModal}>Add recipe</Button>
       </div>    
    )}    
    </div>
    );
  }
}


    
export default App;
