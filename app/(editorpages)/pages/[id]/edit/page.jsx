import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import EditorPage from '@/app/editor-edit-instance';
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic';


const Pages = async ({ params }) => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.from('pages').select().eq('id', params.id);
  const page = data[0];
  
  const { data: { session } } = await supabase.auth.getSession()
  
  if (session.user.email !== undefined) {
    const user = session.user.email.split('@')
  }
  
  const profile = await supabase.from('profiles').select().eq('id', session.user.id);

    if (!profile.data[0].role === 'admin') {
    redirect('/login')
  }

  console.log('pro', profile.data[0].role)

  const addToPage = async (formData) => {
    'use server';
    const title = String(formData.get('title'));
    const departments = Number(formData.get('departments'));
    const document = Boolean((formData.get('document') == null ? false : true));
    const supabase = createServerActionClient < Database > ({ cookies });
    const { data } = await supabase.from('pages').insert({ title, departments, document }).select();
    if (data) {
      redirect(`/pages/${data[0].id}`);
    }
  };


  if (!page) {
    return <div>Loading</div>;
  }


  return (
    <div>
      <Head>
        <title>{page?.title}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex flex-wrap justify-around p-8 mx-auto my-8 bg-white border-b shadow-md sm:rounded-lg dark:bg-gray-800/95 dark:border-gray-700'>
        <div className='w-full'>
          <h1 className='mb-4 font-bold text-center text-8xl font-universHeading'>
            {page?.title}
          </h1>
          {/* <p className='text-gray-400'>{page?.date}</p>
          {page?.author
            ? `<p className='text-gray-400'>From: ${page?.author}</p>`
            : ''} */}
          {/* TODO: Need to get the initial page blocks sent to the editor */}
        </div>
        <EditorPage id={params.id} initBlocks={page?.blocks} edit />
      </div>
    </div>
  );
};

export default Pages;
