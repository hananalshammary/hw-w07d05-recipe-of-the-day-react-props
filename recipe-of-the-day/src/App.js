import React, { Component } from 'react';
import RecipeOfTheDay from './components/RecipeOfTheDay';
import Ingredient from './components/Ingredient';
import Recipes from './components/Recipes';
import Recipe from './components/Recipe';





import './App.css';





class App extends Component {
  render() {
    console.log('he');
    return (
      <div className="App">
      
    
      
      
      <RecipeOfTheDay />
      <Ingredient />
      <Recipes />
      <Recipe />
    
 
     
    
     
      
      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import './App.css';
// import RecipeOfTheDay from './RecipeOfTheDay';
// import Ingredient from './Ingredient';



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
      
//       <h1>Hello</h1>

//       <RecipeOfTheDay />
//       <Ingredient />
     
      
//       </div>
//     );
//   }
// }

// export default App;
