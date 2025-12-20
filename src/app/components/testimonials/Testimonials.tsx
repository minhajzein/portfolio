import { testimonials } from '@/data/testimonials'
import TestimonialCard from './TestimonialCard'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'

function Testimonials() {
    return (
        <div className='flex w-full flex-col'>
            <Carousel className='w-full relative'>
                <CarouselContent>
                    {testimonials.map((testimonial, i) => (
                        <CarouselItem
                            key={`${testimonial.id}-${i}`}
                            className='md:basis-1/2 lg:basis-1/2'
                        >
                            <TestimonialCard testimonial={testimonial} />
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

export default Testimonials
