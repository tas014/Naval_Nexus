"use client"
import UserPosts from "../layouts/MyPosts"
import Header from "../layouts/Header"

const MyPosts = () => {
  return (
    <>
      <Header />  
      <main>
          <h1>My Posts</h1>
          <UserPosts />
      </main>
    </>
  )
}

export default MyPosts