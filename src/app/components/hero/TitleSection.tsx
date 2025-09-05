import { splitTextAnimation } from '@/utils/animations'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import { useRef } from 'react'

gsap.registerPlugin(useGSAP)

function TitleSection() {
	const container = useRef<HTMLDivElement>(null)

	useGSAP(() => splitTextAnimation(container), { scope: container })

	return (
		<div
			ref={container}
			className='flex flex-col gap-[25px] md:gap-[50px] overflow-hidden'
		>
			<h1 id='split-text' className='text-[32px] opacity-0'>
				Crafting Scalable <span className='text-primary'>Web Solutions</span>,
				<br />
				<span className='text-primary'>Front</span> to{' '}
				<span className='text-primary'>Back.</span>
			</h1>
			<p className='text-[16px]'>
				{`I'm a Full Stack Developer specializing in building seamless`}
				<br /> digital experiences from stunning UIs to powerful backends.
			</p>
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
