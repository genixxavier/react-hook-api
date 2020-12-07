import React from "react";

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <div className="content-search">
      <input
        type="text"
        value={search}
        ref={searchInput}
        onChange={handleSearch}
        placeholder="Search"
        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
      />
    </div>
  );
};

export default Search;
