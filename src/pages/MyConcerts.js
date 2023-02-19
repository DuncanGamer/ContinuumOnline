
import { Link } from 'react-router-dom'

import Baner from '../components/Baner'
import { usePostContext } from '../Context/concertsContext'
import { useEffect } from 'react'






const MyConcerts = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
     
        }, [] )

  
  
        const {userConcert}= usePostContext()
   





  if (!userConcert) {
    return <div>There are no concerts yet </div>;
  }
  
  return (
<div>
    <div key={new Date().getTime()} className=' w-screen  '>

       
        <div className=" container mx-auto  overflow-x-auto   flex md:overflow-visible  px-6 py-6 ">
                <div className=" h-screen  px-6 py-6 shrink-0 mx-auto mt-48 snap-center flex sm:grid  content-center  md:grid-cols-3  lg:grid-cols-3  ">

                    {userConcert.map(({_id,concertName, artist, date, place, price, image }) => (

                        <div key={_id} className="  gap-5 px-6 py-6 ">
                          
                                <div className="  shrink-0 snap-center w-full flex flex-col md:flex  rounded-lg hover:shadow-xl shadow-md shadow-gray-500/50 transition duration-300 ease-out hover:ease-in bg-white">
                                    <div className="flex justify-center">
                                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                                          
                                        {/* <img className="" src={image.url} alt="image" /> */}
                                          
                                            <div className="p-6">
                                                <h5 className="text-gray-900 text-xl font-medium mb-2">{concertName}  {artist}</h5>
                                                <p className="text-gray-700 text-base mb-4">
                                                    Some quick example text to build on the card title and make up the bulk of the card's
                                                    content.
                                                </p>
                                               < div className="flex justify-center gap-6">
                                                <button type="button" className=" inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">update</button>
                                                <button type="button" className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">delete</button>
                                                <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">info</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                       
                        </div>

                    ),)}
                </div>
            </div>
      
      <Baner/>
     
    </div>
</div>

  )
}

export default MyConcerts
