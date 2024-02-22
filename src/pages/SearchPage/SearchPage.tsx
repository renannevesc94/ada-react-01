import { useState } from "react";
import SearchBar from "../../components/SearchBar/SerachBar";
import dataRecipes from "../../data/dataRecipes.json";
import CardRecipe from "../../components/CardRecipe/CardRecipe";
import styles from "./style.module.scss";

export default function SearchPage() {
  const [valueSearch, setValueSearch] = useState("");

  const recipes = dataRecipes.recipes.filter(
    recipe =>
      recipe.title.toLowerCase().includes(valueSearch.toLocaleLowerCase()) ||
      recipe.category.toLowerCase().includes(valueSearch.toLocaleLowerCase())
  );

  return (
    <>
      <SearchBar value={valueSearch} setValue={setValueSearch} />
      <section className={styles.recipesList}>
        {valueSearch.length != 0 ? (
          recipes.map(recipe => <CardRecipe recipe={recipe} key={recipe.id} />)
        ) : (
          <></>
        )}
      </section>
    </>
  );
}
