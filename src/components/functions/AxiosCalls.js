import axios from "axios";

const AxiosCalls = async(state)=>{
    const peticion = await axios.get ("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=3GMPPIKJz782hBb4nOzleGmaFINv5lmV")
   
    state(peticion.data._embedded.events)
   console.log(peticion.data._embedded.events)
    
    
}

const LondonCall = async(state)=>{
    const peticion = await axios.get ("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=602&apikey=3GMPPIKJz782hBb4nOzleGmaFINv5lmV")
   
    state(peticion.data._embedded.events)
   console.log(peticion.data._embedded.events)
    
    
}
const BarcelonaCall = async(state)=>{
    const peticion = await axios.get ("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=502&apikey=3GMPPIKJz782hBb4nOzleGmaFINv5lmV")
   
    state(peticion.data._embedded.events)
   console.log(peticion.data._embedded.events)
    
    
}

const unicoevento = async (id,state) =>{
    const peticion = await axios.get (`https://app.ticketmaster.com/discovery/v2/events/${id}.json?classificationName=music&dmaId=324&apikey=3GMPPIKJz782hBb4nOzleGmaFINv5lmV`)
    state(peticion.data)
    console.log(peticion.data)
   
   
} 

const Simagen = async (id,state) =>{
    const peticion = await axios.get (`https://app.ticketmaster.com/discovery/v2/events/${id}.json?classificationName=music&dmaId=324&apikey=3GMPPIKJz782hBb4nOzleGmaFINv5lmV`)
    state(peticion.data.images[3].url)
    console.log(peticion.data.images[0].url)
   
   
}
const DataEvento = async (id,state) =>{
    const peticion = await axios.get (`https://app.ticketmaster.com/discovery/v2/events/${id}.json?classificationName=music&dmaId=324&apikey=3GMPPIKJz782hBb4nOzleGmaFINv5lmV`)
    state(peticion.data.dates.start)
    console.log(peticion.data.dates.start)
   
   } 

   const getIndieConcerts = async () => await axios.get ('https://apicontinuum.herokuapp.com/concerts/api/all-concerts')
   

   
    const createConcert = async (newconcert) => await axios.post ('https://apicontinuum.herokuapp.com/concerts/create-concerts',newconcert)
   




export {createConcert}
export {Simagen}
export {AxiosCalls,unicoevento }
export {DataEvento}
export {LondonCall}
export {BarcelonaCall}
export {getIndieConcerts}
