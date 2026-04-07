import ListItem from "./ListItem";
import "../styles.css";
function Lists({
  items,
  setItems,
  handleEdit,
  handleDelete,
  setIsupdated,
  filterList = [],
}) {
  return (
    <div>
      <ul>
        {filterList.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            setItems={setItems}
            items={items}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            setIsupdated={setIsupdated}
            filterList={filterList}
          />
        ))}
      </ul>
    </div>
  );
}

export default Lists;
