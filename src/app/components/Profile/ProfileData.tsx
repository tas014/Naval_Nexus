import React from 'react'
import Link from 'next/link'

interface userData {
    name: string,
    password: string,
    stats: string,
}

interface props {
    userData:userData
}

const ProfileData = ({userData}:props) => {
  return (
    <section>
        <div>
            <div>
                <h5>Username</h5>
                <span>{userData.name}</span>
            </div>
            <div>
                <h5>Password</h5>
                <span>{userData.password}</span>
            </div>
            <div>
                <h5>My Stats</h5>
                <span>{userData.stats}</span>
            </div>
            <div>
                <h5>My Posts</h5>
                <span>Go to my posts page</span>
            </div>
        </div>
    </section>
  )
}

export default ProfileData