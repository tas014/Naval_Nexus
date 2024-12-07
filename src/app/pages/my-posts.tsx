import MyPosts from "../layouts/MyPosts"
import Header from "../layouts/Header"

const UserPostsAndSaved = () => {
  return (
    <body>
      <Header />  
      <main>
          <h1>My Posts</h1>
          <MyPosts />
      </main>
    </body>
  )
}

export default UserPostsAndSaved