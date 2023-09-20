import BaseLayout from "../../Components/BaseLayout";
import { BiSolidErrorCircle } from 'react-icons/bi';
import { Link } from "react-router-dom";

export default function PremiumFail() {
    return (
        <BaseLayout>
            <div className="text-white text-xl grid h-screen place-items-center p-4 bg-gradient-to-r from-[#141921] to-[#000000]">
                <div className="text-center">
                    <div className="flex w-full justify-center items-center">
                        <BiSolidErrorCircle style={{ color: "#EF4444", fontSize: "80px" }} />
                    </div>
                    <h1 className="text-red-500 my-2 text-4xl font-bold">Pago no realizado</h1>
                    <h1 className="text-red-500 my-4 text-4xl">Hubo un error procesando la transacción</h1>
                    <p>No hemos podido realizar el pago de SpootChat premium.</p>
                    <p>Revisa tus datos e inténtalo de nuevo por favor.</p>
                    <Link to="/home">
                        <button className='m-16 -mb-8 bg-[#54E360] p-4 rounded-xl text-black font-bold shadow-xl hover:bg-white hover:shadow-[#54E360]/25'>Volver</button>
                    </Link>
                </div>
            </div>
        </BaseLayout>
    )
}
