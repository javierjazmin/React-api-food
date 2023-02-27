import '../assets/css/app.css';
import {Route} from "react-router-dom"; //switch es para paginado? brouserrouter aca? o en index??
import React from "react";
import LandingPage from './LandingPage';
import Home from './Home';
import RecipeDetail from './RecipeDetail';
import CreateRecipe from './CreateRecipe';

function App() {
  return (
    <div className="App">
      
      <Route exact path="/" component={LandingPage}/>
      <Route path="/home" component={Home}/>
      <Route path="/recipes/:id" component={RecipeDetail}/>
      <Route path="/create" component={CreateRecipe}/>
      
    </div>
  );
}

export default App;