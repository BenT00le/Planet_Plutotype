import React, { Component } from 'react';

class Login extends Component
{
	render()
	{
        return(
            <div>
    			<h1>Login</h1>

                <form action="/login" method="POST">
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
                    <button type="submit">Login</button>
                    <a href="/register">register</a>
                </form>
            </div>
			);
	}
}
export default Login;