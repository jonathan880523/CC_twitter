import { authService } from 'fbase';
import { useState } from 'react';
const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);

    const onChange = (event) => {
        const {
            target: { name, value },
        } = event;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if (newAccount) {
                // Create newAccount
                data = await authService.createUserWithEmailAndPassword(authService.getAuth(), email, password);
            } else {
                // log in
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={onChange}
                    value={email}
                    required />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={onChange}
                    value={password}
                    required />
                <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
            </form>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
        </div>
    );
}

export default Auth;