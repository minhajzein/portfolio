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
			<h1 id='split-text' className='md:text-4xl text-2xl opacity-0'>
				Tired of <span className='text-primary'>Slow Systems?</span>
				<br />I Build <span className='text-primary'>Scalable Apps.</span>
			</h1>
		),
		description: (
			<p className='text-[16px]'>
				{`As a MERN Full Stack Developer, I build automated systems that streamline workflows and boost efficiency.`}
			</p>
		),
	},
	{
		id: 2,
		title: (
			<h1 id='split-text' className='md:text-4xl text-2xl opacity-0'>
				Need More Than a <span className='text-primary'>Website?</span>
				<br />I Build <span className='text-primary'>Web Apps</span> That
				Perform.
			</h1>
		),
		description: (
			<p className='text-[16px]'>
				{`With MERN expertise, I craft sleek interfaces and solid backends that help your business grow.`}
			</p>
		),
	},
	{
		id: 3,
		title: (
			<h1 id='split-text' className='md:text-4xl text-2xl opacity-0'>
				Still Doing Tasks <span className='text-primary'>Manually?</span>
				<br />I Build <span className='text-primary'>Smart Tools.</span>
			</h1>
		),
		description: (
			<p className='text-[16px]'>
				{`From clean UIs to strong APIs, I create solutions that simplify work and save time.`}
			</p>
		),
	},
	{
		id: 4,
		title: (
			<h1 id='split-text' className='md:text-4xl text-2xl opacity-0'>
				Using <span className='text-primary'>Old Platforms?</span>
				<br />
				Get <span className='text-primary'>Fast</span> &{' '}
				<span className='text-primary'>Secure</span> Apps.
			</h1>
		),
		description: (
			<p className='text-[16px]'>
				{`End-to-end MERN development that keeps your business modern, reliable, and scalable.`}
			</p>
		),
	},
	{
		id: 5,
		title: (
			<h1 id='split-text' className='md:text-4xl text-2xl opacity-0'>
				Have an <span className='text-primary'>Idea?</span>
				<br />I Turn It Into <span className='text-primary'>Reality.</span>
			</h1>
		),
		description: (
			<p className='text-[16px]'>
				{`With 3+ years of full stack experience, I handle design, backend, and launch from start to finish.`}
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
			<div key={activeIndex} className='flex flex-col gap-6 md:gap-12'>
				{heroOptions[activeIndex].title}
				{heroOptions[activeIndex].description}
			</div>
			<Link
				href='/contact-me'
				className='w-[141px] h-[37px] justify-center duration-300 flex items-center border border-primary text-[16px] hover:bg-primary/20 hover:text-primary-foreground cursor-pointer'
			>
				Contact me!!
			</Link>
		</div>
	)
}

export default TitleSection
