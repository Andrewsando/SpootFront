import React from 'react'
import BaseLayout from '../../Components/BaseLayout';
import logoImg from './../../../public/images/spotify.png';
import { Link } from 'react-router-dom';

export default function RegistrationSuccess() {
    return (
        <BaseLayout>
            <div className='text-xl grid h-screen place-items-center text-white bg-gradient-to-r from-[#141921] to-[#000000]'>
                <div>
                    <div className='flex w-full justify-center items-center'>
                        <img src={logoImg} className='h-24 w-24' alt="SpootChat logo" srcset="" />
                    </div>
                    <h1 className='text-[#54E360] font-bold text-4xl text-center my-4'>Bienvenido a SpootChat!</h1>
                    <p className='text-center'>Tu cuenta se ha creado correctamente</p>
                    <div className='flex justify-center items-center'>
                        <Link to="/home">
                            <button className='my-8 bg-[#54E360] p-4 rounded-xl text-black font-bold drop-shadow-xl'>Empezar ahora</button>
                        </Link>
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}

