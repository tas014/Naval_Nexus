import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [userData, setUserData] = useState({
        'email': null,
        'password': null
    });
    const [errors, setErrors] = useState({
        'email': null,
        'password': null
    });

    const loginUser = () => {
        console.log(userData)
    }

    const updateUserData = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
        const newData:any = {...userData};
        const currentKey = e.currentTarget.getAttribute('id');
        currentKey === 'confirm-password' || currentKey == null ? null : newData[currentKey] = e.currentTarget.value;
        setUserData(newData);
    }

  return (
    <section>
        <form action="" method='get' onSubmit={loginUser}>
            <fieldset>
                <legend>Login</legend>
                <div>
                    <div>
                        <label htmlFor="email"></label>
                        <span></span>
                    </div>
                    <input onChange={updateUserData} type="email" id='email' required />
                </div>
                <div>
                    <div>
                        <label htmlFor="password"></label>
                        <span></span>
                    </div>
                    <input onChange={updateUserData} type="password" id='password' required />
                </div>
            </fieldset>
        </form>
    </section>
  )
}

export default Login