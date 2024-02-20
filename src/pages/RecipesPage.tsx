import CardRecipe from "../components/CardRecipe/CardRecipe";
import dataRecipes from "../data/dataRecipes.json";

export default function RecipesPage() {
  return (
    <div className="container-recipes">
      {dataRecipes.recipes.map(receita => (
        <CardRecipe key={receita.id} recipe={receita} />
      ))}
    </div>
  );
}
