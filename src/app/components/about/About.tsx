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
					{`I'm a MERN full stack web developer based in Calicut, Kerala, helping businesses build custom web applications that solve real problems.`}
					<br />
					<br />
					{`If your current systems are slow, manual, or your website isn't performing, I create scalable, efficient, and user-friendly web solutions that improve operations, enhance user experience, and help your business grow.`}
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
		</div>
	)
}

export default About
