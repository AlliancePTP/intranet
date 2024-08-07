import React from 'react'

const MVV = () => {
  return (
    <div className='flex justify-between gap-4 mt-8'>
      <div className="w-1/3 bg-aptpgreen">
        <div className="flex flex-col justify-center p-4">
          <h5 className='my-1 text-4xl text-white drop-shadow-lg w-60 dark:text-white font-universSubheading'>
            <span className=''>Mission</span>
          </h5>
          <p className='italic text-white'>
            To enhance the lives of our patients and partners with care and compassion.
          </p>
        </div>
      </div>
      <div className="w-1/3 bg-aptppurple">
        <div className="flex flex-col justify-center p-4">
          <h5 className='my-1 text-4xl text-white drop-shadow-lg w-60 dark:text-white font-universSubheading'>
            <span className=''>Vision</span>
          </h5>
          <p className='italic text-white'>
            Deliver world-class patient care to the communities we serve.
          </p>
        </div>
      </div>
      <div className="w-1/3 bg-aptpred">
        <div className="flex flex-col justify-center p-4">
          <h5 className='my-1 text-4xl text-white drop-shadow-lg w-60 dark:text-white font-universSubheading'>
            <span className=''>Values</span>
          </h5>
          <p className='italic text-white'>
            Put PEOPLE FIRST<br />
            Lead with INTEGRITY<br />
            Treat with COMPASSION<br />
            Build lasting RELATIONSHIPS<br />
          </p>
        </div>
      </div>
    </div>
  )
}

export default MVV