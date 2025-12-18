'use client'

import Link from 'next/link'
import ImageSection from './ImageSection'
import { usePathname } from 'next/navigation'

function About() {
	const pathname = usePathname()
	return (
		<div className='grid md:grid-cols-2'>
			<div className='flex flex-col gap-[32px]'>
				<p className='text-[16px]'>
					{`Hello, I'm Minhaj!`} <br />
					<br />
					{`I'm a Full Stack Web Developer specializing in building high-performance Ecommerce, CRM, LMS, and Booking platforms for clients worldwide.`}
					<br />
					<br />
					{`Whether you're a startup or an established business, I create scalable, secure, and custom web solutions that streamline operations and drive growth—no matter where you are located.`}
				</p>
				{pathname === '/' && (
					<Link
						href={'/about-me'}
						className='h-[32px] text-[16px] w-fit flex items-center border border-primary hover:bg-primary/20 duration-300 px-[24px]'
					>
						{'Read more ~>'}
					</Link>
				)}
			</div>
			<ImageSection />
		</div >
	)
}

export default About
