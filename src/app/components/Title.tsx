'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin'
import { useRef } from 'react'
import Link from 'next/link'

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger, useGSAP)

function Title({
	title,
	link,
}: {
	title: string
	link: string | null | undefined
}) {
	const textRef = useRef<HTMLHeadingElement>(null)

	useGSAP(() => {
		if (!textRef.current) return

		gsap.to(textRef.current, {
			duration: 1,
			scrambleText: title,
			scrollTrigger: {
				trigger: textRef.current,
				start: 'top 50%',
				toggleActions: 'play none none none',
			},
		})

		gsap.to(textRef.current, {
			duration: 1,
			delay: 1.5,
			scrambleText: {
				text: title,
				chars: 'XO',
				revealDelay: 0.5,
				speed: 0.3,
				newClass: 'myClass',
			},
			scrollTrigger: {
				trigger: textRef.current,
				start: 'top 50%',
				toggleActions: 'play reverse play reverse',
			},
		})
	}, [])

	return (
		<div className='flex justify-between items-center mt-[52px] w-full px-[16px] md:px-[170px]'>
			<div className='flex items-center gap-[12px] w-[60%] md:w-[50%]'>
				<h2 className='text-[24px] md:text-[32px] text-nowrap'>
					<span className='text-primary'>#</span>
					<span className='text-nowrap' ref={textRef}>
						{title}
					</span>
				</h2>
				<div className='h-[1px] w-full bg-primary'></div>
			</div>
			{link && (
				<Link
					href={link}
					className='text-[12px] md:text-[16px] h-[32px] md:px-[24px] hover:bg-primary/20 hover:border border-primary duration-300 flex items-center'
				>
					{'View all ~~>'}
				</Link>
			)}
		</div>
	)
}

export default Title
