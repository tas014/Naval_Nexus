import React from 'react'
import Image from 'next/image'

interface userData {
    img: string,
    name: string,
    upvotes:number,
    downvotes:number,
    totalPosts: number
}

interface props {
    userData:userData
}

const ProfileCard = ({userData}:props) => {
  return (
    <section>
        <div>
            <Image src={userData.img} height={400} width={400} alt="Your profile image or avatar" />
            <h2>{userData.name}</h2>
            <div>
                <div>
                    <h5>Posts</h5>
                    <strong>{userData.totalPosts}</strong>
                </div>
                <div>
                    <h5>Karma</h5>
                    <strong>{userData.upvotes - userData.downvotes}</strong>
                </div>
                <div>
                    <h5>Saved</h5>
                    <strong>{userData.totalPosts}</strong>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProfileCard