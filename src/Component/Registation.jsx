import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import '../firebaseConfig'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Registation = () => {
    const auth = getAuth();
    const naviget = useNavigate();
    
    const [loding, setloding] = useState(false);

    const [name, setname] = useState('');

    const [nameError, setnameError] = useState();

    const [lastname, setlastname] = useState('');
    const [lastnameError, setlastnameError] = useState('');

    const [address, setaddress] = useState('');
    const [addressError, setaddressError] = useState('');

    const [phonenumber, setphonenumber] = useState('');
    const [phonenumberError, setphonenumberError] = useState('');

    const [url, seturl] = useState('');
    const [urlError, seturlError] = useState('');

    const [income, setincome] = useState('');
    const [incomeError, setincomeError] = useState('');

    const [email, setemail] = useState('');
    const [emailError, setemailError] = useState('');

    const [password, setpassword] = useState('');
    const [passwordError, setpasswordError] = useState('');

    const [conformpassword, setconfirmpassword] = useState('');
    const [conformpasswordError, setconfirmpasswordError] = useState('');

    const [ckbox, setckbox] = useState('');
    const [ckboxError, setckboxError] = useState('');

    const handleName=(e)=>{
        setname(e.target.value)
        setnameError('')
    }
    const handleLastname=(e)=>{
        setlastname(e.target.value)
        setlastnameError('')
    }
    const handleAddress=(e)=>{
        setaddress(e.target.value)
        setaddressError('')
    }
    const handlePhonenumber=(e)=>{
        setphonenumber(e.target.value)
        setphonenumberError('')
    }
    const handleUrl=(e)=>{
        seturl(e.target.value)
        seturlError('')
    }
    const handleIncome=(e)=>{
        setincome(e.target.value)
        setincomeError('')
    }
    const handleEmail=(e)=>{
        setemail(e.target.value)
        setemailError('')
    }
    const handlePassword=(e)=>{
        setpassword(e.target.value)
        setpasswordError('')
    }
    const handleConfirmpassword=(e)=>{
        setconfirmpassword(e.target.value)
        setconfirmpasswordError('')
    }
    const handleCkbox=(e)=>{
        setckbox(e.target.value)
        setckboxError('')
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setloding(true);
        if(name==""){
            setnameError('Name is Requrde');
            setloding(false);
        }else {
            if(lastname==""){
                setlastnameError("Last-Name is Requrde");
                setloding(false);
            }else{
                if(address==""){
                    setaddressError("Adderss is Requrde")
                    setloding(false);
                }else{
                    if(phonenumber==""){
                        setphonenumberError("Phon-Number is Requrde")
                        setloding(false);
                    }else{
                        if(url==""){
                            seturlError("Url is Requrde")
                            setloding(false);
                        }else{
                            if(income==""){
                                setincomeError("Income is Requrde")
                                setloding(false);
                            }else{
                                if(email==""){
                                    setemailError("Email is Requrde")
                                    setloding(false);
                                }else{
                                    if(password==""){
                                        setpasswordError("Password is Requrde")
                                        setloding(false);
                                    }else{
                                        if(conformpassword==""){
                                            setconfirmpasswordError("Confirm-Password is Requrde")
                                            setloding(false);
                                        }else{
                                            if(ckbox==""){
                                                setckboxError("Conditions is Requrde")
                                                setloding(false);
                                            }
                                            else{
                                                createUserWithEmailAndPassword(auth, email, password,name,lastname,address,phonenumber,url,income,conformpassword,ckbox)
                                                .then((userCredential) => {
                                                  // Signed in 
                                                  
                                                  toast.success('Registration successful!', {
                                                    position: "top-right",
                                                    autoClose: 5000,
                                                    hideProgressBar: false,
                                                    closeOnClick: true,
                                                    pauseOnHover: true,
                                                    draggable: true,
                                                    progress: undefined,
                                                    theme: "light",
                                                    });
                                                    setloding(false);
                                                    setname(""),setlastname(""),setincome(""),setaddress(""),setphonenumber(""),seturl(""),setemail(""),setpassword(""),setconfirmpassword(""),setckbox("")
                                                    
                                                    setTimeout(() => {
                                                        naviget("/")
                                                    }, 2000);
                                                })
                                                .catch((error) => {
                                                  setloding(false);
                                                  const errorCode = error.code;
                                                  console.log(errorCode);
                                                  if(errorCode==="auth/network-request-failed"){
                                                    toast.warn('Network request failed!', {
                                                        position: "top-right",
                                                        autoClose: 5000,
                                                        hideProgressBar: false,
                                                        closeOnClick: true,
                                                        pauseOnHover: true,
                                                        draggable: true,
                                                        progress: undefined,
                                                        theme: "dark",
                                                    });
                                                  }else if(errorCode==="auth/email-already-in-use"){
                                                    toast.warn('Email already in use', {
                                                        position: "top-right",
                                                        autoClose: 5000,
                                                        hideProgressBar: false,
                                                        closeOnClick: true,
                                                        pauseOnHover: true,
                                                        draggable: true,
                                                        progress: undefined,
                                                        theme: "dark",
                                                        });
                                                  }

                                                });
                                               
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }  
    }
    return (
        <div className="container mx-auto">
        <ToastContainer />
        <div className="flex flex-wrap items-center justify-around pt-4">
            <img className="w-[700px]" src="./1.jpg" alt="" />
            <div className="w-full h-4/6 max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={handleSubmit}>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Sign up to our platform</h5>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                            <input onChange={handleName} value={name} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="first name" />
                            <p className='text-red-700'>{nameError}</p>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                            <input onChange={handleLastname} value={lastname} type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="last name" />
                            <p className='text-red-700'>{lastnameError}</p>
                        </div>
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                            <input onChange={handleAddress} value={address} type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="address" />
                            <p className='text-red-700'>{addressError}</p>
                        </div>  
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                            <input onChange={handlePhonenumber} value={phonenumber} type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+880-001-110-112" />
                            <p className='text-red-700'>{phonenumberError}</p>
                        </div>
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your parsonal website URL</label>
                            <input onChange={handleUrl} value={url} type="text" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="parsonal website url" />
                            <p className='text-red-700'>{urlError}</p>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Annual income (per month)</label>
                            <input onChange={handleIncome} value={income} type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your income" />
                            <p className='text-red-700'>{incomeError}</p>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                        <input onChange={handleEmail} value={email} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your email" />
                        <p className='text-red-700'>{emailError}</p>
                    </div> 
                    <div className="mb-6">
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input onChange={handlePassword} value={password} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your password" />
                        <p className='text-red-700'>{passwordError}</p>
                    </div> 
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                        <input onChange={handleConfirmpassword} value={conformpassword} type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter confirm password" />
                        <p className='text-red-700'>{conformpasswordError}</p>
                    </div> 
                    <div className="flex items-start ">
                        <div className="flex items-center h-5">
                        <input onChange={handleCkbox} id="remember" type="checkbox" value="yes" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                        </div>
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label> 
                    </div>
                    <p className='text-red-700 mb-6'>{ckboxError}</p>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                </form>
            </div>
        </div>
    </div>
    );
};

export default Registation;