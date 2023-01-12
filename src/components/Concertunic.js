import React from 'react'
import { useParams } from 'react-router-dom'
import { unicoevento } from './functions/AxiosCalls'
import { useEffect, useState } from 'react'
import { Simagen } from './functions/AxiosCalls'
import { DataEvento } from './functions/AxiosCalls'
import Baner from './Baner'


const Concertunic = () => {



  const params = useParams()
  const [info, Setinfo] = useState([])
  const [imagen, Setimagen] = useState([])
  const [date, Setdate] = useState([])


  useEffect(() => {

    unicoevento(params.id, Setinfo)
    Simagen(params.id, Setimagen)
    DataEvento(params.id, Setdate)

  }, [])





  return (


    <>
    <div key = {info}>
      <div className="pt-16 bg-black sm:pt-36">
        <div className=" container m-auto">
          <div id="carouselDarkVariant" className="carousel slide carousel-fade carousel-dark " data-bs-ride="carousel">



            <div className="carousel-inner relative w-full overflow-hidden">

              <div className="carousel-item active relative float-left w-full">
                <img src={imagen} className="block w-full" alt="Motorbike Smoke" />

              </div>

            </div>


          </div>
        </div>
      </div>

      <div className='container m-auto h-96'>
        <div>
          <h3 className='text-6xl py-10'>{info.name}</h3>
          <p > Locale: {info.locale}</p>
          <p > Date: {date.localDate}</p>
          <p> Time: {date.localTime}</p>
          <a href={info.url}> <p>  Buy it in ticketmaster.com</p></a>

        </div>




      </div>
      <Baner/>

</div>





    </>







  )

}

export default Concertunic