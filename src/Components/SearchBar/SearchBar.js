import React from "react";
import "./SearchBar.scss";

export default function SearchBar({ value, setValue }) {
  const handleSearch = (e) => {
    let value = e.target.value;

    if (!value) return setValue("");

    setValue(value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} role="search" className="form">
      <input
        type="search"
        placeholder="Search.."
        value={value}
        onChange={handleSearch}
      />
    </form>
  );
}
