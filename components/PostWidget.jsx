import React, { useEffect } from 'react'
import moment from 'moment'
import Link from 'next/Link'
import Image from 'next/Image'
import graphCMSIMageLoader from '../util'
import { getRecentPosts, getSimilarPosts } from '../services'


const PostWidget = ({categories, slug}) => {
  const [relatedPosts, setRelatedPosts] = React.useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result)
      })
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      })
    }
  }, [slug]);
  console.log(relatedPosts)
  return (
    <div className='bg-gray-300 shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>{slug ? 'Similar Posts' : 'Recent Posts'}</h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className='mb-4 flex items-center w-full'>
          <div className='w=16 flex-none'>
            <Image
              loader={graphCMSIMageLoader}
              alt={post.title}
              height='60px'
              width='60px'
              unoptimized
              src={post.featuredImage.url}
              className='rounded align-middle'
            />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-gray-500 font-xs'>{moment(post.createdAt).format('MMM DD, YYY')}</p>
            <Link href={`/post/${post.slug}`} className='text-md' key={index}>{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget