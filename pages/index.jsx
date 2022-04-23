import { PostCard, PostWidget, Categories } from '../components'
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections/index'

const Home = ({posts}) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <h3 className='mb-8 font-semibold pb-4 text-cyan-200 col-span-6 m-6 text-center text-xl'>Featured Post</h3>
      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
      <div className='lg:col-span-8 col-span-1'>
        {posts.map((post) => <PostCard post={post.node} key={post.title} />)}
      </div>
      <div className='lg:col-span-4 col-span-1'>
        <div className='lg:sticky relative top-8'>
          <PostWidget />
          <Categories/>
        </div>
      </div>
    </div>
  </div>
  )
}

export const getStaticProps = async () => {
  const posts = await getPosts()
  return {
    props: {
      posts
    }
  }
}

export default Home
