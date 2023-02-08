import React from 'react'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LondonCall } from '../components/functions/AxiosCalls'


const London = () => {

    const [concert, Setconcert] = useState([])

    useEffect(() => {

        LondonCall(Setconcert)

    }, [])


    return (
        <>

<div className="pt-16 bg-black sm:pt-36">
        <div className=" container m-auto">
            <div id="carouselDarkVariant" className="carousel slide carousel-fade carousel-dark " data-bs-ride="carousel">
              
               
              
                <div className="carousel-inner relative w-full overflow-hidden">
                  
                    <div className="carousel-item active relative float-left w-full">
                        <img src='https://images.unsplash.com/photo-1520967824495-b529aeba26df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxvbmRvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'className="block w-full" alt="Motorbike Smoke" />
                        
                    </div>

                   </div>
                    

            </div>
        </div>
    </div>
 <div className=" container mx-auto  overflow-x-auto   flex md:overflow-visible  px-6 py-6 ">
 <div className="  px-6 py-6 shrink-0 mx-auto  snap-center flex sm:grid  content-center  md:grid-cols-3  lg:grid-cols-3  ">      
            {concert.map(({ id, name, images }) => (
 
                <div key={id} className="  gap-5 px-6 py-6 ">
                    <Link to={`/Concertunic/${id}`}>
                        <div className="  shrink-0 snap-center w-full flex flex-col md:flex  rounded-lg hover:shadow-xl shadow-md shadow-gray-500/50 transition duration-300 ease-out hover:ease-in bg-white">
                            <div className="flex justify-center">
                                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                        <img className="" src={images[6].url} alt="" />
                                    </a>
                                    <div className="p-6">
                                        <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
                                        <p className="text-gray-700 text-base mb-4">
                                            Some quick example text to build on the card title and make up the bulk of the card's
                                            content.
                                        </p>
                                        <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Get info</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Link>
                </div>

            ),)}
            </div>
            </div>
        </>
    )
}

export default London