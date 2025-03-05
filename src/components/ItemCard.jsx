const styles = "";

export const ItemCard = ({ item }) => {
  const { title, description, status } = item;

  const titleClass =
    title === "done"
      ? `${styles["test1"]}`
      : title === "in progress"
      ? `${styles["test2"]}`
      : title === "pending"
      ? `${styles["test3"]}`
      : "";

  const statusClass =
    status === "done"
      ? `${styles["test1"]}`
      : status === "in progress"
      ? `${styles["test2"]}`
      : status === "pending"
      ? `${styles["test3"]}`
      : "";

  return (
    <>
      <li>
        <h4 className={titleClass}>{title}</h4>
        <p>{description}</p>
        <span className={statusClass}>{status}</span>
      </li>
    </>
  );
};
