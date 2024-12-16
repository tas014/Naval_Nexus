import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import Link from "next/link";

/*type tag = 'tier' | 'nation' | 'class' | 'type';
type tagType = Record<tag, string>

interface tags {
    tier: string,
    nation: string,
    class: string,
    type: string
}*/

interface tab {
    title: string,
    content: string
}

interface article {
    id: string,
    title: string,
    author: string,
    description: string,
    tags: any, // fix later
    upvotes: number,
    downvotes: number,
    tabs: tab[];
}

interface props {
    art: article
}

const PostCard = ({art}:props) => {
  return (
    <Link className="w-1/3 mb-10 h-fit" href={`/post/${art.id}`}>
        <article className="flex flex-col p-3 content-center flex-wrap rounded-xl bg-gray-600 m-3 mt-3 h-fit">
            <div className="flex flex-col justify-center content-center justify-center w-5/6 flex-wrap">
                <h3 className="text-2xl font-bold text-center">{art.title}</h3>
                <p className="mt-2 text-center">{art.description}</p>
                <div className="flex w-full justify-center mt-5">
                    <div className="flex mr-8 justify-center content-center flex-wrap">
                        <span className="text-4xl w-12 h-12 font-bold self-center pt-1 text-center border-solid border-2 border-slate-900 rounded-full w-100 h-100">
                            {art.author[0].toUpperCase()}
                        </span>
                    </div>
                    <div className="flex flex-wrap flex-col content-center justify-center">
                        <h5 className="text-center text-xl">{art.author}</h5>
                        <div className="flex justify-center content-center mt-2">
                            <div className="flex mr-2">
                                <FaArrowUp />
                                <span aria-description="Upvote Amount">{art.upvotes}</span>
                            </div>
                            <div className="flex ml-2">
                                <FaArrowDown />
                                <span aria-description="Downvote Amount">{art.downvotes}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="flex text-xs flex-wrap justify-center self-center mt-3">
                {Object.keys(art.tags).map((key, ind) => <li className="mr-1 pr-3 pl-3 pt-1 pb-1 mt-1 bg-gray-300 rounded-xl text-black" key={ind}>{art.tags[key]}</li>)}
            </ul>
        </article>
    </Link>
  )
}

export default PostCard