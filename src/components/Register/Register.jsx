// import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase.init";


const auth = getAuth(app);

const Register = () => {
    // const [email, setEmail] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        const fieldEmail = event.target.email.value;
        const fieldPassword = event.target.password.value;
        console.log(fieldEmail, fieldPassword);
        //connect firebase
        createUserWithEmailAndPassword(auth, fieldEmail, fieldPassword)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))

    }

    return (
        <div onSubmit={handleRegister}>
            <h4>Please Register</h4>
            <form action="">
                <input type="email" name="email" id="email" placeholder="Your Email" />
                <br />
                <input type="password" name="passowrd" id="password" placeholder="Your Password" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;