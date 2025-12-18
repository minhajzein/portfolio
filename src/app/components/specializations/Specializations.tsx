'use client'

import { LayoutPanelTop, ShoppingCart, Users, Calendar } from 'lucide-react'

const specializations = [
    {
        title: 'Ecommerce Platforms',
        description:
            'Custom online stores with secure payment gateways, inventory management, and seamless user experience.',
        icon: <ShoppingCart className='size-[24px] text-primary' />,
    },
    {
        title: 'CRM Systems',
        description:
            'Tailored Customer Relationship Management solutions to streamline sales, track interactions, and improve data handling.',
        icon: <Users className='size-[24px] text-primary' />,
    },
    {
        title: 'LMS Platforms',
        description:
            'Learning Management Systems for schools and corporate training, featuring course management, quizzes, and progress tracking.',
        icon: <LayoutPanelTop className='size-[24px] text-primary' />,
    },
    {
        title: 'Booking Systems',
        description:
            'Automated booking and reservation platforms for hotels, events, and service businesses with real-time availability.',
        icon: <Calendar className='size-[24px] text-primary' />,
    },
]

function Specializations() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[16px]'>
            {specializations.map((spec, index) => (
                <div
                    key={index}
                    className='flex flex-col border border-secondary p-[16px] gap-[12px] hover:border-primary duration-300'
                >
                    <div className='flex items-center gap-[12px]'>
                        {spec.icon}
                        <h3 className='text-[18px] font-medium text-foreground'>
                            {spec.title}
                        </h3>
                    </div>
                    <p className='text-secondary text-[16px] leading-relaxed'>
                        {spec.description}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Specializations
