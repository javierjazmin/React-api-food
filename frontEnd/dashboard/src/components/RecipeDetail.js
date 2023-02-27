import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as actions from "../actions"
import { Link } from "react-router-dom";
import Loading from "./Loading";
import "../assets/css/recipeDetail.css"
import { disht , diets_detail} from "./auxiliar";

function RecipeDetail(props){

    const dispatch = useDispatch();
    const id = props.match.params.id;
  
  
    useEffect(()=>{
        dispatch(actions.getRecipeDetail(id))
        return () => {
        dispatch(actions.clearDetail());
        };
      },[dispatch,id]
      )

    const detail = useSelector ((state) => state.recipeDetail);
    //console.log(detail)

    return detail.summary?(
      <div className="detail">
        <div className="header">
          <Link className="back" to="/home">
            <button className="btnback">Back to Home</button>
          </Link>
          <h1>{detail.name}</h1>
        </div>
        <div>
          <div className="imagenytexto">
            <div>
              <img className="imagen" src={detail.image? detail.image : "https://img.freepik.com/vector-gratis/olla-cazuela_1284-11444.jpg?w=740&t=st=1668719338~exp=1668719938~hmac=08ec1c85bb731395f407f96b61afc89dbf80fd5b926444f7baf305c78bec6719"} alt={detail.name}/>
            </div>
            <div>
              <h4><u>Dish Type:</u>  {disht(detail.dishtype)? detail.dishtype : detail.dishtype.map(d=>d[0].toUpperCase() + d.slice(1) + ". ")}</h4>
              <h4><u>HealthScore:</u> {detail.healthscore}</h4>
              <h4><u>Diets:</u>  {detail.diets.map(d=>diets_detail(d)[0].toUpperCase() + diets_detail(d).slice(1) + ". ")}</h4>
              <h4><u>Summary:</u></h4>
              <h6 className="summary">{detail.summary && detail.summary.replace(/<[^>]+>/g, "")}</h6>
            </div>
          </div>
          <h3><u>Steps:</u></h3>
          <div className="steps">{detail.steps && typeof detail.steps === "string"? detail.steps:
                detail.steps && detail.steps.map(i=>(
                  <p key={i.number}><strong>STEP {i.number} :</strong> {i.step}</p>
                  ))}
          </div>
        </div>
      </div>    
    ) :(<Loading/>)
        
    
}

export default RecipeDetail