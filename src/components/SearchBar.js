function SearchBar({ setSearchValue, searchValue, search }) {
  return (
    <>
      <div>
        <input
          placeholder="Search target..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="searchName"
        />
        {searchValue.length > 0 && (
          <ul>
            {search.map((item) => (
              <li key={item.id} className="list">
                {item.text}{" "}
                <i className="emoji">{item.completed ? "☠️" : "😑"}</i>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default SearchBar;
