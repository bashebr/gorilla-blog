import React, {useState, useEffect} from 'react'
import Link from 'next/Link'
import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategory) => setCategories(newCategory));
    }, [])

  return (
    <div className='bg-gray-300 shadow-lg rounded-lg p-8 mb-8 pb-12'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Categories</h3>
       {categories.map((category, index) => (
         <Link key={index} href={`/category/${category.slug}`}>
            <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{category.name}</span>
          </Link>
        ))}
    </div>
  )
}
export default Categories