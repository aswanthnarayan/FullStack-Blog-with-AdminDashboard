import React from 'react'
import BlogCard from './Material/BlogCard'

const CardSection = () => {
  return (
    <div className=' px-4 gap-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-2 justify-items-center'>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
    </div>
  )
}

export default CardSection