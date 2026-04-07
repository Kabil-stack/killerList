import "../styles.css";
function ListItem({
  item,
  handleEdit,
  handleDelete,
  setIsupdated,
  setItems,
  items = [],
}) {
  const status = item.completed;
  function handleToggle() {
    const curId = item.id;
    const updatedItem = items.map((curitem) => {
      if (curitem.id === curId) {
        return { ...curitem, completed: !curitem.completed };
      }
      return curitem;
    });
    setItems(updatedItem);
  }
  return (
    <>
      <li className="Listitems">
        <input type="checkbox" onChange={handleToggle} checked={status} />
        <span className={status ? "completed" : ""}> {item.text} </span>
        <div className="btns">
          <span onClick={() => handleDelete(item.id)}>❌</span>
          <button
            onClick={() => {
              handleEdit(item);
              setIsupdated(true);
            }}
          >
            Edit
          </button>
        </div>
      </li>
    </>
  );
}

export default ListItem;
