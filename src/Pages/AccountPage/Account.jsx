import React from 'react';
import BaseLayout from "../../Components/BaseLayout";
// import imgProfile from '../../public/images/defaultProfile.png'; // Asegúrate de que la ruta de la imagen sea correcta
import imgProfile from '../../../public/images/defaultProfile.png';
export default function Account() {
  return (
    <BaseLayout>
      <div className="bg-gray-100 text-black font-sans text-lg p-8 sm:p-28">
        <div className="bg-white flex flex-col sm:flex-row justify-between rounded-xl p-4 sm:p-8">
          <div className="my-8 sm:my-16 flex flex-col items-center sm:items-start">
            <div className='my-4'>
              <img src={imgProfile} alt="Profile" className="w-32 h-32 rounded-full" />
            </div>
            <h1 className="font-bold my-2 text-[#54E360]">Account name</h1>
            <p className='text-gray-500'>SpootChat</p>
            <div className='my-4'>
              <button className='bg-black text-white rounded-lg px-4 py-2'>Logout</button>
            </div>
          </div>

          <div className='my-8 sm:my-16'>
            <h1 className='font-bold text-4xl mb-4'>Your profile</h1>
            <div className='shadow-md bg-white p-4 rounded-xl'>
              <div className='grid grid-cols-2 gap-4'>
                <div className='font-bold'>
                  <h1 className='my-2'>Nombre de usuario</h1>
                  <h1 className='my-2'>Nombre completo</h1>
                  <h1 className='my-2'>Correo electrónico</h1>
                </div>
                <div>
                  <p className='my-2'>Nombre</p>
                  <p className='my-2'>Nombre completo</p>
                  <p className='my-2'>example@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}
