import React from 'react'

const LoginForm: React.FC = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const Login = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
    };

    return (

        <div className="Container">
            <div className="card large">
                <h1>Login</h1>
                <form onSubmit={Login}>
                    <fieldset>
                        <div className="col-sm-12 col-md-6">
                            <label htmlFor="username">Username</label>
                            <input required value={username} onChange={(event) => setUsername(event.target.value)} type="text" id="username" placeholder="username"></input>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <label htmlFor="password">Password</label>
                            <input required value={password} onChange={(event) => setPassword(event.target.value)}  type="password" id="password" placeholder="password"></input>
                        </div>
                    </fieldset>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>

    );

};

export default LoginForm