import React, { useState, useEffect } from "react";
import BaseLayout from "../../Components/BaseLayout";
import { AiFillCheckCircle } from 'react-icons/ai';
import { Link } from "react-router-dom";

export default function PremiumSuccess() {
    const [count, setCount] = useState(10646523);

    useEffect(() => {
        const id = setInterval(() => setCount((oldCount) => oldCount + 1), 2500);

        return () => {
            clearInterval(id);
        };
    }, []);

    return (
        <BaseLayout>
            <div className="text-white text-xl grid h-screen place-items-center p-4 bg-gradient-to-r from-[#141921] to-[#000000]">
                <div className="text-center">
                    <div className="flex w-full justify-center items-center">
                        <AiFillCheckCircle color="#54E360" size={80} />
                    </div>
                    <h1 className="text-[#54E360] my-2 text-4xl font-bold">Pago realizado</h1>
                    <h1 className="text-[#54E360] my-4 text-4xl">Tu cuenta premium se ha acreditado con éxito!</h1>
                    <p>Gracias por tu compra y unirte a los <span className="font-bold">{count.toLocaleString()}</span> usuarios que confían en nosotros</p>
                    <p>Empieza a disfrutar de todos los beneficios de SpootChat premium <span className="underline underline-offset-4 decoration-[#54E360] font-bold">sin límite</span></p>
                    <Link to="/home">
                        <button className='m-16 -mb-8 bg-[#54E360] p-4 rounded-xl text-black font-bold shadow-xl hover:bg-white hover:shadow-[#54E360]/25'>Empezar</button>
                    </Link>
                </div>
            </div>
        </BaseLayout>
    )
}
