import React, { useContext, useState } from 'react';
import "./Login.scss";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { useCustomMutation } from '../../api/CustomQuery';
const api=import.meta.env.VITE_API;
import apiurl from "../../api/apiRoutes"
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import{formatDataPlain} from "../../utils/encrypt"

// console.log("api",api,apiurl.auth.login)

const Login = () => {
    const { mutation } = useCustomMutation(`${apiurl.auth.login}`);
    const {setAuthUser}=useContext(AuthContext)
    const navigate=useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

   
    const onSuccess = (data) => {
     
        // console.log("data12333", data);
        localStorage.setItem('userData', JSON.stringify(data));
        setAuthUser(data);
        navigate('/home');
        console.log('Auth user state updated with:', data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("user", user);
        try {
            await mutation.mutate(formatDataPlain(user), { onSuccess });
        } catch (error) {
            console.error('Mutation error:', error);
        }
    };
    
    return (
        <div className='section-login'>
            <div className='login-div1'>
                <div>
                    <p>Meeting Room Scheduling</p>
                    <p>& Desk Booking Interface</p>
                    <p>For Organisations</p>
                </div>
            </div>
            <div className='login-div2'>
                <div>
                    <h2>Login</h2>
                    <div className='form-data'>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Working Email" name="email" value={user.email} onChange={handleChange} />
                            <br />
                            <input type="password" placeholder="Password" name='password' value={user.password} onChange={handleChange} />
                            <br />
                            <button type='submit' className='btn'>Login</button>
                            <span>Don't have an account yet? <span>Sign up</span></span>
                            <p>OR</p>
                            <button><span><FcGoogle />    Sign-in with Google</span></button>
                            <button><span><HiOutlineMail /></span>   Sign-in with Email</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
