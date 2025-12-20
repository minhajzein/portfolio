'use client'

import { blogPosts } from '@/data/blogs'
import BlogCard from './BlogCard'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'

function BlogSection() {
    return (
        <div className='flex w-full flex-col'>
            <Carousel className='w-full relative'>
                <CarouselContent>
                    {blogPosts.map((blog, i) => (
                        <CarouselItem
                            key={`${blog.id}-${i}`}
                            className='md:basis-1/2 lg:basis-1/3'
                        >
                            <BlogCard blog={blog} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className='absolute top-full translate-y-full right-12 flex gap-2 pt-4'>
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
        </div>
    )
}

export default BlogSection
