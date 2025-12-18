import { blogPosts } from '@/data/blogs'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id
    const blog = blogPosts.find(post => post.id === id)
    if (!blog) return {}

    return {
        title: `${blog.title} | Minhaj's Blog`,
        description: blog.description,
    }
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id
    const blog = blogPosts.find(post => post.id === id)

    if (!blog) {
        notFound()
    }

    return (
        <main className='flex flex-col items-center pt-[32px] md:pt-[64px] pb-[64px]'>
            {/* Breadcrumb / Back Link */}
            <div className='w-full px-[16px] md:px-[170px] mb-[32px]'>
                <Link
                    href='/'
                    className='text-primary hover:underline text-[16px] flex items-center gap-2'
                >
                    {'<~~ Back to Home'}
                </Link>
            </div>

            {/* Blog Header */}
            <div className='w-full px-[16px] md:px-[170px] flex flex-col gap-[16px]'>
                <div className='flex flex-wrap gap-[12px]'>
                    {blog.tags.map((tag, i) => (
                        <span
                            key={i}
                            className='text-[14px] text-primary bg-primary/10 px-2 py-1 rounded'
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
                <h1 className='text-[32px] md:text-[48px] font-bold leading-tight'>
                    {blog.title}
                </h1>
                <p className='text-secondary text-[16px]'>{blog.date}</p>
            </div>

            {/* Hero Image */}
            <div className='w-full px-[16px] md:px-[170px] mt-[32px]'>
                <div className='relative w-full h-[250px] md:h-[500px] border border-secondary'>
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className='object-cover'
                        priority
                    />
                </div>
            </div>

            {/* Content */}
            <div className='w-full px-[16px] md:px-[170px] mt-[48px]'>
                <article
                    className='prose prose-invert prose-lg max-w-none text-foreground'
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />
            </div>
        </main>
    )
}
