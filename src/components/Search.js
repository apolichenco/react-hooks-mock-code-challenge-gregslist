import React, {useState} from "react";

function Search({onSearch}) {
  const [searchedTerm, setSearchedTerm] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(searchedTerm);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchedTerm}
        onChange={(e) => setSearchedTerm(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
