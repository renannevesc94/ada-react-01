import { Link } from "react-router-dom";

interface CardReceitaProps {
  recipe: {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    ingredients: Array<string>;
    instructions: Array<string>;
    prepTime: string;
    servings: string;
    vegetarian: boolean;
    glutenFree: boolean;
    videoUrl: null | string;
  };
}
export default function CardRecipe(props: CardReceitaProps) {
  const {
    recipe: {
      id,
      title,
      description,
      category,
      image,
      ingredients,
      instructions,
      prepTime,
      servings,
      vegetarian,
      glutenFree,
      videoUrl,
    },
  } = props;

  console.log(
    category,

    ingredients,
    instructions,
    prepTime,
    servings,
    vegetarian,
    glutenFree,
    videoUrl
  );
  return (
    <Link to={`/details/${id}`}>
      <div className="card-receita">
        <img src={image} alt="" />
        <div className="content-card">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="additional-information">
            <p>⏱️{prepTime}</p>
            <p>👪{servings}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
