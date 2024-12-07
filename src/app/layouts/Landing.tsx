import { useState, useEffect } from "react"
import ContentFilter from "../ui/ContentFilter"

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

interface content {
  id: string,
  title: string,
  author: string,
  description: string,
  tags: tags,
  upvotes: number,
  downvotes: number,
  tabs: tab[];
}

const Landing = () => {
  const [content, setContent] = useState([]);

  const updateContent = (new_content: content[] | {filter:string, search_value:string}):void => {

  }

  return (
    <main>
        <section>
            <h1>Naval Nexus</h1>
            <div>
                <strong>Filter and Search Options</strong>
                <ContentFilter updateContent={updateContent} content={content} />
            </div>
        </section>
    </main>
  )
}

export default Landing