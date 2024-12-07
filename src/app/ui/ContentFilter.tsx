import Filter from "./Filter"
import { useState } from "react"
import Searchbar from "./Searchbar"
import PostCard from "../components/PostCard"
import Pagination from "./Pagination"

const filters = [{
    name: "class",
    options: ["Destroyer", "Battleship", "Cruiser", "Submarine", "Aircraft Carrier"]
}, {
    name: "tier",
    options: ["I","II","III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]
}, {
    name: "nation",
    options: ["United States", "Japan", "France", "Germany", "The Netherlands", "Pan-European", "Pan-Asian", "Pan-American", "USSR", "UK", "Italy", "Spain", "Commonwealth"]
}, {
    name: "type",
    options: ["Tech Tree", "Premium", "Special", "Tech Tree"]
}]

interface tags {
    tier: string,
    nation: string,
    class: string,
    type: string
}

interface tab {
    title: string,
    content: string
}

interface article {
    id: string,
    title: string,
    author: string,
    description: string,
    tags: tags,
    upvotes: number,
    downvotes: number,
    tabs: tab[];
}

interface props {
    updateContent: (new_content:article[] | {filter:string, search_value:string}) => void,
    content: article[]
}

const ContentFilter = ({updateContent, content}:props) => {
    const handleFilters = (e:React.ChangeEvent<HTMLSelectElement>):void => {
        console.log(e);
    }

    const handleSearch = (searchParams:{filter:string, searchValue: string}) : void => {
        console.log(searchParams);
    }

    const paginate = (current_ind:number) => {
        
    }

  return (
    <div>
        <h3>Filter Options</h3>
        <div>
            {filters.map(filt => <Filter key={filt.name} options={filt.options} category={filt.name} handleFilter={handleFilters} />)}
            <Searchbar handleSearch={handleSearch} />
        </div>
        <div>
            {content.map(art => <PostCard key={art.id} art={art} />)}
        </div>
        <Pagination paginate={paginate} limit={5} content={content} />
    </div>
  )
}

export default ContentFilter