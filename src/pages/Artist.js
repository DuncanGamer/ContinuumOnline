import React from 'react'
import axios from 'axios'
import {  useState } from 'react'
import { Link } from 'react-router-dom'





const Artist = () => {

    const [chearcher, Setchearcher] = useState("")
    const handleimputchange = ({ target }) => { 
          Setchearcher(target.value) }
    const handleSubmit = (e) => { e.preventDefault() 
    
       
    
    }


    const [concert, Setconcert] = useState([])

    const DataArtist = async () => {
        const peticion = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${chearcher}&apikey=3GMPPIKJz782hBb4nOzleGmaFINv5lmV`)

        Setconcert(peticion.data._embedded.events)
        console.log(peticion.data._embedded.events)
 
    }




    return (
        <>
 
            <div className="pt-16 bg-black sm:pt-36">
                <div className=" container m-auto">
                    <div id="carouselDarkVariant" className="carousel slide carousel-fade carousel-dark " data-bs-ride="carousel">



                        <div className="carousel-inner relative w-full overflow-hidden">

                            <div className="carousel-item active relative float-left w-full">
                                <img src='guitarrista.jpg' />

                            </div>

                        </div>


                    </div>
                </div>

                <form onSubmit={handleSubmit} className=" flex  gap-5 justify-center" >
                    <input
                        type="text"
                        onChange={handleimputchange}
                        value={chearcher}
                        className=" mb-6 w-96 focus:outline-none focus:border-gray-500 hover:shadow-md shadow-gray-500/50 shadow-lg  rounded-lg px-4 py-3 border border-gray-400transition duration-300 ease-out hover:ease-in"
                        name="text"
                        placeholder="Find"/>


                    <button  type="submit" onClick={DataArtist}
                        className="  bg-orange-500 h-12 px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:shadow-lg  shadow-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-300 ease-out hover:ease-in">
                         Find   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-4 h-4">
                            <path fill="currentColor" />
                        </svg>
                    </button>

                </form>





            </div>
            <div className=" container mx-auto  overflow-x-auto   flex md:overflow-visible  px-6 py-6 ">
                

                <div className="  px-6 py-6 shrink-0 mx-auto  snap-center flex sm:grid  content-center  md:grid-cols-3  lg:grid-cols-3  ">
                    {concert.map(({ id, name, images, dates, _embedded }) => (

                        <div key={id} className="  gap-5 px-6 py-6 ">
                            <Link to={`/Concertunic/${id}`}>
                                <div className="  shrink-0 snap-center w-full flex flex-col md:flex  rounded-lg hover:shadow-xl shadow-md shadow-gray-500/50 transition duration-300 ease-out hover:ease-in bg-white">
                                    <div className="flex justify-center">
                                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                                           
                                                <img className="" src={images[6].url} alt="" />
                                           
                                            <div className="p-6">
                                                <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
                                                <h4 className="text-gray-900 text-xl font-medium mb-2">{dates.start.localDate}</h4>
                                                <p className="text-gray-700 text-base mb-4">
                                                    {_embedded.venues.address}
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

export default Artist