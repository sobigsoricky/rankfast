import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <header aria-label="Site Header" className="bg-transparent absolute w-full top-10 z-[999]">
        <div className="mx-auto container   sm:px-6 lg:px-[120px] px-2">
          <div className="flex  items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className="block text-white font-[impact] text-3xl md:text-7xl" href="/">
               RankFast
                {/* <img src="/logo.svg" alt="" /> */}
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Site Nav" className={`${showMenu?"block":"hidden"} lg:block`}>
                <ul className="flex fixed right-0 top-[140px] w-full h-full  bg-[#E72C4B] md:bg-transparent md:static  flex-col lg:flex-row items-center gap-6 text-sm">
                <li>
                    <Link
                      href="/our-process"
                      className="text-white transition hover:text-white/75"
                    >
                      Our Process
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white transition hover:text-white/75"
                      href="https://www.coursenator.com/"
                      target={"_blank"}

                    >
                      Coursenator
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white transition hover:text-white/75"
                      href="/edtech"
                    >
                      Ed-tech
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white transition hover:text-white/75"
                      href="/portfolio"
                    >
                      Portfolio
                    </Link>
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
                  <Link
                    className=" bg-[#E72C4B] px-11 py-4 text-sm font-medium text-white"
                    href="/contact-us"
                  >
                    Contact us
                  </Link>
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
