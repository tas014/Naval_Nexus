import Filter from "../Filter"
import Searchbar from "../Searchbar"
import PostCard from "../../components/PostCard"
import Pagination from "../Pagination/Pagination"
import styles from './ContentFilter.module.css'

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
    updateContent: (new_content:article[] | {filter:string, search_value:string, filterName:string}) => void,
    content: article[]
}

const ContentFilter = ({updateContent, content}:props) => {
    let timeoutID: string | number | NodeJS.Timeout | undefined = "";
    const handleFilters = (e:React.ChangeEvent<HTMLSelectElement>):void => {
        const filterValue = {
            filter: e.target.value,
            search_value: "",
            filterName: e.target.name
        }
        updateContent(filterValue)
    }

    const handleSearch = (searchParams:{filter:string, search_value: string, filterName:string}) : void => {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(()=>{
            searchParams.filterName = "";
            updateContent(searchParams)
        },500)
    }

    /* const paginate = (current_ind:number) => {
        
    } */

  return (
    <section>
        <div className="mt-5 flex justify-between">
            <div>
                {filters.map((filt, key) => <Filter key={key} options={filt.options} category={filt.name} handleFilter={handleFilters} />)}
            </div>
            <Searchbar handleSearch={handleSearch} />
        </div>
        <div className={`${styles.content} bg-gray-800 flex h-fit p-10`} >
            {content.map(art => <PostCard key={art.id} art={art} />)}
        </div>
        {/* <Pagination paginate={paginate} limit={5} content={content} /> */}
    </section>
  )
}

export default ContentFilter