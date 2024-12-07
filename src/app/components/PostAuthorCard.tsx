import Image from "next/image"
import { FaArrowUp, FaArrowDown, FaStar } from "react-icons/fa6";

interface props {
    postAuthor: author
}

interface author {
    img: string,
    username: string,
    user_upvotes: number,
    user_downvotes: number,
    user_starred: number,
    stats: string
}

const PostAuthorCard = ({postAuthor}:props) => {
  return (
    <article>
        <div>
            <Image src={postAuthor.img} height={400} width={400} alt={`${postAuthor.username}'s avatar`} />
            <div>
                <h3>{postAuthor.username}</h3>
                <div>
                    <FaArrowUp />
                    <span>{postAuthor.user_upvotes}</span>
                </div>
                <div>
                    <FaArrowDown />
                    <span>{postAuthor.user_downvotes}</span>
                </div>
                <div>
                    <FaStar />
                    <span>{postAuthor.user_starred}</span>
                </div>
            </div>
            <a href={postAuthor.stats} target="_blank">{`${postAuthor.username}'s Stats`}</a>
        </div>
    </article>
  )
}

export default PostAuthorCard
