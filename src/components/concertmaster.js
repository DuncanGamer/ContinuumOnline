import React from 'react'
import { AxiosCalls } from './functions/AxiosCalls'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



const Concertmaster = () => {

    const [concert, Setconcert] = useState([])

    useEffect(() => {

        AxiosCalls(Setconcert)

    }, [])


    return (
        <>

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
        </>
    )
}

export default Concertmaster