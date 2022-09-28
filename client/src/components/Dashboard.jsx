import React, { useEffect, useState } from "react";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";

const Dashboard = () => {
  const [productos, setProductos] = useState(false);
  const [state, setState] = useState(false);

  function handleClickD(e) {
    setProductos(!productos);
  }
  function handleAgregar(){
    setState(!state)
  }
  return (
    <div className="mt-[150px] ml-[250px] mb-[100px] flex flex-row">
      <div class="min-h-screen bg-gray-100">
        <div class="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r border-l border-b border-t w-56 bg-white shadow-lg">
          <div class="flex h-screen flex-col justify-between pt-2 pb-6">
            <div>
              <div class="w-max p-2.5">
                <img
                  src="https://tailus.io/images/logo.svg"
                  class="w-32"
                  alt=""
                />
              </div>
              <ul class="mt-6 space-y-2 tracking-wide">
                <li class=" min-w-max">
                  <a
                    href="#"
                    aria-label="dashboard"
                    class="relative flex  items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                  >
                    <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                        class="fill-current text-cyan-400 dark:fill-slate-600"
                      ></path>
                      <path
                        d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                        class="fill-current text-cyan-200 group-hover:text-cyan-300"
                      ></path>
                      <path
                        d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                        class="fill-current group-hover:text-sky-300"
                      >
                        {" "}
                        Hola{" "}
                      </path>
                    </svg>
                    <div className="flex flex-col ">
                      <div className="flex flex-row">
                        <span class="-mr-1 font-medium">Dashboard</span>
                        <button
                          onClick={(e) => handleClickD(e)}
                          className=" ml-[10px]"
                        >
                          {productos === false ? (
                            <VscChevronDown />
                          ) : (
                            <VscChevronUp />
                          )}
                        </button>{" "}
                      </div>
                      <div className=" flex flex-col">
                        {productos !== false && (
                          <div className=" flex flex-col">
                            <ul class="flex flex-col gap-[5px] w-auto md:grid-cols-2">
                              <li>
                                <input
                                   onClick={(e)=>handleAgregar(e)}
                                  type="radio"
                                  id="agregar"
                                  name="hosting"
                                  value="agregar"
                                  className="hidden peer"
                                  required=""
                                />
                                <label
                                  for="agregar"
                                  className="inline-flex justify-between items-center p-3 w-[auto] h-[10px] text-main-dark bg-main-light  border border-gris-light cursor-pointer dark:hover:text-main-dark dark:border-main-dark dark:peer-checked:text-main-light peer-checked:border-main-dark peer-checked:text-main-light  peer-checked:bg-main-dark hover:text-main-dark hover:bg-gris-light dark:text-main-dark dark:bg-gris-light dark:hover:bg-gris-light "
                                >
                                  <div className="flex items-center">
                                    <div className="w-full text-[15px] font-semibold ">
                                      Agregar Producto
                                    </div>
                                  </div>
                                </label>
                              </li>
                              <li>
                                <input
                                  //  onClick={(e)=>handleSize(e)}
                                  type="radio"
                                  id="modificar"
                                  name="hosting"
                                  value="modificar"
                                  className="hidden peer"
                                  required=""
                                />
                                <label
                                  for="modificar"
                                  className="inline-flex justify-between items-center p-3 w-[auto] h-[10px] text-main-dark bg-main-light  border border-gris-light cursor-pointer dark:hover:text-main-dark dark:border-main-dark dark:peer-checked:text-main-light peer-checked:border-main-dark peer-checked:text-main-light  peer-checked:bg-main-dark hover:text-main-dark hover:bg-gris-light dark:text-main-dark dark:bg-gris-light dark:hover:bg-gris-light "
                                >
                                  <div className="flex items-center">
                                    <div className="w-full text-[15px] font-semibold ">
                                      Modificar Producto
                                    </div>
                                  </div>
                                </label>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </a>
                </li>
                <li class="min-w-max">
                  <a
                    href="#"
                    class="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        class="fill-current text-gray-300 group-hover:text-cyan-300"
                        fill-rule="evenodd"
                        d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                        clip-rule="evenodd"
                      />
                      <path
                        class="fill-current text-gray-600 group-hover:text-cyan-600"
                        d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                      />
                    </svg>
                    <span class="group-hover:text-gray-700">Categories</span>
                  </a>
                </li>
                <li class="min-w-max">
                  <a
                    href="#"
                    class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        class="fill-current text-gray-600 group-hover:text-cyan-600"
                        fill-rule="evenodd"
                        d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                        clip-rule="evenodd"
                      />
                      <path
                        class="fill-current text-gray-300 group-hover:text-cyan-300"
                        d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                      />
                    </svg>
                    <span class="group-hover:text-gray-700">Reports</span>
                  </a>
                </li>
                <li class="min-w-max">
                  <a
                    href="#"
                    class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        class="fill-current text-gray-600 group-hover:text-cyan-600"
                        d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                      />
                      <path
                        class="fill-current text-gray-300 group-hover:text-cyan-300"
                        d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                      />
                    </svg>
                    <span class="group-hover:text-gray-700">Other data</span>
                  </a>
                </li>
                <li class="min-w-max">
                  <a
                    href="#"
                    class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        class="fill-current text-gray-300 group-hover:text-cyan-300"
                        d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                      />
                      <path
                        class="fill-current text-gray-600 group-hover:text-cyan-600"
                        fill-rule="evenodd"
                        d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="group-hover:text-gray-700">Finance</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-max -mb-3">
              <a
                href="#"
                class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 group-hover:fill-cyan-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="group-hover:text-gray-700">Settings</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1000px] h-[939px] border-[1px]">
        {state !== false&& (
          
          <div class="max-w-2xl mx-auto bg-white p-16">
          
            <form>
              <div class="grid gap-6 mb-6 lg:grid-cols-2">
                  <div>
                      <label for="first_name" class=" block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre del Producto</label>
                      <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Camiseta Selección Argentina" required/>
                  </div>
                  <div>
                      <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Marca</label>
                      <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nike" required/>
                  </div>
                  <div>
                      <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Colección</label>
                      <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Qatar" required/>
                  </div>  
                  <div>
                      <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Precio</label>
                      <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$20000"  required/>
                  </div>
                  <div>
                      <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Colores del Producto</label>
                      <input type="url" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Celeste/Blanco" required/>
                  </div>
                  <div>
                      <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Stock </label>
                      <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="5" required/>
                  </div>
              </div>
              <div class="mb-6">
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                  <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
              </div> 
              <div class="mb-6">
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                  <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
              </div> 
              <div class="mb-6">
                  <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
                  <input type="password" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
              </div> 
              <div class="flex items-start mb-6">
                  <div class="flex items-center h-5">
                  <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
                  </div>
                  <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
              </div>
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </form>
          
            
          </div>
        )}
        </div>
    </div>
  );
};

export default Dashboard;
