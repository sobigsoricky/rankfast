import React, { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <header aria-label="Site Header" className="bg-transparent absolute w-full top-10 z-[999]">
        <div className="mx-auto container   sm:px-6 lg:px-[120px] px-2">
          <div className="flex  items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="/">
               
                <img src="/logo.svg" alt="" />
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Site Nav" className={`${showMenu?"block":"hidden"} lg:block`}>
                <ul className="flex fixed right-0 top-[140px] w-full h-full  bg-[#E72C4B] md:bg-transparent md:static  flex-col lg:flex-row items-center gap-6 text-sm">
                <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/"
                    >
                      Our Process
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/"
                    >
                      Coursenator
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/"
                    >
                      Ed-tech
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/"
                    >
                      Portfolio
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/"
                    >
                     Blog
                    </a>
                  </li>
                  <li className="sm:flex sm:gap-4">
                  <a
                    className=" bg-[#E72C4B] px-11 py-4 text-sm font-medium text-white"
                    href="/"
                  >
                    Contact us
                  </a>
                </li>
                 
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                

                <div className="block md:hidden ">
                  <button onClick={e => setShowMenu(!showMenu)} className="rounded  p-2 text-white transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
