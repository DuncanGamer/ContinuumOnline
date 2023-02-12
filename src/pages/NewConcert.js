import React from 'react'
import Market1 from '../components/Market1'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { usePostContext } from '../Context/concertsContext'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'



const NewConcert = () => {

  const { postConcert } = usePostContext()
const navigate = useNavigate()
  return (
    <>
   <div className=' px-4 h-screen'>
        <div className=" pt-10 lg:pt-32">
          <Market1
            Titulo1="Simplier."
            Titulo2="Happier."
            Titulo3=" Better concerts."
            Paragraph=" " />
          <div className=" container  flex flex-col lg:flex-row items-center mx-auto  ">

            <div className=" mx-auto w-full lg:w-1/2 mt-14 ">
              <div className="  mb-4 font-3xl"> Create your concert</div>
              <Formik
                initialValues={{
                  concertName: '',
                  artist: '',
                  date: '',
                  place: '',
                  price: '',
                  description: '',
                }}
                validationSchema={Yup.object({
                  concertName: Yup.string().required('Concert name is required'),
                  artist: Yup.string().required('Artist is required'),
                  date: Yup.string().required('Date is required'),
                  place: Yup.string().required('Place is required'),
                  price: Yup.string().required('Price is required'),
                  description: Yup.string().required('Description is required').min (10, 'Description must be at least 10 characters'),
                  
  })}
  

              
                onSubmit={async(values, actions) => {
                  await postConcert(values)
                  navigate('/ConcertForm')
                }}

              >
                {({ handleSubmit }) => (
                  <Form onSubmit={handleSubmit} className="flex flex-col gap-y-5  w-full lg:w-4/5 mb-10">
                    <Field
                      name="concertName"
                      type="text"
                      placeholder="Concert Name"
                      className=" focus:outline-none focus:border-gray-500 hover:shadow-md shadow-gray-500/50 shadow-lg  rounded-lg px-4 py-3 border border-gray-400transition duration-300 ease-out hover:ease-in" />

                    <ErrorMessage name="concertName" component= "p" className=' text-red-500' />
                    <Field
                      name="artist"
                      type="text"
                      placeholder="Artist"
                      className=" focus:outline-none focus:border-gray-500 hover:shadow-md shadow-gray-500/50 shadow-lg  rounded-lg px-4 py-3 border border-gray-400transition duration-300 ease-out hover:ease-in" />

                    <ErrorMessage name="artist"component= "p" className=' text-red-500' />
                    <Field
                      name="date"
                      type="text"
                      placeholder="Date"
                      className=" focus:outline-none focus:border-gray-500 hover:shadow-md shadow-gray-500/50 shadow-lg  rounded-lg px-4 py-3 border border-gray-400transition duration-300 ease-out hover:ease-in" />
                    <ErrorMessage name="date"component= "p" className=' text-red-500'/>
                    <Field
                      name="place"
                      type="text"
                      placeholder="Place"
                      className=" focus:outline-none focus:border-gray-500 hover:shadow-md shadow-gray-500/50 shadow-lg  rounded-lg px-4 py-3 border border-gray-400transition duration-300 ease-out hover:ease-in" />
                    <ErrorMessage name="place"component= "p" className=' text-red-500'/>
                    <Field
                      name="price"
                      type="text"
                      placeholder="Price"
                      className=" focus:outline-none focus:border-gray-500 hover:shadow-md shadow-gray-500/50 shadow-lg  rounded-lg px-4 py-3 border border-gray-400transition duration-300 ease-out hover:ease-in" />
                    <ErrorMessage name="price" component= "p" className=' text-red-500' />
                    <Field
                      name="description"
                      component="textarea"
                      placeholder="Description"
                      className=" focus:outline-none focus:border-gray-500 hover:shadow-md shadow-gray-500/50 shadow-lg  rounded-lg px-4 py-3 border border-gray-400transition duration-300 ease-out hover:ease-in" />
                    <ErrorMessage name="description" component= "p" className=' text-red-500' />
                    <button
                      type="submit"
                      className=" w-2/3 px-5 py-3 rounded-xl shadow-lg hover:shadow-md  shadow-blue-700  bg-blue-800 hover:bg-blue-700 active:bg-blue-900 text-white font-bold transition duration-300 ease-out hover:ease-in">
                      Save
                    </button>
                  </Form>
                )}
              </Formik>

            </div>
          </div>
        </div>
      </div>
  </>

   )
}

export default NewConcert  




  



