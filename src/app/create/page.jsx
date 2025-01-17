"use client"
import React from 'react'
import Header from '../layouts/Header'
import CreatePost from '../components/CreatePost/CreatePost'

const Create = () => {
    return (
        <div className="sub-background min-h-screen">
            <Header />
            <main className='pb-8'>
                <CreatePost />
            </main>
        </div>
    )
}

export default Create