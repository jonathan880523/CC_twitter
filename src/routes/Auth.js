import { authService } from 'fbase';
import { useState } from 'react';

const auth = authService.getAuth();

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

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
                data = await authService.createUserWithEmailAndPassword(auth, email, password);
            } else {
                // log in
                data = await authService.signInWithEmailAndPassword(auth, email, password);
            }
            console.log(data);
        } catch (error) {
            setError(error.code);
        }
    };

    const toggleAccount = () => setNewAccount((prev) => !prev);

    const onSocialClick = async (event) => {
        try {
            const {
                target: { name }
            } = event;
            let provider;
            if (name === 'google') {
                provider = new authService.GoogleAuthProvider();
            } else if (name === 'github') {
                provider = new authService.GithubAuthProvider();
            }
            const data = await authService.signInWithPopup(auth, provider);
            console.log('data: ', data);
        } catch (error) {
            console.log('code: ', error.code, ' customData: ', error.customData, ' name: ', error.name);
        }
    }

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
                {error}
            </form>
            <span onClick={toggleAccount}>
                {newAccount ? "Sign In" : "Create Account"}
            </span>
            <div>
                <button onClick={onSocialClick} name="google">Continue with Google</button>
                <button onClick={onSocialClick} name="github">Continue with Github</button>
            </div>
        </div>
    );
}

export default Auth;