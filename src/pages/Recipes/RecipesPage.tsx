import CardRecipe from "../../components/CardRecipe/CardRecipe";
import dataRecipes from "../../data/dataRecipes.json";
import styles from "./styles.module.scss";

export default function RecipesPage() {
  return (
    <>
      <section className={styles.sectionRecipes}>
        {dataRecipes.recipes.map(recipe => (
          <CardRecipe key={recipe.id} recipe={recipe} />
        ))}
      </section>
    </>
  );
}
