'use client'

import { Testimonial } from '@/data/testimonials'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <div className='flex flex-col border border-secondary p-[24px] gap-[16px] h-full'>
            {/* Rating Stars */}
            <div className='flex gap-[4px]'>
                {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                        key={i}
                        className={`text-[16px] ${i < testimonial.rating
                                ? 'text-primary'
                                : 'text-secondary/30'
                            }`}
                    />
                ))}
            </div>

            {/* Review Text */}
            <p className='text-[16px] leading-relaxed text-foreground flex-1'>
                "{testimonial.review}"
            </p>

            {/* Client Info */}
            <div className='flex items-center gap-[12px] pt-[16px] border-t border-secondary/20'>
                <div className='relative w-[48px] h-[48px] rounded-full overflow-hidden border border-secondary'>
                    <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className='object-cover'
                    />
                </div>
                <div className='flex flex-col'>
                    <p className='text-[16px] text-foreground'>{testimonial.name}</p>
                    <p className='text-[14px] text-secondary'>
                        {testimonial.role} at {testimonial.company}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
