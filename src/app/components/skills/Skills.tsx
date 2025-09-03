import React from 'react'
import CubeAnimation from './CubeAnimation'
import Image from 'next/image'

const skills = ['NextJs', 'NodeJs', 'MongoDB', 'Express', 'MongoDB']

function Skills() {
	return (
		<div className='flex px-[170px] mt-[32px] relative'>
			<Image
				src='/images/dots.png'
				alt='dots'
				width={0}
				height={0}
				sizes='100vw'
				className='size-[84px] absolute left-0 -translate-x-1/2 top-1/2 z-40'
			/>
			<div className='min-w-[50%] relative'>
				<CubeAnimation skills={skills} />
				<Image
					src='/images/logo.png'
					alt='logo'
					width={0}
					height={0}
					sizes='100vw'
					className='size-[155px] absolute left-full z-20 top-1/2'
				/>
			</div>

			<div className='md:min-w-[50%] text-[16px] grid grid-cols-3 gap-[12px]'>
				<div className='flex flex-col border h-fit border-secondary'>
					<div className='border-b p-[8px] border-secondary'>
						<p>Languages</p>
					</div>
					<div className='flex flex-wrap gap-[8px] text-secondary p-[8px]'>
						<p>TypeScript</p>
						<p>JavaScript</p>
						<p>C</p>
						<p>Java</p>
					</div>
				</div>
				<div className='flex flex-col gap-[12px]'>
					<div className='flex flex-col border h-fit border-secondary'>
						<div className='border-b p-[8px] border-secondary'>
							<p>Frameworks</p>
						</div>
						<div className='flex flex-wrap gap-[8px] text-secondary p-[8px]'>
							<p>React.js</p>
							<p>Next.js</p>
							<p>Express</p>
							<p>Mongoose</p>
						</div>
					</div>
					<div className='flex flex-col border h-fit border-secondary'>
						<div className='border-b p-[8px] border-secondary'>
							<p>Runtime Environment</p>
						</div>
						<div className='flex flex-wrap gap-[8px] text-secondary p-[8px]'>
							<p>Node.js</p>
						</div>
					</div>
					<div className='flex flex-col border h-fit border-secondary'>
						<div className='border-b p-[8px] border-secondary'>
							<p>DevOps</p>
						</div>
						<div className='flex flex-wrap gap-[8px] text-secondary p-[8px]'>
							<p>Ec2</p>
							<p>Amplify</p>
							<p>Vercel</p>
							<p>S3</p>
							<p>NginX</p>
							<p>Linux</p>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-[12px]'>
					<div className='flex flex-col border h-fit border-secondary'>
						<div className='border-b p-[8px] border-secondary'>
							<p>Databases</p>
						</div>
						<div className='flex flex-wrap gap-[8px] text-secondary p-[8px]'>
							<p>MongoDB</p>
							<p>MySQL</p>
							<p>Firebase</p>
							<p>PostgreSQL</p>
						</div>
					</div>
					<div className='flex flex-col border h-fit border-secondary'>
						<div className='border-b p-[8px] border-secondary'>
							<p>Tools</p>
						</div>
						<div className='flex flex-wrap gap-[8px] text-secondary p-[8px]'>
							<p>Git</p>
							<p>Figma</p>
							<p>Postman</p>
							<p>Moon Modeler</p>
						</div>
					</div>
					<div className='flex flex-col border h-fit border-secondary'>
						<div className='border-b p-[8px] border-secondary'>
							<p>Others</p>
						</div>
						<div className='flex flex-wrap gap-[8px] text-secondary p-[8px]'>
							<p>HTML</p>
							<p>CSS</p>
							<p>Bootstrap</p>
							<p>TailwindCSS</p>
							<p>EJS</p>
							<p>HBS</p>
							<p>SCSS</p>
							<p>Flowbite</p>
							<p>Gsap</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
