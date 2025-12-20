export interface Testimonial {
    id: string
    name: string
    role: string
    company: string
    review: string
    rating: number // 1-5 stars
    avatar: string // URL to avatar image
}

export const testimonials: Testimonial[] = [
    {
        id: 'testimonial-1',
        name: 'Sarah Johnson',
        role: 'CEO',
        company: 'TechStart Solutions',
        review: 'Working with Minhaj was an absolute pleasure. He delivered our e-commerce platform ahead of schedule with exceptional attention to detail. The scalability and performance of the solution exceeded our expectations.',
        rating: 5,
        avatar: 'https://i.pravatar.cc/150?img=5',
    },
    {
        id: 'testimonial-2',
        name: 'Michael Chen',
        role: 'Product Manager',
        company: 'EduTech Global',
        review: 'Minhaj built our Learning Management System from the ground up. His expertise in the MERN stack and understanding of our requirements resulted in a robust, user-friendly platform that our students love.',
        rating: 5,
        avatar: 'https://i.pravatar.cc/150?img=12',
    },
    {
        id: 'testimonial-3',
        name: 'Priya Sharma',
        role: 'Founder',
        company: 'BookNow Services',
        review: 'Our booking platform handles thousands of reservations daily thanks to Minhaj\'s excellent work. The system is reliable, fast, and the admin dashboard makes management effortless. Highly recommended!',
        rating: 5,
        avatar: 'https://i.pravatar.cc/150?img=9',
    },
    {
        id: 'testimonial-4',
        name: 'David Martinez',
        role: 'Operations Director',
        company: 'RetailPro Inc',
        review: 'The CRM system Minhaj developed has transformed how we manage customer relationships. The integration with our existing tools was seamless, and the custom features perfectly match our workflow.',
        rating: 5,
        avatar: 'https://i.pravatar.cc/150?img=14',
    },
    {
        id: 'testimonial-5',
        name: 'Emily Roberts',
        role: 'Marketing Head',
        company: 'Fashion Hub',
        review: 'Minhaj created a stunning e-commerce website for our fashion brand. The responsive design works flawlessly across all devices, and the checkout process is smooth. Our conversion rates have increased significantly!',
        rating: 5,
        avatar: 'https://i.pravatar.cc/150?img=47',
    },
]
