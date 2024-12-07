import React from 'react'
import { useState } from 'react';

const Signup = () => {
    const [userData, setUserData] = useState({
        'username': null,
        'email': null,
        'password': null
    });
    const [errors, setErrors] = useState({
        'username': null,
        'email': null,
        'password': null,
        "confirm-password": null
    });

    const signUpUser = (e:React.FormEvent<HTMLFormElement>) => {
        console.log(userData);
    }

    const updateUserData = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.getAttribute('id'));
        const newData:any = {...userData};
        const currentKey = e.currentTarget.getAttribute('id');
        currentKey === 'confirm-password' || currentKey == null ? null : newData[currentKey] = e.currentTarget.value;
        setUserData(newData);
    }


  return (
    <section>
        <form action="" method='set' onSubmit={signUpUser}>
            <fieldset>
                <legend>Signup</legend>
                <div>
                    <div>
                        <label htmlFor="username">Username</label>
                        <span>{errors['username']}</span>
                    </div>
                        <input onChange={updateUserData} id='username' type="text" required />
                </div>
                <div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <span>{errors['email']}</span>
                    </div>
                        <input onChange={updateUserData} id='email' type="email" required />
                </div>
                <div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <span>{errors['password']}</span>
                    </div>
                        <input onChange={updateUserData} id='password' type="password" required />
                </div>
                <div>
                    <div>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <span>{errors["confirm-password"]}</span>
                    </div>
                        <input onChange={updateUserData} id='confirm-password' type="password" required />
                </div>
                <input type="submit"/>
            </fieldset>
        </form>
    </section>
  )
}

export default Signup