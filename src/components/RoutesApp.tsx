import { Route, Routes } from "react-router-dom";
import RecipesPage from "../pages/Recipes/RecipesPage";
import RecipeDetails from "../pages/RecipesDetails/RecipeDetails";
import SearchPage from "../pages/SearchPage/SearchPage";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<RecipesPage />}></Route>
      <Route path="/details/:recipeId/" element={<RecipeDetails />}></Route>
      <Route path="/search" element={<SearchPage />}>
        {" "}
      </Route>
    </Routes>
  );
}
