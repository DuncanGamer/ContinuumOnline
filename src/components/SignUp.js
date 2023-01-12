
import React, { useState } from 'react';

function SignUp() {
    
    const [user, setUser ]= useState({
        email:"",
        password:""
    }) 
    
    
    
    return (
        <>
        
           
           <div className=' px-4 pt-52 h-screen'>
            <div className=" pt-10 lg:pt-32">
                <div className=" container  flex flex-col lg:flex-row items-center mx-auto  ">



                    <div className=" mx-auto w-full lg:w-1/2 ">
                        <div className="  mb-4 font-medium"> Welcome to Continuum. Sign up to get started!</div>

                        
                           
                           <form className="flex flex-col gap-y-5  w-full lg:w-4/5">
                          
                            <label name="email"></label>
                            <input onChange={(e)=> {
                                setUser({
                                    ...user,
                                    email: e.target.value
                                })
                               }} className=" focus:outline-none focus:border-gray-500 hover:shadow-md shadow-gray-500/50 shadow-lg  rounded-lg px-4 py-3 border border-gray-400transition duration-300 ease-out hover:ease-in"
                                type="email" name="email" placeholder="E-mail" />
                          <label name="password"></label>
                            <input
                            onChange={(e)=> {
                                setUser({
                                    ...user,
                                    password: e.target.value
                                })
                               }}
                                className=" focus:outline-none focus:border-gray-500 hover:shadow-md shadow-gray-500/50 shadow-lg  rounded-lg px-4 py-3 border border-gray-400 transition duration-300 ease-out hover:ease-in"
                                type="password" name="password" placeholder="Password" />
                           
                            <div className=" flex justify-between gap-3">
                                <button type="subbmit" className=" w-2/3 px-5 py-3 rounded-xl shadow-lg hover:shadow-md  shadow-blue-700  bg-blue-800 hover:bg-blue-700 active:bg-blue-900 text-white font-bold transition duration-300 ease-out hover:ease-in">Deploy
                                    in seconds</button>
                                    <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light"
                                    className=" bg-orange-500 inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:shadow-lg  shadow-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-300 ease-out hover:ease-in"
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-4 h-4">
                                        <path fill="currentColor"
                                            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                    </svg>
                                </button>
                                <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light"
                                    className="bg-blue-700 inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg  shadow-blue-800 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-300 ease-out hover:ease-in"
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4">
                                        <path fill="currentColor"
                                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                    </svg>
                                </button>

                           </div>
                             </form>
                            <div className=" text-gray-500">By signing up you agree to the <a href="#"
                                className=" underline font-light">Terms of Service</a></div>
                       

                    </div>
                </div>
            </div>
            </div>
           
        </>
    )
}
export default SignUp