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
        postData.tabs = [{ title: "Content", content: content }];
        setPostAttributes(postData);
        createPost(postData);
    }
    return (
        <section>
            <h1>Create Post</h1>
            <div>
                {canEdit ? <PostContent setContent={createPostContent} /> : <PostAttributes setPostAttributes={createPostAttributes} />}
            </div>
        </section>
    )
}

export default CreatePost