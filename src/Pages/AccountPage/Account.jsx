import React from 'react';
import BaseLayout from "../../Components/BaseLayout";
import imgProfile from './../../../public/images/defaultProfile.png';


export default function Account() {
  return (
    <BaseLayout>
      <div className="bg-gray-100 text-black font-sans text-lg p-28">
        <div className="bg-white flex flex-cols-2 place-content-evenly rounded-xl">
          <div className="p-4 mx-2 my-16 flex flex-col place-content-center">
            <div>
              <div className='my-4'>
                <img src={imgProfile} alt="" srcset="" />
              </div>
              <h1 className="font-bold my-1 text-[#54E360]">Account name</h1>
              <p className=''>SpootChat</p>
            </div>
            <div className='my-8'>
              <button className='bg-black rounded-xl text-white p-3'>Logout</button>
            </div>
          </div>


          <div className='p-4 flex flex-col place-content-center my-16'>
            <h1 className='font-bold text-4xl mx-2'>Your profile</h1>
            <div className='shadow-md bg-white p-4 rounded-xl flex flex-rows-2'>
              <div className='p-4 my-4 font-bold'>
                <h1 className='my-2'>Nombre de usuario</h1>
                <h1 className='my-2'>Nombre completo</h1>
                <h1 className='my-2'>Correo electrónico</h1>
              </div>
              <div className='p-4 my-4'>
                <p className='my-2'>Nombre</p>
                <p className='my-2'>Nombre completo</p>
                <p className='my-2'>example@gmail.com</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </BaseLayout>
  )
}
