import Head from 'next/head'
import Image from 'next/image';
import React from 'react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';


const Announcement = async ({ params }) => {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.from('announcements').select().eq('id', params.id)
  const announcement = data[0]

  console.log(announcement)

  if (!announcement) {
    return <div>Loading</div>
  }

  const style = {
    body: {
      fontSize: '16px',
      fontFamily: 'Arial, sans-serif'
    },
    h1: {
      marginTop: '0',
      marginBottom: '1rem',
      fontSize: '2em',
      lineHeight: '1.2'
    },
    h2: {
      marginTop: '2rem',
      marginBottom: '1rem',
      fontSize: '1.5em',
      lineHeight: '1.3'
    },
    h3: {
      marginTop: '.5 rem',
      marginBottom: '.75 rem',
      fontSize: '1 em ',
      lineHeight: 0.9
    },

    h4: {
      marginTop: '.25 rem',
      marginBottom: '.5 rem',
      fontSize: '0.875 em ',
      lineHeight: 0.9
    },
    p: { marginTop: '0', marginBottom: '' },

    ul: {
      paddingLeft: '20px',
      listStyleType: 'disc'
    },

    ol: {
      paddingLeft: '30px',

      counterReset: 'numberedListCounter',
      '& li': { counterIncrement: 'numberedListCounter' },
      '& li:before': {
        content: "counter(numberedListCounter) '.'",
        position: 'absolute',
        left: '-30px'
      }
    },

    a: {
      color: '#007bff',
      textDecoration: 'underline'
    },

    'a:hover': { textDecoration: 'none !important' }
  }

  return (
    <div>
      <Head>
        <title>{announcement?.title}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex justify-around p-8 mx-auto my-8 bg-white border-b shadow-md sm:rounded-lg dark:bg-gray-800/95 dark:border-gray-700'>
        <div className=''>
          <h1 className='mb-4 text-4xl font-bold font-universHeading'>
            {announcement?.title}
          </h1>
          <p className='text-gray-400'>{announcement?.date}</p>
          {announcement?.author
            ? `<p className='text-gray-400'>From: ${announcement?.author}</p>`
            : ''}
          <div
            dangerouslySetInnerHTML={{ __html: announcement?.message }}
            style={{ style }}
          ></div>
        </div>
        {announcement?.image ? (
          <div className='pl-4'>
            <Image
              src={announcement?.image}
              objectFit='cover'
              width={400}
              height={300}
              alt='Announcement Image'
            />
          </div>
        ) : announcement?.type === 'ceo' ? (
          <div className='pl-4'>
            <Image
              src={'/richard.png'}
              objectFit='cover'
              width={800}
              height={1000}
              alt='CEO Image'
            />
          </div>
        ) : (
          <div className='pl-4'>
            <Image
              src={'/generic-announcement.png'}
              objectFit='cover'
              width={400}
              height={300}
              alt='Announcement Image'
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Announcement