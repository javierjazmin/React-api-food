import React from "react";
import "../assets/css/home.css";
import RecipeCard from "./RecipeCard"
import * as actions from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { diets } from "./auxiliar";
import Paginado from "./Paginado"
import SearchBar from "./SearchBar";
import Loading from "./Loading";


const Home = ()=>{
    const dispatch = useDispatch();
   
    const recipes = useSelector ((state) => state.recipes);
    console.log(recipes)

    const [currentPage,setCurrentPage]=useState(1);
    const [recipesxPage,setRecipesxPage]=useState(9);
    const indexLastRecipe = currentPage * recipesxPage;
    const indexFirstRecipe = indexLastRecipe - recipesxPage;
    const currentRecipes= recipes.slice(indexFirstRecipe,indexLastRecipe)

    const [orden, setOrden] = useState("")

    const paginado = (number)=>{
        setCurrentPage(number)
    }
   
    useEffect(() => {
         if(!recipes.length){
          dispatch(actions.getRecipes());
       }
    },[dispatch,recipes]);
    
    

    return recipes.length>0 ? ( 
        <div>
            <div>
                <SearchBar setCurrentPage={setCurrentPage} setOrden={setOrden}/>
            </div>
            
            <div className="paginadotop">
                <Paginado recipesxPage={recipesxPage} 
                recipes={recipes.length}
                paginado={paginado}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}/>
            </div>

            <div className="recipes">{currentRecipes.map(r => {return (
                <RecipeCard key={r.id} id={r.id} name={r.name} 
                diets = {r.diets.map(d=>diets(d))}
                dishtype={r.dishtype} 
                image={r.image} healthscore={r.healthscore}/>)})}
            </div>

            <div>
                <Paginado recipesxPage={recipesxPage} 
                recipes={recipes.length}
                paginado={paginado}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}/>
            </div>

        </div>
    ):(<Loading/>)

}

export default Home;