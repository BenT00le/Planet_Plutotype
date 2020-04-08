import React, { Component } from 'react';

class Register extends Component
{
    render()
    {
        return(
        <div>
            <h1>Register</h1>
            <form action="/register" method="POST">
                <div>
                    <lable for="name">name</lable>
                    <input type="text" id="name" name="name"
                    reqired></input>
                </div>
                
                <div>
                    <lable for="email">email</lable>
                    <input type="email" id="email" name="email"
                    reqired></input>
                </div>

                <div>
                    <lable for="password">password</lable>
                    <input type="password" id="password" name="password"
                    reqired></input>
                </div>
                <button type="submit">Register</button>
                <a href="/login">Login</a>
            </form>
        </div>
        );
    }
}
export default Register;