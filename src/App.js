import { useEffect, useState } from "react";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import Lists from "./components/Lists";
import Filter from "./components/Filter";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("data");
    return saved ? JSON.parse(saved) : [];
  });
  const [inputValue, setInputValue] = useState("");
  const [isupdated, setIsupdated] = useState(false);
  const [editId, setEditId] = useState(0);
  const [filterList, setFilterList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(
    function () {
      localStorage.setItem("data", JSON.stringify(items));
    },
    [items, setItems],
  );

  const search = items.filter((item) =>
    item.text.toLowerCase().includes(searchValue.toLowerCase()),
  );

  function handleAddItems() {
    if (inputValue === "") {
      alert("Inputbox cannot be empty");
      return;
    }

    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: inputValue,
        completed: false,
      },
    ]);
    setInputValue("");
  }
  function handleDelete(id) {
    const updatedList = items.filter((item) => item.id !== id);
    setItems(updatedList);
    if (items.length === 1) {
      setFilterList([]);
    }
  }
  function handleEdit(item) {
    setInputValue(item.text);
    setEditId(item.id);
  }
  function handleUpdation() {
    if (inputValue.trim() === "") return;
    const updateditems = items.map((item) => {
      if (item.id === editId) {
        return (item = {
          id: Date.now(),
          text: inputValue,
          completed: false,
        });
      }
      return item;
    });

    setItems(updateditems);
    setInputValue("");
    setIsupdated(false);
  }
  return (
    <div className="App">
      <div className="todo">
        <Header />
        <div className="intodo">
          <InputBox
            setInputValue={setInputValue}
            inputValue={inputValue}
            handleAddItems={handleAddItems}
            isupdated={isupdated}
            handleUpdation={handleUpdation}
          />
          {items.length > 0 && (
            <Filter items={items} setFilterList={setFilterList} />
          )}
        </div>
        {items.length > 0 && (
          <SearchBar
            setSearchValue={setSearchValue}
            searchValue={searchValue}
            search={search}
          />
        )}
        {searchValue === "" && (
          <Lists
            items={items}
            setItems={setItems}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            setIsupdated={setIsupdated}
            filterList={filterList}
          />
        )}
        {items.length > 0 ? (
          <button
            className="clearbtn"
            onClick={() => {
              localStorage.removeItem("data");
              setItems([]);
              setFilterList([]);
            }}
          >
            Clear All
          </button>
        ) : null}
      </div>
    </div>
  );
}
