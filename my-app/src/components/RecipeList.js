import React, { Component } from 'react';
import RecipeItem from './RecipeItem';



class RecipeList extends Component{
  render(){
    const list = this.props.recipes.map((recipe, index)=>{
      return  (<RecipeItem
                      onDelete = {this.props.onDelete}  
                      recipe = {recipe} 
                      key={index} 
                          />)
  })

 return(
       <ul>
         {list}
       </ul>
    )
  }
}



export default RecipeList;