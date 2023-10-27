import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState({});
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider()


    const loginHandler = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const logginUser = result.user;
                console.log(logginUser);
                setUser(logginUser);
            })
            .catch(error => {
                console.log('error:', error.message);
            })
    }

    return (
        <div>
            <button onClick={loginHandler}>google login</button>
            <button>google signout</button>
            {
                user && <div>

                    <h3>user: {user.displayName}</h3>
                    <p>email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;