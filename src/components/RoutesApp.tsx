import { Route, Routes } from "react-router-dom";
import RecipesPage from "../pages/RecipesPage";
import RecipeDetails from "../pages/RecipeDetails";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<RecipesPage />}></Route>
      <Route path="/details/:recipeId/" element={<RecipeDetails />}></Route>
    </Routes>
  );
}
