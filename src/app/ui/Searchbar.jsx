import { strict } from "assert"
import React, { useState } from "react"

const searchFilters = {
  name: "Search options",
  options: ["Author", "Ship", "Name"]
}

const Searchbar = ({ handleSearch }) => {
  const updateSearchParams = e => {
    const searchParams = {
      filter: document.getElementById('SearchFilter').value,
      search_value: document.getElementById('SearchBar').value
    }
    handleSearch(searchParams);
  }


  return (
    <div className="flex content-end flex-wrap">
      <input id="SearchBar" className="rounded-xl mr-2 p-1" type="text" onChange={updateSearchParams} placeholder="Search..." />
      <select id="SearchFilter" className="rounded" onChange={updateSearchParams}>
        <option value="">None</option>
        <option value="title">Post Name</option>
        <option value="author">Author</option>
        <option value="ship_name">Ship Name</option>
      </select>
    </div>
  )
}

export default Searchbar