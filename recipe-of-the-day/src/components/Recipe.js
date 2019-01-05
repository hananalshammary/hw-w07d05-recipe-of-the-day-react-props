import React, {Component} from 'react';
import recipes from '../data/recipes';

class Recipe extends Component {
    renderIngredients(){
        return(
            recipes.map((post, index) => (
               
                <div className="threePart"> 
                    <p>Name:{post.name}</p> 
                    <p>Servings: {post.servings} </p>
                    <p>Category:{post.category}</p>
                    <br></br>
                </div>
              
            
             
             
         ))
        )
        
     }
    render(){
        console.log('kkk');
        return(
            <div>
                
               {this.renderIngredients()}
            </div>
        )
    }
}

export default Recipe ;