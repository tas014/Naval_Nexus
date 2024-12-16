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
    <Link className="hover:bg-slate-200 hover:text-slate-800 h-fit m-2  min-h-25 p-3 content-center justify-center flex-wrap rounded-xl border-solid border-2 border-slate-300 mt-3 h-fit h-full flex post-card-container" href={`/post/${art.id}`}>
        <article className="flex flex-col content-center justify-center flex-wrap flex">
            <div className="flex flex-col justify-center content-center justify-center flex-wrap p-4 w-9/10">
                <h3 className="lg:text-2xl md:text-1xl sm:text-xl font-bold text-center">{art.title}</h3>
                <p className="mt-2 text-center">{art.description}</p>
                <div className="flex w-full justify-center mt-5 text-slate-200  border-solid border-2 border-slate-800 rounded-xl p-3 bg-slate-700">
                    <div className="flex pr-3 justify-center content-center flex-wrap">
                        <span className="xl:text-4xl lg:text-3xl md:text-2xl w-12 h-12 align-middle font-bold self-center xl:pt-1 lg:pt-1 md:pt-2 sm:pt-3 pt-3 text-center border-solid border-2 border-slate-200 rounded-full w-100 h-100">
                            {art.author[0].toUpperCase()}
                        </span>
                    </div>
                    <div className="flex flex-wrap flex-col content-center justify-center">
                        <h5 className="text-center xl:text-xl lg:text-l md:text-m font-bold">{art.author}</h5>
                        <div className="flex justify-center content-center mt-2">
                            <div className="flex mr-2">
                                <FaArrowUp className="text-orange-400 font-bold text-xl mr-2" />
                                <span aria-description="Upvote Amount">{art.upvotes}</span>
                            </div>
                            <div className="flex ml-2">
                                <FaArrowDown className="text-blue-400 font-bold text-xl mr-2" />
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