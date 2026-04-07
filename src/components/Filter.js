import { useEffect, useState } from "react";

function Filter({ items, setFilterList }) {
  const [selected, setSelected] = useState("All");

  useEffect(
    function () {
      switch (selected) {
        case "All":
          setFilterList(items);
          break;
        case "completed":
          setFilterList(items.filter((item) => item.completed));

          break;
        case "sort":
          const newList = [...items].sort((a, b) =>
            a.text.localeCompare(b.text),
          );
          setFilterList(newList);
          break;
        default:
          break;
      }
    },
    [selected, items, setFilterList],
  );

  return (
    <div className="Fillter">
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="dropdown"
      >
        <option value="All">All</option>
        <option value="completed">Completed</option>
        <option value="sort">Sort</option>
      </select>
    </div>
  );
}

export default Filter;
