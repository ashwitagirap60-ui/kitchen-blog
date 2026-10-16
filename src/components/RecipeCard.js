import {useState} from "react";

function RecipeCard(props){

    const [recipeVisible, setRecipeVisible]= useState(false);
    function handleClick()
    {
        setRecipeVisible(!recipeVisible);
    }


    return(
        <div className="recipe-card">
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        {recipeVisible && <p className="recipe-details">{props.recipe}</p>}
        <button onClick={handleClick}>{recipeVisible ? "Hide Recipe" : "View Recipe"}</button>
        </div>
    );
}
export default RecipeCard;