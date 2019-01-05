import React, {Component} from 'react';

import recipeOfTheDay from '../data/recipeOfTheDay';
// import Ingredient from './Ingredient';

class RecipeOfTheDay extends Component {

    renderIngredients(){
       return(
        recipeOfTheDay.ingredients.map((post, index) => (
            <p className="border">{post.ingredient} - {post.amount}</p>
        ))
       )
       
    }

    render(){
        return (
            <div className="firstHead">
               <div className="firstPart"><h1 >Recipe of the Day</h1>
                <h1>{recipeOfTheDay.name}</h1></div>
            <div className="secondPart">
                <h4>Description:</h4>
                <p>{recipeOfTheDay.description}</p>
               
                <h4 >Ingredients:</h4>
                {this.renderIngredients()}
                </div>
            </div>
            
        )
    }
}

export default RecipeOfTheDay;