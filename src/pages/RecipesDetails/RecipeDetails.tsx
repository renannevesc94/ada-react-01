import { useParams } from "react-router-dom";
import dataRecipes from "../../data/dataRecipes.json";
import ItemsList from "../../components/ItemList/ItemsList";
import style from "./style.module.scss";

export default function RecipeDetails() {
  const { recipeId: id } = useParams();
  const recipe = dataRecipes.recipes.filter(recipe => recipe.id === Number(id))[0];

  return (
    <>
      <section className={style.containerDetails}>
        {recipe.videoUrl ? (
          <iframe
            width="560"
            height="315"
            src={recipe.videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        ) : (
          <img src={recipe.image} alt="" />
        )}
        <div className={style.topTitle}>
          <h1>Receita de {recipe.title}</h1>
          <div className={style.recipeIfo}>
            {recipe.vegetarian ? <span>Vegetariana</span> : <></>}
            {recipe.glutenFree ? <span>Sem glutem</span> : <></>}
            <h4>{recipe.servings}</h4>
            <h4>{recipe.prepTime}</h4>
          </div>
          <p>{recipe.description}</p>
          <div className={style.ingredients}>
            <ItemsList list={recipe.ingredients} title={"Ingredientes"} />
          </div>
        </div>
      </section>

      <section className={style.secondSection}>
        <div>
          <ItemsList list={recipe.instructions} title={"Passo a Passo"} />
        </div>
      </section>
    </>
  );
}
