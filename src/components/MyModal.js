import React from 'react'

const MyModal = ({isVisible, onClose}) => {
   if ( !isVisible ) return null;

  return (
    <div className='fixed inset-0 bg-white bg-opacity-25 backdrop-blur-sm flex justify-center items-center '>
        <div className='w-[600px]'>
        <div className= '   bg-white p-2 rounded'>
        Para poder visualizar la información de esta página es necesario terminar el registro
        <button className='w-full pl-64  flex column center   text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5' onClick={() => onClose()}>Aceptar</button>
         </div>
        </div>
   </div>
  )
}

export default MyModal
