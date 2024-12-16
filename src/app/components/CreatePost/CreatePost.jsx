import { useState } from "react"
import PostAttributes from "./PostAttributes"
import PostContent from './PostContent'
import { createPost } from "@/fb/database"

const CreatePost = () => {
    const [postAttributes, setPostAttributes] = useState({});
    const [canEdit, setCanEdit] = useState(false);
    const createPostAttributes = () => {
        setCanEdit(true);
        const tags = document.querySelectorAll('#filter_list select');
        const title = document.getElementById('post_title')?.value;
        const description = document.getElementById('post_description')?.value;
        const author = document.getElementById('post_author')?.value;
        const ship_name = document.getElementById('post_ship')?.value;
        const tagsData = {
            class: tags[0].value,
            tier: tags[1].value,
            nation: tags[2].value,
            type: tags[3].value
        }
        const newPostData = {
            author,
            title,
            description,
            ship_name,
            tags: tagsData,
            upvotes: 0,
            downvotes: 0
        }
        setPostAttributes(newPostData);
    }
    const createPostContent = content => {
        const postData = { ...postAttributes };
        postData.tabs = content;
        setPostAttributes(postData);
        createPost(postData);
    }
    return (
        <section className="w-4/5 mt-20 m-auto flex flex-col justify-center h-full">
            <h1 className="text-3xl font-bold mb-5">Create Post</h1>
            <div className="bg-gray-300 min-h-70 flex justify-center align-center flex-wrap">
                {canEdit ? <PostContent setContent={createPostContent} /> : <PostAttributes setPostAttributes={createPostAttributes} />}
            </div>
        </section>
    )
}

export default CreatePost