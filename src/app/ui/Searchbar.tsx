import { strict } from "assert"
import React, { useState } from "react"

const searchFilters = {
    name: "Search options",
    options: ["author", "ship", "post", "liked", "saved"]
}

interface searchParams {
  filter: string,
  searchValue: string
}

interface props {
  handleSearch: (searchParams:searchParams) => void
}

const Searchbar = ({handleSearch}:props) => {
  const [searchFilter, setSearchFilter] = useState("post");
  const [searchValue, setSearchValue] = useState("");
  const handleSearchFilter = (e:React.ChangeEvent<HTMLInputElement>):void => {
    setSearchFilter(e.target.value);
  }
  const handleSearchValue = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setSearchValue(e.target.value);
  }
  const updateSearchFilters = () => {
    handleSearch({
      filter: searchFilter,
      searchValue
    })
  }

  return (
    <div>
      <input type="text" onChange={handleSearchFilter} placeholder="Search..." />
      <select onChange={handleSearchValue}>
        <option value="">{searchFilters.name}</option>
        {searchFilters.options.map(filt => <option value={filt} >{filt}</option>)}
      </select>
    </div>
  )
}

export default Searchbar