"use client"
import React from 'react'
import Header from '../layouts/Header'
import CreatePost from '../components/CreatePost/CreatePost'

const Create = () => {
    return (
        <>
            <Header />
            <main>
                <CreatePost />
            </main>
        </>
    )
}

export default Create