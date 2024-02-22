import style from "./style.module.scss";

interface SearchBarProps {
  value: string;
  setValue: (newValue: string) => void;
}

export default function SearchBar(props: SearchBarProps) {
  const { value, setValue } = props;
  return (
    <section className={style.sectionSearch}>
      <label htmlFor="imputSearch">
        {" "}
        <input
          name="imputSearch"
          id="imputSearch"
          type="text"
          placeholder="Buscar receita"
          value={value}
          onChange={event => {
            setValue(event.target.value);
          }}
        />
      </label>
    </section>
  );
}
