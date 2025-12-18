import { splitTextAnimation } from '@/utils/animations'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import { useRef, useState } from 'react'

gsap.registerPlugin(useGSAP)

export const heroOptions = [
	{
		id: 1,
		title: (
			<h1 id='split-text' className='md:text-4xl text-xl sm:text-2xl opacity-0 leading-tight md:leading-normal'>
				Scaling Your <span className='text-primary'>Business?</span>
				<br />I Build <span className='text-primary'>Global</span> Web Apps.
			</h1>
		),
		description: (
			<p className='text-sm sm:text-base leading-relaxed'>
				{`Specializing in high-performance Ecommerce and Booking platforms for clients worldwide.`}
			</p>
		),
	},
	{
		id: 2,
		title: (
			<h1 id='split-text' className='md:text-4xl text-xl sm:text-2xl opacity-0 leading-tight md:leading-normal'>
				Need a Custom <span className='text-primary'>CRM?</span>
				<br />I Build <span className='text-primary'>Tools</span> That Work.
			</h1>
		),
		description: (
			<p className='text-sm sm:text-base leading-relaxed'>
				{`Streamline your operations with tailored CRM and LMS solutions designed for efficiency.`}
			</p>
		),
	},
	{
		id: 3,
		title: (
			<h1 id='split-text' className='md:text-4xl text-xl sm:text-2xl opacity-0 leading-tight md:leading-normal'>
				Targeting the <span className='text-primary'>World?</span>
				<br />Get <span className='text-primary'>Enterprise</span> Grade.
			</h1>
		),
		description: (
			<p className='text-sm sm:text-base leading-relaxed'>
				{`Robust, secure, and scalable web applications built with the MERN stack for global reach.`}
			</p>
		),
	},
	{
		id: 4,
		title: (
			<h1 id='split-text' className='md:text-4xl text-xl sm:text-2xl opacity-0 leading-tight md:leading-normal'>
				Using <span className='text-primary'>Old Platforms?</span>
				<br />
				Get <span className='text-primary'>Fast</span> &{' '}
				<span className='text-primary'>Secure</span> Apps.
			</h1>
		),
		description: (
			<p className='text-sm sm:text-base leading-relaxed'>
				{`Modernize your business with next-gen web technology that handles traffic from anywhere.`}
			</p>
		),
	},
	{
		id: 5,
		title: (
			<h1 id='split-text' className='md:text-4xl text-xl sm:text-2xl opacity-0 leading-tight md:leading-normal'>
				Have an <span className='text-primary'>Idea?</span>
				<br />I Turn It Into <span className='text-primary'>Reality.</span>
			</h1>
		),
		description: (
			<p className='text-sm sm:text-base leading-relaxed'>
				{`Full stack development from concept to global launch, handling every technical detail.`}
			</p>
		),
	},
]

function TitleSection() {
	const container = useRef<HTMLDivElement>(null)
	const [activeIndex, setActiveIndex] = useState(0)

	useGSAP(() => {
		setTimeout(() => {
			splitTextAnimation(container, () => {
				// Immediately transition to next text without delay
				setActiveIndex(prev => (prev + 1) % heroOptions.length)
			})
		}, 300)
	}, [activeIndex])

	return (
		<div
			ref={container}
			className='flex flex-col gap-[25px] md:gap-[50px] overflow-hidden'
		>
			<div key={activeIndex} className='flex flex-col gap-4 sm:gap-6 md:gap-12'>
				{/* Fixed height container for title to prevent layout shifts */}
				<div className='min-h-[120px] sm:min-h-[140px] md:min-h-[160px] flex items-center'>
					{heroOptions[activeIndex].title}
				</div>
				{/* Fixed height container for description to prevent layout shifts */}
				<div className='min-h-[90px] sm:min-h-[100px] md:min-h-[110px] flex items-start'>
					{heroOptions[activeIndex].description}
				</div>
			</div>
			<Link
				href='/contact-me'
				className='w-[141px] h-[37px] justify-center duration-300 flex items-center border border-primary text-sm sm:text-base hover:bg-primary/20 hover:text-primary-foreground cursor-pointer'
			>
				Contact me!!
			</Link>
		</div>
	)
}

export default TitleSection
