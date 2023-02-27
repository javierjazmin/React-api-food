import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/recipeCard.css"
import { disht } from "./auxiliar";

const RecipeCard = ({id,name,dishtype,diets,image,healthscore})=>{

    return (
      <Link className="a" to={`/recipes/${id}`}>
        <div className="card">
          <h3>{name}</h3>
          <img className="image" src={image? image : "https://img.freepik.com/vector-gratis/olla-cazuela_1284-11444.jpg?w=740&t=st=1668719338~exp=1668719938~hmac=08ec1c85bb731395f407f96b61afc89dbf80fd5b926444f7baf305c78bec6719"} alt={name}></img>
          <p className="p"><strong>DishTypes: </strong>{dishtype && disht(dishtype)? dishtype : dishtype.map(d=>d[0].toUpperCase() + d.slice(1) + ". ")}</p>
          <p className="p"><strong>Diets: </strong>{diets.map(d=>d[0].toUpperCase() + d.slice(1) + ". ")}</p> 
          <p className="p"><strong>HealthScore: </strong>{healthscore}</p>
        </div>
      </Link>
    )

}

export default RecipeCard;