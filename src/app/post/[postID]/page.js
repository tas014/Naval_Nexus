"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import { fetchPost } from '../../../fb/database'
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

    return (
        <>
            <Header />
            <Post postData={postData} />
        </>
    )
}

export default Page