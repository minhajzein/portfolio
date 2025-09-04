'use client'

import Image from 'next/image'
import Link from 'next/link'

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
			<div className='flex justify-end relative overflow-hidden'>
				<Image
					src='/images/logo.png'
					alt='logo'
					width={0}
					height={0}
					sizes='100vw'
					className='size-[155px] absolute left-[250px] z-20 top-[50px]'
				/>
				<div className='absolute size-[100px] left-0 top-[50px] border border-secondary'></div>
				<div className='absolute size-[75px] left-[150px] top-[150px] border border-secondary'></div>
				<div className='absolute size-[50px] left-[75px] top-[250px] border border-secondary'></div>
				<Image
					src='/images/my-pic-2.png'
					width={0}
					height={0}
					sizes='100vw'
					className='object-cover object-top h-[400px] border-b w-[300px] z-30'
					alt=''
				/>{' '}
				<Image
					src='/images/dots.png'
					alt='dots'
					width={0}
					height={0}
					sizes='100vw'
					className='size-[54px] absolute left-[50px] top-[175px] z-40'
				/>
				<Image
					src='/images/dots.png'
					alt='dots'
					width={0}
					height={0}
					sizes='100vw'
					className='size-[84px] absolute right-0 top-[255px] z-40'
				/>
			</div>
		</div>
	)
}

export default About
