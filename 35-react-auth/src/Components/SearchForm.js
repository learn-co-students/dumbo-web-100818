import React from "react";

const SearchForm = props => {
  return (
    <form>
      <input
        type="text"
        placeholder="search by name"
        value={props.searchTerm}
        onChange={props.changeHandler}
      />
    </form>
  );
};

export default SearchForm;
