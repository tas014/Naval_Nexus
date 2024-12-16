"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import { fetchPost, updatePost } from '../../../fb/database'
import Post from '../../components/Post'
import Header from '../../layouts/Header'

const Page = ({ params }) => {
    const pageParams = React.use(params);
    const [postData, setPostData] = useState();
    useEffect(() => {
        const data = fetchPost(pageParams.postID);
        data.then(post => {
            setPostData(post.data())
            console.log(post.data());
        })
    }, [])
    const updateVotesAdd = direction => {
        const newData = { ...postData }
        const revertKey = direction ? 1 : 2;
        direction ? newData.upvotes++ : newData.downvotes++;
        setPostData(newData);
        updatePost(pageParams.postID, newData).catch(err => revertVote(revertKey));
    }
    const updateVotesRemove = direction => {
        const newData = { ...postData }
        const revertKey = direction ? 3 : 4;
        direction ? newData.upvotes-- : newData.downvotes--;
        setPostData(newData);
        updatePost(pageParams.postID, newData).catch(err => revertVote(revertKey));
    }
    const revertVote = revertCase => {
        const newData = { ...postData };
        switch (revertCase) {
            case 1:
                newData.upvotes--;
                break;
            case 2:
                newData.downvotes--;
                break;
            case 3:
                newData.upvotes++;
                break;
            case 4:
                newData.downvotes++;
                break;
            default:
                break;
        }
        setPostData(newData);
    }

    return (
        <>
            <Header />
            <main>
                <Post postData={postData} updateVotesAdd={updateVotesAdd} updateVotesRemove={updateVotesRemove} />
            </main>
        </>
    )
}

export default Page