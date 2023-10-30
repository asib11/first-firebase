import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase.init";


const auth = getAuth(app);

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        setRegisterError('');
        setSuccess('');
        const fieldEmail = event.target.email.value;
        const fieldPassword = event.target.password.value;
        console.log(fieldEmail, fieldPassword);
        if(!/(?=.*[A-Z])/.test(fieldPassword)){
            setRegisterError('password must be one uppercase');
            return;
        }
        //connect firebase
        createUserWithEmailAndPassword(auth, fieldEmail, fieldPassword)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess('register successful');
                event.target.reset();
            })
            .catch(error => {
                setRegisterError(error.message);
            })

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
            <p style={{color: 'red'}}>{registerError}</p>
            <p style={{color: 'green'}}>{success}</p>
        </div>
    );
};

export default Register;