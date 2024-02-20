interface ItemListProps {
  list: Array<string>;
  title: string;
}
export default function ItemsList(props: ItemListProps) {
  const { list, title } = props;
  const listItems = list.map((item, index) => <li key={index}>{item}</li>);

  return (
    <>
      <h4>{title}</h4>
      <ul>{listItems}</ul>
    </>
  );
}
