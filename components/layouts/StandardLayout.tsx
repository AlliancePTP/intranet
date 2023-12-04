import * as React from 'react';
// import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react';



import LogRocket from 'logrocket'
import { useSession } from 'next-auth/react'
import { useNotionContext } from 'react-notion-x'

import Dropdown from '@/components/Dropdown'
import Footer from '@/components/Footer'
import Search from '@/components/Search'


LogRocket.init('9rsy9p/intranet')

export const StandardLayout: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  // const router = useRouter()
  const [searchResults, setSearchResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const { components, mapPageUrl } = useNotionContext()
  console.log(components)
  const { data: session } = useSession()

  // Reference for click event listener
  const wrapperRef = useRef(null)

  // This is an example script - don't forget to change it!
  LogRocket.identify(session?.user.email, {
    name: session?.user.name,
    email: session?.user.email

    // Add your own custom user variables here, ie:
  })

  useEffect(() => {
    // Function executed when clicked outside of result container
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSearchResults([])
        setShowResults(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
            <div className='w-full bg-aptpblue'>
          <div className='container w-full p-2 mx-auto text-xl text-center text-white'>File downloads and some previews are not working as intended. We are currently working to fix this issue.</div>
        </div>
      <header className={'flex flex-col-reverse w-full'}>
        <nav className='container mx-auto border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-900 dark:border-gray-800 order-1'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start flex-shrink-0'>
              <a href='/' className='flex mr-6'>
                <img
                  src='/aptp-logo.png'
                  className='h-20 mr-3'
                  alt='Alliance PTP Logo'
                />
                {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Alliance PTP</span> */}
              </a>
            </div>
            <Dropdown />

            <div className='flex items-center justify-between flex-shrink-0 ml-4 sm:hidden lg:order-2'>
              <button
                type='button'
                id='toggleMobileMenuButton'
                data-collapse-toggle='toggleMobileMenu'
                className='items-center p-2 text-gray-500 rounded-lg md:ml-2 md:hidden hover:text-white hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
              >
                <span className='sr-only'>Open menu</span>
                <svg
                  className='w-6 h-6'
                  aria-hidden='true'
                  fill='black'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <div className='bg-aptpblue'>
          <nav
            id='toggleMobileMenu'
            className='container order-3 hidden mx-auto text-white shadow-sm dark:bg-gray-900 md:block dark:border-gray-800 md:order-2'
          >
            <div ref={wrapperRef} className='px-4 py-3 lg:px-6'>
              <div
                id='mega-menu-full-image'
                className='items-center justify-between w-full pl-6 sm:hidden md:flex md:w-auto md:order-1'
              >
                <ul className='flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0'>
                  <li>
                    <a
                      href='/'
                      className='block py-2 pl-3 pr-4 font-bold text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
                      aria-current='page'
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <button
                      id='mega-menu-full-cta-image-button'
                      data-collapse-toggle='mega-menu-full-image-dropdown'
                      className='flex items-center justify-between w-full py-2 pl-3 pr-4 font-bold text-white border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-100 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
                    >
                      Our Teams{' '}
                      <svg
                        className='w-2.5 h-2.5 ml-2.5'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 10 6'
                      >
                        <path
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='m1 1 4 4 4-4'
                        />
                      </svg>
                    </button>
                  </li>
                  <li>
                    <a
                      href='/news'
                      className='block py-2 pl-3 pr-4 font-bold text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
                    >
                      Company News
                    </a>
                  </li>
                  <li>
                    <a
                      href='/connect'
                      className='block py-2 pl-3 pr-4 font-bold text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
                    >
                      Stay Connected
                    </a>
                  </li>
                  <li>
                    <a
                      href='/jobs'
                      className='block py-2 pl-3 pr-4 font-bold text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
                    >
                      Open Jobs
                    </a>
                  </li>
                </ul>
                <div className='flex flex-col items-center justify-between md:flex-row'>
                  <Search setSearchResults={setSearchResults} />
                  {searchResults?.length > 0 && (
                    <div className='absolute right-0 z-10 w-full max-w-sm mt-16 bg-white border border-gray-200 rounded-lg shadow-lg sm:mt-0 sm:top-40'>
                      <ul className='divide-y divide-gray-200'>
                        {searchResults.map((result) => (
                          <li key={result.id}>
                            <a
                              href={mapPageUrl(result.id)}
                              className='block px-4 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100'
                            >
                              <h2 className='text-base font-medium text-black'>
                                {result.title}
                              </h2>

                              <p className='mt-1 text-sm leading-tight text-gray-500'>
                                {result.description}
                              </p>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {/* <ToggleThemeButton /> */}
                </div>
              </div>
            </div>
            <div
              id='mega-menu-full-image-dropdown'
              className='absolute z-40 hidden w-full mt-1 -ml-20 transition-all bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600'
            >
              <div className='grid justify-around px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-2 md:px-6'>
                <ul
                  className='pr-10 mb-4 space-y-4 md:mb-0 md:block'
                  aria-labelledby='mega-menu-full-image-button'
                >
                  <li>
                    <a
                      href='/02ddedf1-8c36-4081-86e1-e65e800ade10'
                      className='font-bold hover:underline hover:text-blue-600 dark:hover:text-blue-500'
                    >
                      Front Office
                    </a>
                    <p>
                      View resources, forms and updates regarding our front
                      office operations teams nationwide.
                    </p>
                  </li>
                  <li>
                    <a
                      href='/bd941b39-cf66-4714-9d15-a6e3acfbdec8'
                      className='font-bold hover:underline hover:text-blue-600 dark:hover:text-blue-500'
                    >
                      Marketing
                    </a>
                    <p>
                      Request project support, view online store options and
                      more.
                    </p>
                  </li>
                  <li>
                    <a
                      href='/a465a6ca-79d5-4213-8514-6eac0c5201a1'
                      className='font-bold hover:underline hover:text-blue-600 dark:hover:text-blue-500'
                    >
                      Clinical Operations
                    </a>
                    <p>
                      View resources, forms, and updates regarding our clinical
                      operations teams nationwide.
                    </p>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='font-bold hover:underline hover:text-blue-600 dark:hover:text-blue-500'
                    >
                      Information Technology (Coming Soon!)
                    </a>
                    <p>
                      Connect with the help desk and view updates to our
                      technology advances.
                    </p>
                  </li>
                  <li>
                    <a
                      href='/6a914851f53845f2a8f9f36477988b6b'
                      className='font-bold hover:underline hover:text-blue-600 dark:hover:text-blue-500'
                    >
                      Workers Compensation
                    </a>
                    <p>
                      Connect with the help desk and view updates to our
                      technology advances.
                    </p>
                  </li>
                  <li>
                    <a
                      href='/f4f28e1f-4c45-453d-8fad-c175fffb049a'
                      className='font-bold hover:underline hover:text-blue-600 dark:hover:text-blue-500'
                    >
                      Human Resources
                    </a>
                    <p>
                      View resources, forms, and policies related to your
                      benefits or HR concerns.
                    </p>
                  </li>
                </ul>
                <ul className='mb-4 space-y-4 md:mb-0'>
                  <li>
                    <a
                      href='/6665d94f9e3b41b096b88737af9b7a6a'
                      className='font-bold hover:underline hover:text-blue-600 dark:hover:text-blue-500'
                    >
                      Continuing Education
                    </a>
                    <p>
                      Check out resources, forms, and updates related to our
                      continuing education and leadership development program.
                    </p>
                  </li>
                  <li>
                    <a
                      href='/69ff00c706b347fdbdc7550348af998b'
                      className='font-bold hover:underline hover:text-blue-600 dark:hover:text-blue-500'
                    >
                      Compliance (Coming Soon!)
                    </a>
                    <p>
                      Maintain quality, compassionate, fiscally responsible
                      level of care through these resources, policies and
                      updates.
                    </p>
                  </li>

                  <li>
                    <a
                      href='#'
                      className='font-bold hover:underline hover:text-blue-600 dark:hover:text-blue-500'
                    >
                      Revenue Cycle (Coming Soon!)
                    </a>
                    <p>
                      View resources, forms, and policies related to the Patient
                      Services teams.
                    </p>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='font-bold hover:underline hover:text-blue-600 dark:hover:text-blue-500'
                    >
                      Workfit (Coming Soon)
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='font-bold hover:underline hover:text-blue-600 dark:hover:text-blue-500'
                    >
                      Biocorrect (Coming Soon)
                    </a>
                    <p>
                      Learn more about how to refer to Biocorrect and what
                      benefits are available for our team members.
                    </p>
                  </li>
                </ul>
                {/* <a
                  href='/a465a6ca-79d5-4213-8514-6eac0c5201a1'
                  className='p-8 ml-6 text-left bg-local bg-center bg-no-repeat bg-cover rounded-lg bg-aptpgrey bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken'
                  style={{
                    backgroundImage: 'url(/docs/images/dashboard-overview.png)'
                  }}
                >
                  <p className='max-w-xl mb-5 font-bold leading-tight tracking-tight text-white'>
                    Clinical Operations
                  </p>
                  <p className='max-w-xl mb-5 leading-tight tracking-tight text-white'>
                    View resources, forms and updates regarding our clinical
                    operations teams nationwide.
                  </p>
                  <button
                    type='button'
                    className='inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-700'
                  >
                    Visit
                    <svg
                      className='w-3 h-3 ml-2'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 14 10'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M1 5h12m0 0L9 1m4 4L9 9'
                      />
                    </svg>
                  </button>
                </a> */}
              </div>
            </div>
          </nav>
        </div>
      </header>
      {showResults && (
        <div
          ref={wrapperRef}
          className='absolute right-0 z-[310] w-full max-w-sm bg-white border border-gray-[200] rounded-lg shadow-lg top-full mt-[5px]'
        >
          <ul className='divide-y divide-gray-[200]'>
            {searchResults.map((result) => (
              <li key={result.id}>...</li>
            ))}
          </ul>
        </div>
      )}

      {children}
      <Footer />
    </>
  )
}