import React from 'react';
import ingredients from '../data/recipeOfTheDay';

const Ingredient = (props) => {
    const post= props.post
    console.log(post)

    return (
        <div>
        
        <p>{ingredients.amount} </p>
            <ingredients {...props} />
            
            </div>
        
    )
}

export default Ingredient;