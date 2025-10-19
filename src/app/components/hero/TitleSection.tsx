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
				Tired of <span className='text-primary'>Slow Systems?</span>
				<br />I Build <span className='text-primary'>Scalable Apps.</span>
			</h1>
		),
		description: (
			<p className='text-sm sm:text-base leading-relaxed'>
				{`MERN Full Stack Developer building automated systems that streamline workflows and boost efficiency.`}
			</p>
		),
	},
	{
		id: 2,
		title: (
			<h1 id='split-text' className='md:text-4xl text-xl sm:text-2xl opacity-0 leading-tight md:leading-normal'>
				Need More Than a <span className='text-primary'>Website?</span>
				<br />I Build <span className='text-primary'>Web Apps</span> That
				Perform.
			</h1>
		),
		description: (
			<p className='text-sm sm:text-base leading-relaxed'>
				{`MERN expertise crafting sleek interfaces and solid backends that help your business grow.`}
			</p>
		),
	},
	{
		id: 3,
		title: (
			<h1 id='split-text' className='md:text-4xl text-xl sm:text-2xl opacity-0 leading-tight md:leading-normal'>
				Still Doing Tasks <span className='text-primary'>Manually?</span>
				<br />I Build <span className='text-primary'>Smart Tools.</span>
			</h1>
		),
		description: (
			<p className='text-sm sm:text-base leading-relaxed'>
				{`Clean UIs to strong APIs, creating solutions that simplify work and save time.`}
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
				{`End-to-end MERN development keeping your business modern, reliable, and scalable.`}
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
				{`3+ years full stack experience handling design, backend, and launch from start to finish.`}
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
