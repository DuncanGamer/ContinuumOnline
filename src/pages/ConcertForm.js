
import { Link } from 'react-router-dom'
import Carrusel from '../components/Carrusel'
import Baner from '../components/Baner'
import { usePostContext } from '../Context/concertsContext'







const ConcertForm = () => {

  const {concert}= usePostContext()



  if (!concert) {
    return <div>There are no concerts yet </div>;
  }
  
  return (
<div>
    <div className=' w-screen'>
       <Carrusel/>
       
        <div className=" container mx-auto  overflow-x-auto   flex md:overflow-visible  px-6 py-6 ">
                <div className="  px-6 py-6 shrink-0 mx-auto snap-center flex sm:grid  content-center  md:grid-cols-3  lg:grid-cols-3  ">

                    {concert.map(({_id,concertName, artist, date, place, price, image }) => (

                        <div key={_id} className="  gap-5 px-6 py-6 ">
                            <Link to={`/Concertunic/${_id}`}>
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
      
      <Baner/>
     
    </div>
</div>

  )
}

export default ConcertForm





  
