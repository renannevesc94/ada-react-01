import { Link } from "react-router-dom";
import styles from "./cardRecipe.module.scss";

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
    servings?: string;
    vegetarian?: boolean;
    glutenFree?: boolean;
    videoUrl?: null | string;
  };
}
export default function CardRecipe(props: CardReceitaProps) {
  const {
    recipe: { id, title, description, image, prepTime, servings },
  } = props;

  return (
    <Link to={`/details/${id}`}>
      <div className={styles.cardRecipe}>
        <img src={image} alt="" />
        <div className={styles.contentCard}>
          <h4>{title}</h4>
          <p>{description}</p>
          <div className={styles.additionalInformation}>
            <p>⏱️{prepTime}</p>
            <p>👪{servings}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
