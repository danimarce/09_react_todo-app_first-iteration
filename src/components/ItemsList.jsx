import { ItemCard } from "./ItemCard";

export const ItemsList = ({ itemsList }) => {
  return (
    <ul>
      {itemsList.map((item) => {
        const { uuid } = item;

        return <ItemCard key={uuid} item={item} />;
      })}
    </ul>
  );
};
