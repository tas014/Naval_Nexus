import React from 'react'
import { useState } from 'react';

const PostContent = ({ setContent }) => {
    const [tabs, setTabs] = useState([]);

    const validateContent = () => {
        const postContent = document.getElementById("post_content").innerText;
        if (postContent.length > 30) {
            setContent(postContent);
        }
    }

    return (
        <div>
            <div contentEditable id="post_content">
                Write your post Here!
            </div>
            <button onClick={validateContent}>Create Post</button>
        </div>
    )
}

export default PostContent