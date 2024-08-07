/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const PreviousAnnouncements = () => {
  const [selectedType, setSelectedType] = useState(null)
  const [announcements, setAnnouncements] = useState([])

  const getAnnouncements = async () => {
    const supabase = createClientComponentClient()
    const { data } = await supabase.from('announcements').select('*').order('created_at', {ascending: false})
    setAnnouncements(data)
  }

  const data = announcements
  useEffect(() => {
    getAnnouncements()
  }, [])

  return (
    <div className='col-span-1 mt-6'>
      <div className='relative max-w-sm p-6 rounded-lg sm:max-w-full '>
        <h2 className='mb-12 text-5xl font-bold font-universHeading'>
          Previous News
        </h2>
        {/* Filter buttons */}
        <div className='mb-8'>
          <button
            className={`mr-4 px-4 py-2 rounded-md ${
              selectedType === null
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setSelectedType(null)}
          >
            All
          </button>
          <button
            className={`mr-4 px-4 py-2 rounded-md ${
              selectedType === 'ceo'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setSelectedType('CEO')}
          >
            CEO
          </button>
          <button
            className={`mr-4 px-4 py-2 rounded-md ${
              selectedType === 'newsletter'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setSelectedType('Newsletter')}
          >
            Newsletter
          </button>
          {/* Add more buttons for other types if needed */}
        </div>
        <div className='flex flex-col w-full gap-6 p-4 overflow-x-scroll gap-x-20 sm:flex-wrap sm:max-h-120'>
          {data?.map(
            (announcement) =>
              (!selectedType || announcement.type === selectedType) && (
                <a
                  key={announcement.id}
                  href={`/announcements/${announcement.id}`}
                  className='transition-all hover:scale-110'
                >
                  <div className='flex gap-4 '>
                    <div
                      className='flex items-center justify-center w-20 h-20 font-mono font-bold text-gray-700 bg-cover rounded-md shrink-0'
                      style={{
                        backgroundImage: announcement.image
                          ? `url(${announcement.image})`
                          : announcement.type === 'CEO'
                          ? `url('/favicon.png')`
                          : announcement.type === 'Newsletter'
                          ? `url('/icons/intranet-icons_icon-newsletter.png')`
                          : `url('/icons/intranet-icons_icon-announcements.png')`
                      }}
                    ></div>
                    <div className='flex flex-col gap-2 grow-0'>
                      <span className='text-gray-400'>
                        {announcement?.date?.split(' ')[0]}
                      </span>
                      <p className='font-bold text-gray-600'>
                        {announcement.title}
                      </p>
                    </div>
                  </div>
                </a>
              )
          )}
          
        </div>
      </div>
    </div>
  )
}

export default PreviousAnnouncements
