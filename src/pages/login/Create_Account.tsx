import React from 'react'

function validateInput(username: string, password: string, confirm_password: string) {
    var result : boolean = true;
    let username_field : HTMLInputElement  = document.getElementById("username") as HTMLInputElement;
    let password_field : HTMLInputElement = document.getElementById("password") as HTMLInputElement;
    let confirm_password_field : HTMLInputElement = document.getElementById("confirm_password") as HTMLInputElement;
    var failed : boolean = false;
    var validity : string;

    // username
    validity = ""; failed = false;
    if (username.length < 8) {
        result = false; failed = true;
        validity += "Username must be at least 8 characters.\n";
    }
    if (failed) {
        username_field.setCustomValidity(validity);
    }

    // password
    validity = ""; failed = false;
    if (password != confirm_password) {
        result = false; failed = true;
        validity += "Passwords do not match.\n";
        confirm_password_field.setCustomValidity(validity);
    }
    if (password.length < 8) {
        result = false; failed = true;
        validity += "Password must be at least 8 characters.\n";
    }
    var regexp = new RegExp('[a-z]');
    if (regexp.test(password) == false) {
        result = false; failed = true;
        validity += "Password must include at least one lowercase character.\n";
    }
    var regexp = new RegExp('\d');
    if (regexp.test(password) == false) {
        result = false; failed = true;
        validity += "Password must contain at least one number.\n";
    }
    var regex = new RegExp('[A-Z]');
    if (regexp.test(password) == false) {
        result = false; failed = true;
        validity += "Password must contain at least one uppercase letter.\n";
    }
    if (failed) {
        password_field.setCustomValidity(validity);
    }

    return result;

}

const CreateAccountForm: React.FC = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirm_password, setConfirmPassword] = React.useState('');

    const CreateAccount = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validateInput(username, password, confirm_password)) {
            
        } else {

        }
    };

    return (

        <div className="Container">
            <div className="card large">
                <h1>Create Account</h1>
                <form onSubmit={CreateAccount}>
                    <fieldset>
                        <div className="col-sm-12 col-md-6">
                            <label htmlFor="username">Username</label>
                            <input required value={username} onChange={(event) => setUsername(event.target.value)} type="text" id="username" placeholder="username"></input>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <label htmlFor="password">Password</label>
                            <input required value={password} onChange={(event) => setPassword(event.target.value)}  type="password" id="password" placeholder="password"></input>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <label htmlFor="confirm_password">Password</label>
                            <input required value={confirm_password} onChange={(event) => setConfirmPassword(event.target.value)}  type="password" id="confirm_password" placeholder="confirm password"></input>
                        </div>
                    </fieldset>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>

    );

};

export default CreateAccountForm