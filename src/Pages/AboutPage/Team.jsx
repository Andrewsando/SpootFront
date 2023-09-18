import BaseLayout from "../../Components/BaseLayout";
import React from "react";
import { useRef } from "react";
import "../../Pages/LandingPage/styles/EntryLanding.css";

export default function Team() {
  const teamSection = useRef(null);

  return (
    <BaseLayout>
      <div className="bg-black text-white font-sans text-lg">
        <div className="bg-Team">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-between p-7 my-20 ">
            <div className="lg:w-1/2 lg:mr-10 mt-6">
              <h1 className="text-4xl tracking-tight font-extrabold text-[#54E360] text-center">
                Equipo SpootChat
              </h1>
              <p className="text-2xl text-left my-10">
                Somos un equipo interdisciplinario al que le encanta crear
                grandes experiencias y hacer conexiones significativas entre
                <span className="font-bold"> oyentes y creadores.</span>
                <br />
                <br />
                Obtenga más información sobre nuestra comunidad de diseño a
                continuación y explore las últimas novedades.
              </p>
              <div className="flex items-center justify-center"></div>
            </div>
          </div>
        </div>
        <div ref={teamSection}>
          <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
              <div className="mx-auto mt-12 max-w-screen-sm text-center mb-8 lg:mb-16">
                <h2 className="mb-12 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Nuestro equipo
                </h2>
                <p className="font-light mb-12 text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                  Nuestro equipo Full Stack de apasionados desarrolladores está
                  en una misión emocionante: crear una aplicación de música que
                  transforme la manera en que experimentamos el mundo sonoro.
                  Desde el back-end robusto que permite el streaming sin
                  problemas hasta la interfaz de usuario intuitiva y atractiva,
                  estamos comprometidos a ofrecerte una experiencia musical
                  única
                </p>
              </div>
              <div className="grid object-fit gap-8 mb-7 lg:mb-8 md:grid-cols-4">
                <div className="flex w-auto flex-col bg-[#00b44b] rounded-lg">
                  <div>
                    <img
                      className="object-cover rounded-md "
                      src="/fotos/Benjamin.jpeg"
                      alt="Benjamin Avatar"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <p>Benjamín Muratore</p>
                    </h3>
                    <span className="text-white dark:text-white">
                      Developer
                    </span>
                   
                    <ul className="flex space-x-4 sm:mt-0">
                      <li>
                        <a
                          href="https://github.com/BenjaMura"
                          className="text-black hover:text-black dark:hover:text-white"
                        >
                          <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5"
  fill="currentColor"
  viewBox="0 0 24 24">
  <path
    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
</svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-[#00b44b] rounded-lg">
                  <div className="object-contain">
                    <img
                      className=" rounded-md object-cover"
                      src="/fotos/Valentinaa.jpeg"
                      alt="Valentina Avatar"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <p>Valentina Ortiz</p>
                    </h3>
                    <span className="text-white dark:text-white">
                      Developer
                    </span>
                    <ul className="flex space-x-4 sm:mt-0">
                      <li>
                        <a
                          href="https://github.com/svalentinaog"
                          className="text-black hover:text-black dark:hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                      <a
                          href="https://www.linkedin.com/in/svalentinaog"
                          className="text-black hover:text-black dark:hover:text-white"
                        >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 "
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                        </a>

                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex-col bg-[#00b44b] rounded-lg">
                  <div >
                    <img
                      className="rounded-md"
                      src="/fotos/Andres.jpeg"
                      alt="Andres Avatar"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <div>Andrés Torres</div>
                    </h3>
                    <span className="text-white dark:text-white">
                      Developer
                    </span>

                    <ul className="flex space-x-4 sm:mt-0">
                    <li>
                        <a
                          href="https://github.com/Andrewsando"
                          className="text-black hover:text-black dark:hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                      <a
                          href="https://www.linkedin.com/in/andrewsando/"
                          className="text-black hover:text-black dark:hover:text-white"
                        >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 "
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                        </a>

                      </li>
                    </ul>
                  </div>
                </div>
                <div className=" flex-col bg-[#00b44b] rounded-lg">
                  <div>
                    <img
                      className="rounded-md"
                      src="/fotos/Ezequiel.jpg"
                      alt="Ezequiel Avatar"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <div>Ezequiel Benitez</div>
                    </h3>
                    <span className="text-white dark:text-white">
                    Developer
                    </span>
                    <ul className="flex space-x-4 sm:mt-0">
                    <li>
                        <a
                          href="https://github.com/Eze-quielph"
                          className="text-black hover:text-black dark:hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                      <a
                          href="https://www.linkedin.com/in/ezequiel-benitez2203/"
                          className="text-black hover:text-black dark:hover:text-white"
                        >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 "
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                        </a>

                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex-col bg-[#00b44b] rounded-lg">
                  <div>
                    <img
                      className="rounded-md"
                      src="/fotos/Humberto.jpeg"
                      alt="Humberto Avatar"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <p>Humberto Martinez</p>
                    </h3>
                    <span className="text-white dark:text-white">
                    Developer
                    </span>
                    <ul className="flex space-x-4 sm:mt-0">
                    <li>
                        <a
                          href="https://github.com/Hawkins5"
                          className="text-black hover:text-black dark:hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                      <a
                          href="https://www.linkedin.com/in/humberto-andr%C3%A9s-mart%C3%ADnez-mercado-b2a41323b/"
                          className="text-black hover:text-black dark:hover:text-white"
                        >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 "
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                        </a>

                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex-col bg-[#00b44b] rounded-lg">
                  <div>
                    <img
                      className="rounded-md"
                      src="/fotos/Imanol.jpeg"
                      alt="Imanuel Avatar"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <div>Imanol Herrero</div>
                    </h3>
                    <span className="text-white dark:text-white">Developer</span>
                    <ul className="flex space-x-4 sm:mt-0">
                    <li>
                        <a
                          href="https://github.com/ImanolHerrero"
                          className="text-black hover:text-black dark:hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                      <a
                          href="https://www.linkedin.com/in/imanol-herrero-arias-932956247/"
                          className="text-black hover:text-black dark:hover:text-white"
                        >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 "
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                        </a>

                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex-col bg-[#00b44b] rounded-lg">
                  <a href="#">
                    <img
                      className="object-cover rounded-lg sm:rounded-none sm:rounded-l-lg"
                      src="/fotos/Uriel.jpeg"
                      alt="Uriel Avatar"
                    />
                  </a>
                  <div className="p-5">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <div>Uriel</div>
                    </h3>
                    <span className="text-white dark:text-white">
                    Developer
                    </span>
                    <ul className="flex space-x-4 sm:mt-0">
                    <li>
                        <a
                          href="https://github.com/wpxchi"
                          className="text-black hover:text-black dark:hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                      <a
                          href="https://www.linkedin.com/in/uriel-castillo-b782b0270/"
                          className="text-black hover:text-black dark:hover:text-white"
                        >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 "
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                        </a>

                      </li>

                    </ul>
                  </div>
                </div>
                <div className="flex-col bg-[#00b44b] rounded-lg">
                  <div>
                    <img
                      className="rounded-md"
                      src="/fotos/Emerson.jpeg"
                      alt="Emerson Avatar"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <div>Emerson Palacio</div>
                    </h3>
                    <span className="text-white dark:text-white">
                    Developer
                    </span>
                    <ul className="flex space-x-4 sm:mt-0">
                    <li>
                        <a
                          href="https://github.com/emersonpalacio?tab=repositories"
                          className="text-black hover:text-black dark:hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                      <a
                          href="https://www.linkedin.com/in/emerson-palacio-otalvaro/"
                          className="text-black hover:text-black dark:hover:text-white"
                        >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 "
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                        </a>

                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="my-2 mx-80 mb-32">
            <h1 className=" text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center mb-20 mt-20">
              Nuestras disciplinas
            </h1>
            <div className="grid gap-6 grid-cols-2">
              <a
                href="#"
                className="grid max-w-sm p-6 bg-[#00b44b] border border-gray-200 rounded-lg shadow hover:bg-gray-100 darkbg-[#00b44b] dark:border-black dark:hover:bg-[#22C55E]"
              >
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  Diseño del producto
                </h5>
                <p className="font-normal text-black-700 dark:text-black">
                  Los diseñadores de productos de SpootChat se esfuerzan por
                  brindar la mejor experiencia posible a oyentes y creadores,
                  haciendo que disfrutar de Spootchat sea fácil y personalizado.
                </p>
              </a>
              <a
                href="#"
                className="block max-w-sm p-6 bg-[#00b44b] border border-black rounded-lg shadow hover:bg-gray-100 dark:bg-[#00b44b] dark:border-black dark:hover:bg-[#22C55E]"
              >
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  Diseño editorial
                </h5>
                <p className="font-normal text-black dark:text-black">
                  El diseño editorial en SpootChat crea marcas y experiencias
                  para nuestra audiencia global, definiendo la cultura para
                  nuestros oyentes en todo el mundo.
                </p>
              </a>
              <a
                href="#"
                className="block max-w-sm p-6 bg-[#00b44b] border border-black rounded-lg shadow hover:bg-gray-100 dark:bg-[#00b44b] dark:border-black dark:hover:bg-[#22C55E]"
              >
                <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
                  Diseño de herramientas internas
                </h5>
                <p className="font-normal text-black dark:text-black">
                  Nuestros expertos en herramientas internas construyen
                  tecnología que permite a Spotify aprender y escalar
                  rápidamente, apoyando nuestro crecimiento global de usuarios y
                  negocios.
                </p>
              </a>
              <a
                href="#"
                className="block max-w-sm p-6 bg-[#00b44b] border border-black rounded-lg shadow hover:bg-gray-100 dark:bg-[#00b44b] dark:border-black dark:hover:bg-[#22C55E]"
              >
                <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
                  Operaciones de diseño
                </h5>
                <p className="font-normal text-black dark:text-black">
                  Design Ops mejora nuestra práctica y comunidad al simplificar
                  el proceso de diseño y promover su disfrute, fortaleciendo
                  herramientas, aprendizaje y cultura.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
