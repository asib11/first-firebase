import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null);
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

    const logOutHandler = () => {
        signOut(auth)
            .then(setUser(null))
            .catch(error => console.log(error))
    }

    return (
        <div>
            {
                user ?
                    <button onClick={logOutHandler} >google signout</button> :
                    <button onClick={loginHandler}>google login</button>
            }
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