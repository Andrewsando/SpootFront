import BaseLayout from "../../Components/BaseLayout";
import { useDispatch } from 'react-redux';
import { resetPassword } from '../../Redux/Actions/Users.js';


export default function RecoverPassword() {

  const dispatch = useDispatch();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    dispatch(resetPassword(email, password));
  };


  return (
    <BaseLayout>
      <div className="container-general-formLogin">
        <img src="/images/spotify.png" alt="Logotipo" className="h-12 w-12 mx-auto mt-52" />
        <div className="mt-4 text-white">
          <p className="block text-2xl text-center font-bold ">Restablecer tu contraseña</p>
          <p className="block mx-80 text-lg text-center mt-7">
            Por favor, ingrese su dirección de correo electrónico para garantizar que su contraseña se haya actualizado correctamente.
          </p>
        </div>
        <main id="content" role="main" className="w-full  max-w-md mx-auto p-6 mt-1 mb-24" >
          <div className="mt-7 bg-[#1c2026] rounded-xl shadow-lg">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <p className="block text-lg text-center font-bold text-white">
                  ¿Recuerdas tu contraseña?
                  <a
                    className="text-green-600 decoration-2 hover:underline font-medium"
                    href="/access-to"
                  >
                    <br></br>
                    Ingrese acá
                  </a>
                </p>
              </div>

              <div className="mt-5">
                <form onSubmit={handleFormSubmit}>
                  <div className="grid gap-y-4">
                    <div>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="py-3 px-4 block w-full border-2 border-black rounded-md text-sm focus:border-green-500 focus:ring-green-500 shadow-sm"
                          required
                          placeholder="Correo Electrónico"
                          aria-describedby="email-error"
                        />
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="email-error"
                      >
                        Por favor incluya un correo válido
                      </p>

                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="py-3 px-4 block w-full border-2 border-black rounded-md text-sm focus:border-green-500 focus:ring-green-500 shadow-sm"
                        required
                        placeholder="Nueva Contraseña"
                      />

                    </div>
                    <button
                      type="submit"
                      className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"

                    >
                      Continuar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </BaseLayout>
  );
}
