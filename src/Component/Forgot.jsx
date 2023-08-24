import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { getAuth, sendPasswordResetEmail} from "firebase/auth";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Forgot = () => {
    const auth = getAuth();
    const navigate=useNavigate();

    const [loding, setloding] = useState(false);

    const [email, setEmail] = useState("");
    const [emailForgotree, setemailForgotree] = useState("");

    const emailHandel=(e)=>{
        setEmail(e.target.value)
        setemailForgotree("")
    }

    const handelForgot=(e)=>{
        e.preventDefault()
        setloding(true)

        if(email==""){
            setemailForgotree("Email is Requrde")
            setloding(false)
        }else{
            sendPasswordResetEmail(auth, email)
            .then(() => {
              // Password reset email sent!
              // ..
            toast.info('Check email confirm !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                navigate("/");  
              }, 2000);
            setloding(false)
            setEmail("")

            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
                if(errorCode==="auth/invalid-sender"){
                    toast.error('invalid sender', {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    });
                }else if(errorCode==="auth/invalid-email"){
                    toast.error('invalid Email', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                }else if(errorCode==="auth/user-not-found"){
                    toast.error('User not found please SignUp', {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    });
                }
              console.log(errorCode);
              console.log(errorMessage);
              setloding(false)
            });
        }
    }

    return (
        <div className="container mx-auto">  
            <ToastContainer />
            <div className='flex items-center justify-around'>
                <img className="w-[700px]" src="./2.jpg" alt="" />
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" action="#" onSubmit={handelForgot}>
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Forgot your account</h5>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email / phone number</label>
                            <input onChange={emailHandel} type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="enter your email or phone number"/>
                            <p className='text-red-700'>{emailForgotree}</p>
                        </div>
                        <div className="flex items-start">
                        </div>
                        <button  type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {
                            loding? 
                            <div aria-label="Loading..." role="status" className="flex items-center space-x-2">
                                <svg className="h-6 w-6 animate-spin stroke-gray-500" viewBox="0 0 256 256">
                                <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                                <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                                <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                                <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                                <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                                <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                                <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                                <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                                </svg><span className="text-xs font-medium text-gray-500">Loading...</span>
                            </div>
                            : 
                            "Submit"
                        } 
                        </button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered? <Link to="/registation" className="text-blue-700 hover:underline dark:text-blue-500">Create account </Link>
                        </div>
                    </form>
                </div>  
            </div>
        </div>
    );
};

export default Forgot;