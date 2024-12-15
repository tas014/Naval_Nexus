import { useState } from "react"
import styles from './Pagination.module.css'

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
    paginate: (current_ind:number) => void,
    content: article[],
    limit: number,
}

const Pagination = ({paginate, content, limit}:props) => {
    const [pages, setPages] = useState([1,2,3,4,5]);
    const [lastSelected, setLastSelected] = useState(1);
    const articles_per_page = 6;
    const btn_styles = "rounded-full h-8 w-8 mr-2 border-solid bg-gray-700"
    
    const updatePages = (e: any):void => {
        const selectedPage = parseInt(e.target.getAttribute('key'));
        const currentPages = [...pages];
        const loopStartValue = selectedPage-2;
        for (let i=0; i<limit; i++) {
            currentPages[i] = loopStartValue+i
        }
        setPages(currentPages);
        setLastSelected(selectedPage);
        paginate(selectedPage);
    }

    const isAbbreviated = (ind:number):number|string => {
        let output:number|string;
        switch (ind) {
            case pages[limit]:
                Math.ceil(content.length/articles_per_page) > pages[limit] ? output = ".." : output = ind;                    
                break;
            
            case pages[0]:
                ind > 1 ? ".." : ind 
        
            default:
                output = ind;
                break;
        }
        return output
    }

  return (
    <div>
        <ul className="flex justify-center content-center mt-5">
            {pages.map(page_ind => <button className={page_ind === lastSelected ? `${styles.selected} ${btn_styles}` : btn_styles} key={page_ind} onClick={updatePages} >{isAbbreviated(page_ind)}</button>)}
        </ul>
    </div>
  )
}

export default Pagination