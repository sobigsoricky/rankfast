import Image from "next/image"
import Link from "next/link"
import React, { useCallback, useEffect, useState } from "react"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const [scrollDirection, setScrollDirection] = useState("no scroll")
  if (typeof window !== "undefined") {
    const [y, setY] = useState(document?.scrollingElement.scrollHeight)

    const handleNavigation = useCallback(
      (e) => {
        if (y > window.scrollY) {
          setScrollDirection("Up")
        } else if (y < window.scrollY) {
          setScrollDirection("down")
        }
        setY(window.scrollY)
      },
      [y]
    )

    useEffect(() => {
      window?.addEventListener("scroll", handleNavigation)

      return () => {
        window?.removeEventListener("scroll", handleNavigation)
      }
    }, [handleNavigation])
  }

  return (
    <>
      <header
        aria-label='Site Header'
        className={
          scrollDirection == "Up" && window?.scrollY > 100
            ? "bg-[#e72c4b] fixed w-full top-0 z-[999] py-2 duration-1000"
            : `bg-transparent ${
                showMenu ? "fixed" : "absolute"
              }  w-full top-10  z-[999] duration-1000 `
        }
      >
        <div className='mx-auto container   sm:px-6 lg:px-[120px] px-2'>
          <div className='flex  items-center justify-between'>
            <div className='flex-1 lg:flex lg:items-center lg:gap-12'>
              <Link
                className=' text-white font-[impact] flex flex-col justify-center '
                href='/'
              >
                {/* Rankfast */}
                <Image
                  src='https://iili.io/HOlVPfe.png'
                  alt=''
                  width={150}
                  height={60}
                  className='z-10 scale-75 md:scale-100'
                />
                {/* <h2 className="-mt-3 text-2xl font-light">Rankfast</h2> */}
              </Link>
            </div>

            <div className=''>
              <nav
                aria-label='Site Nav'
                className={`${showMenu ? "block" : "hidden"} lg:block`}
              >
                <ul className="flex items- fixed right-0 top-0  w-full h-full p-6 lg:p-0  bg-[url('https://iili.io/HOlPogf.png')] bg-cover lg:bg-none lg:static  flex-col justify-center lg:justify-between lg:flex-row items-center gap-10 md:gap-6 text-sm">
                  <li className=''>
                    <Link
                      href='/our-process/'
                      className='text-white transition hover:text-white/75 text-lg md:text-base'
                    >
                      Our Process
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='text-white transition hover:text-white/75 text-lg md:text-base'
                      href='https://www.coursenator.com/'
                      target={"_blank"}
                    >
                      Coursenator
                    </Link>
                  </li>

                  {/* <li>
                    <Link
                      className="text-white transition hover:text-white/75"
                      href="/edtech"
                    >
                      Ed-tech
                    </Link>
                  </li> */}

                  <li>
                    <Link
                      className='text-white transition hover:text-white/75 text-lg md:text-base'
                      href='/portfolio/'
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className=''>
                    <Link
                      href='/services/'
                      className='text-white transition hover:text-white/75 text-lg md:text-base'
                    >
                      Services
                    </Link>
                  </li>

                  <li>
                    <Link
                      className='text-white transition hover:text-white/75 text-lg md:text-base'
                      href='/blog/'
                    >
                      Blog
                    </Link>
                  </li>
                  <li className='w-full md:w-auto'>
                    <Link
                      className='block text-center w-full text-[#E72C4B] px-11 py-4  font-medium bg-white text-lg md:text-base'
                      href='/contact-us/'
                    >
                      Rank Now
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className='flex items-center gap-4'>
                <div className='block lg:hidden '>
                  <button
                    onClick={(e) => setShowMenu(!showMenu)}
                    className='rounded relative z-[999] p-2 text-white transition hover:text-gray-600/75 '
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-7 w-7'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='white'
                      stroke-width='2'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M4 6h16M4 12h16M4 18h16'
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
  )
}

export default Navbar
