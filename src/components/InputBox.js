function InputBox({
  setInputValue,
  inputValue,
  setIsEdited,
  isupdated,
  handleAddItems,
  handleUpdation,
}) {
  return (
    <div className="inputBox">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add someone..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddItems();
          }
        }}
      />
      {!isupdated ? <button onClick={handleAddItems}>Add</button> : null}
      {isupdated ? (
        <button
          onClick={() => {
            setIsEdited(true);
            handleUpdation();
          }}
        >
          Update
        </button>
      ) : null}
    </div>
  );
}

export default InputBox;
