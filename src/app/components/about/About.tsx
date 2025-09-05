'use client'

import Link from 'next/link'
import ImageSection from './ImageSection'

function About() {
	return (
		<div className='grid md:grid-cols-2 px-[16px] md:px-[170px] mt-[32px]'>
			<div className='flex flex-col gap-[32px]'>
				<p className='text-[16px]'>
					{`Hello, I'm Minhaj!`} <br />
					<br />
					{`I'm a full-stack developer with 3 years of experience,
					passionate about building scalable, efficient, and user-friendly web
					applications. From designing responsive front-end interfaces to
					developing robust back-end systems, I specialize in turning ideas into
					functional digital solutions.`}
					<br />
					<br />
					{`Over the past few years, I've worked on diverse
					projects—helping businesses and clients establish a strong online
					presence through modern, secure, and high-performing applications. I'm
					always eager to explore the latest technologies and frameworks to
					deliver the best results.`}
				</p>
				<Link
					href={'/about-me'}
					className='h-[32px] text-[16px] w-fit flex items-center border border-primary hover:bg-primary/20 duration-300 px-[24px]'
				>
					{'Read more ~>'}
				</Link>
			</div>
			<ImageSection />
		</div>
	)
}

export default About
