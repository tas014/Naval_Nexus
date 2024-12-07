import Image from "next/image"
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";

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
    <article>
        <ul>
            {Object.keys(art.tags).map((key, ind) => <li key={ind}>{art.tags[key]}</li>)}
        </ul>
        <div>
            <h3>{art.title}</h3>
            <p>{art.description}</p>
            <div>
                <Image 
                    src="https://fastly.picsum.photos/id/483/200/200.jpg?hmac=tIKQEdwuW7trzVGWGE-cAgtpmRJla51INgO9dvJG3hA"
                    width={200}
                    height={200}
                    alt="Default user image"
                />
                <div>
                    <h5>{art.author}</h5>
                    <div>
                        <FaArrowUp />
                        <span aria-description="Upvote Amount">{art.upvotes}</span>
                    </div>
                    <div>
                        <FaArrowDown />
                        <span aria-description="Downvote Amount">{art.downvotes}</span>
                    </div>
                </div>
            </div>
        </div>
    </article>
  )
}

export default PostCard