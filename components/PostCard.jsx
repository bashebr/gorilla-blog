import React from 'react'
import moment from 'moment'
import Link from 'next/Link'
import Image from 'next/Image'
import graphCMSIMageLoader from '../util'

const PostCard = ({ post }) => {
  return (
    <div className='bg-gray-300 rounded-lg p-0 lg:p-8 pb-12 mb-8 ring-1 ring-slate-900/5 shadow-xl'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6' key={post.title}>
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
        />
        </div>
        <h1 className='transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold text-slate-900 dark:text-white'>
        <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>
        </h1>
        <div className='block lg:flex text-center items-center justify-center mb-8'>
          <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 hover:shadow-lg'>
            <Image
              unoptimized
              loader={graphCMSIMageLoader}
              alt={post.author.name}
              height='30px'
              width='30px'
              className='rounded-full align-middle'
              src={post.author.photo.url}
            />
            <p className='inline align-middle text-gray-700 ml-2 font-medium text-lg'>{post.author.name}</p>
          </div>
          <div className='font-medium text-gray-700 text-sm'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className='align-middle'>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>
        <p className='text-slate-500 dark:text-slate-400 text-center font-normal px-4 lg:px-20 mb-8'>{post.excerpt}</p>
        <div className='text-center'>
          <Link href={`/post/${post.slug}`}>
            <span className='transition duration-500 ease transform hover:-translate-y-1 inline-block bg-gradient-to-r from-green-400 to-blue-500 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer hover:from-pink-500 hover:to-yellow-500'>
              Read More
            </span>
          </Link>
        </div>
    </div>
  )
}

export default PostCard