import React, {Component} from 'react';

class Recipes extends Component {
    renderRecipes() {
        const RecipesElements = Recipes.map((ingredients, index) => {
            return(
                <li key={index}>{ingredients}</li>
            )
        })

        return RecipesElements;
    }

    render(){
        console.log(this.props);
        return(
            <div>
               <h1 className="secondHead">Recipes</h1>
                
            </div>
            
        )

    }
}

export default Recipes;