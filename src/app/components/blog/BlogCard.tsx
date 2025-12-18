'use client'

import { BlogPost } from '@/data/blogs'
import Image from 'next/image'
import Link from 'next/link'

function BlogCard({ blog }: { blog: BlogPost }) {
    return (
        <Link
            href={`/blog/${blog.id}`}
            className='flex flex-col group border border-secondary hover:border-primary duration-300 overflow-hidden'
        >
            <div className='relative w-full h-[200px] overflow-hidden'>
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className='object-cover group-hover:scale-110 duration-500'
                />
            </div>
            <div className='p-[16px] flex flex-col gap-[12px]'>
                <div className='flex flex-wrap gap-[8px]'>
                    {blog.tags.map((tag, i) => (
                        <span key={i} className='text-[12px] text-primary'>
                            #{tag}
                        </span>
                    ))}
                </div>
                <h3 className='text-[18px] font-bold leading-tight group-hover:text-primary duration-300'>
                    {blog.title}
                </h3>
                <p className='text-secondary text-[14px] line-clamp-2'>
                    {blog.description}
                </p>
                <div className='flex justify-between items-center pt-[12px] border-t border-secondary/20 mt-auto'>
                    <span className='text-[12px] text-secondary'>{blog.date}</span>
                    <span className='text-[14px] text-primary'>Read Post ~&gt;</span>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard
