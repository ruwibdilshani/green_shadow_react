import '../css/Pages/LoginPage.css'
import logo from '../assets/Staylinked.png'
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {loginUser} from "../store/slices/userSlice.ts";
import {toast} from "react-toastify";
import signInImg from "../assets/signIn.png"

const LoginPage = () => {

    const dispatch = useDispatch();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    const togglePassword = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }

    const handleLogin = () => {
        try{
            if (email === "" || password === "") {
                toast.error("Please fill all fields")
                console.log("Please fill all fields")
                return
            }
            if (!isCheckboxChecked) {
                toast.error("Please agree to all terms")
                return
            }
            dispatch(loginUser({email, password}))
            navigate('/dashboard/home')
        } catch (e) {
            toast.error("Wrong email or password")
            console.log(e)
        }
    }

    return (
        <>
            <div className="main-container d-grid w-100 overflow-hidden w-75 h-100">
                <div className="p-5">
                    <div className="logo d-flex gap-4 align-items-center mt-5">
                        <img  src={logo} alt="logo"/>
                        <h1 className="m-0 fw-medium">Green Shadow</h1>
                    </div>
                    <div className="form-container mt-5">
                        <h3 className="fw-medium">Sign in Green Shadow</h3>
                        <div className="mt-5">
                            <div className="d-flex flex-column gap-3">
                                <div className="form-floating mb-3 w-100">
                                    <input
                                        type="email"
                                        className="form-control email-input fw-bold border-0"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating position-relative w-100 border-0">
                                    <input
                                        type={''}
                                        className="form-control password-input fw-bold"
                                        id="floatingPassword"
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <label htmlFor="floatingPassword">Password</label>
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary toggle-password bg-transparent border-0"
                                        style={{position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)'}}
                                        onClick={togglePassword}
                                    >

                                    </button>
                                </div>

                            </div>

                            <div className="d-flex mt-5">
                                <label className="checkbox-btn d-block position-relative pointer-event p-3">
                                    <label className="pointer-event" htmlFor="checkbox"></label>
                                    <input id="checkbox" type="checkbox" className="position-absolute opacity-0 pointer-event"
                                        onChange={() => setIsCheckboxChecked(!isCheckboxChecked)}
                                    />
                                    <span className="checkmark position-absolute top-0 start-0"></span>
                                </label>
                                <h4 className="m-0 term fw-semibold">
                                    I agree to all Term, Privacy Policy and Fees
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-5">
                        <button className="text-white bg-green-600 p-2 px-4 rounded-3 fw-semibold w-32 hover:bg-green-700 "
                                onClick={handleLogin}
                        >
                            Sign In
                        </button>
                        <h5 className="fw-semibold ">
                            Don’t have an account ?
                            <Link to="/register" className="text-decoration-none ms-1 text-green-600		">Register</Link> Now.
                        </h5>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-end">
                    <div className="h-100 d-flex align-items-center justify-content-start ms-5">

                    </div>
                    <img className="w-100 h-100 mt-4 login-image" src={signInImg} alt=""/>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
