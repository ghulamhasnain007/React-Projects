import React, { useState, useRef } from 'react';
import { useUserContext } from '../context/NameContext';

function SignUp() {
    const { user, setUser } = useUserContext();
    const [formData, setFormData] = useState({
        name: user.name || '',
        email: user.email || '',
        pass: ''
    });
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passRef = useRef(null);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({
            ...user,
            ...formData
        });
        sessionStorage.setItem("users", JSON.stringify(formData))
        // Clear password field after submission
        setFormData(prevFormData => ({
            ...prevFormData,
            pass: '',
            name: '',
            email: ''
        }));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter Name
                    <input type='text' name='name' value={formData.name} ref={nameRef} onChange={handleChange} />
                </label><br />
                <label>Enter Email
                    <input type='email' name='email' value={formData.email} ref={emailRef} onChange={handleChange} />
                </label><br />
                <label>Enter Password
                    <input type='password' name='pass' value={formData.pass} ref={passRef} onChange={handleChange} />
                </label><br />
                <button type="submit">SIGN UP</button>
            </form>
        </div>
    );
}

export default SignUp;
