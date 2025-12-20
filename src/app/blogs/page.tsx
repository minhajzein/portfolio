import PageTitle from '@/components/PageTitle'
import { blogPosts } from '@/data/blogs'
import BlogCard from '../components/blog/BlogCard'

export const metadata = {
    title: 'Blogs - Full Stack Development Insights',
    description:
        'Explore in-depth articles on MERN stack development, Next.js, scalability, security, and modern web development best practices by Minhaj Zein.',
}

function BlogsPage() {
    return (
        <div className='px-[16px] md:px-[170px] w-full flex flex-col gap-[32px] py-[32px]'>
            <PageTitle title='blogs' description='insights and articles' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]'>
                {blogPosts.map(blog => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    )
}

export default BlogsPage
