import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import ContentFilter from "../ui/ContentFilter/ContentFilter"
import {posts} from '../../fb/database'

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
  ship_name: string,
  tags: tags,
  upvotes: number,
  downvotes: number,
  tabs: tab[];
}

const Landing = () => {
  const [content, setContent] = useState([]);

  useEffect(()=>{
    const contentArr : any = [];
    posts.forEach((doc) => {
      const data = doc.data();
      const content = {...data}
      content.id = doc.id;
      contentArr.push(content);
    });
    setContent(contentArr);
  },[])

  const updateContent = (new_content: any | {filter:string, search_value:string}):void => {

  }

  return (
    <main className="flex justify-center">
        <section className="w-4/5">
            <h1 className="text-center text-5xl mt-8">Naval Nexus</h1>
            <div className="mt-7">
                <h3 className="text-2xl font-bold">Filter and Search Options</h3>
                <ContentFilter updateContent={updateContent} content={content} />
            </div>
        </section>
    </main>
  )
}

export default Landing