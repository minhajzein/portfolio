'use client'

import { blogPosts } from '@/data/blogs'
import BlogCard from './BlogCard'

function BlogSection() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]'>
            {blogPosts.map(blog => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
    )
}

export default BlogSection
