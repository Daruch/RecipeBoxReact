import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';






class RecipeItem extends Component{
  constructor(props){
    super(props);
      this.handleDelete = this.handleDelete.bind(this);
  }


  
  
  handleDelete(){
     this.props.onDelete(this.props.recipe);
  }
 
  
  
  render(){
     return(
      <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Recipe name: {this.props.recipe.recipename}</Typography>
         </ExpansionPanelSummary>
    
         <ExpansionPanelDetails>
            <Typography>
              <ul>
               <span>Ingridients:</span>
                   {this.props.recipe.ingridients.map(ingridient =>{
                       return <li key = {ingridient}>{ingridient}</li>
              })}
            </ul>
            <Button variant="subheading" color="secondary" onClick = {this.handleDelete}>Delete</Button>
            <Button variant="subheading"  color="primary" >Edit</Button>
            </Typography>
        </ExpansionPanelDetails>
     </ExpansionPanel>
    ); 
  }
}






export default RecipeItem;