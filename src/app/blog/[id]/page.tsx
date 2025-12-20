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
        title: blog.title,
        description: blog.description,
        openGraph: {
            title: blog.title,
            description: blog.description,
            url: `https://minhaj.reveinfotech.com/blog/${id}`,
            siteName: 'Minhaj Zein Portfolio',
            images: [
                {
                    url: blog.image,
                    width: 1200,
                    height: 630,
                    alt: blog.title,
                },
            ],
            locale: 'en_US',
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: blog.title,
            description: blog.description,
            images: [blog.image],
        },
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
                <h1 className='text-[24px] md:text-[32px] font-normal leading-tight'>
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
                    className='prose prose-invert max-w-none text-foreground 
                        [&>p]:mb-6 [&>p]:leading-relaxed [&>p]:text-[16px] [&>p]:font-normal
                        [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:text-[20px] [&>h3]:font-normal
                        [&>ul]:mb-6 [&>ul]:mt-4 [&>ul]:space-y-3
                        [&>ul>li]:leading-relaxed [&>ul>li]:text-[16px] [&>ul>li]:font-normal
                        [&>ul>li]:ml-6 [&>ul>li]:pl-2
                        [&_strong]:font-normal [&_strong]:text-primary'
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />
            </div>
        </main>
    )
}
