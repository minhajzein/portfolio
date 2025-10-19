import CubeAnimation from './CubeAnimation'
import Image from 'next/image'

const skills = ['NextJs', 'NodeJs', 'MongoDB', 'Express', 'MongoDB']

function Skills() {
	return (
		<div className='flex px-[16px] flex-col md:flex-row md:px-[170px] mt-[32px] relative'>
			<Image
				src='/images/dots.png'
				alt='dots'
				width={0}
				height={0}
				sizes='100vw'
				className='size-[84px] absolute left-0 -translate-x-1/2 top-1/2 z-40'
			/>
			<div className='min-w-[50%] relative overflow-x-hidden'>
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

			<div className='md:min-w-[50%] text-[16px] grid md:grid-cols-3 gap-[12px]'>
				{/* Frontend Development */}
				<div className='flex flex-col border h-fit border-secondary'>
					<div className='border-b p-[8px] border-secondary'>
						<p>Frontend Development</p>
					</div>
					<div className='flex flex-wrap gap-[8px] text-secondary p-[8px]'>
						<p>React.js</p>
						<p>Next.js</p>
						<p>HTML5</p>
						<p>CSS3</p>
						<p>TailwindCSS</p>
						<p>Bootstrap</p>
						<p>SCSS</p>
						<p>EJS</p>
						<p>HBS</p>
						<p>Flowbite</p>
						<p>Gsap</p>
						<p>React Three Fiber</p>
					</div>
				</div>

				{/* Backend Development */}
				<div className='flex flex-col border h-fit border-secondary'>
					<div className='border-b p-[8px] border-secondary'>
						<p>Backend Development</p>
					</div>
					<div className='flex flex-wrap gap-[8px] text-secondary p-[8px]'>
						<p>Node.js</p>
						<p>Express.js</p>
						<p>MERN Stack</p>
						<p>RESTful APIs</p>
						<p>GraphQL</p>
						<p>MongoDB</p>
						<p>MySQL</p>
						<p>PostgreSQL</p>
						<p>Firebase</p>
						<p>Prisma (ORM)</p>
					</div>
				</div>

				{/* DevOps & Deployment */}
				<div className='flex flex-col gap-[12px]'>
					<div className='flex flex-col border h-fit border-secondary'>
						<div className='border-b p-[8px] border-secondary'>
							<p>DevOps & Deployment</p>
						</div>
						<div className='flex flex-wrap gap-[8px] text-secondary p-[8px]'>
							<p>AWS EC2</p>
							<p>AWS Amplify</p>
							<p>Vercel</p>
							<p>S3</p>
							<p>Nginx</p>
							<p>Linux</p>
						</div>
					</div>

					{/* Tools & Version Control */}
					<div className='flex flex-col border h-fit border-secondary'>
						<div className='border-b p-[8px] border-secondary'>
							<p>Tools & Version Control</p>
						</div>
						<div className='flex flex-wrap gap-[8px] text-secondary p-[8px]'>
							<p>Git</p>
							<p>Postman</p>
							<p>Figma</p>
							<p>Moon Modeler</p>
						</div>
					</div>

					{/* Programming Languages */}
					<div className='flex flex-col border h-fit border-secondary'>
						<div className='border-b p-[8px] border-secondary'>
							<p>Programming Languages</p>
						</div>
						<div className='flex flex-wrap gap-[8px] text-secondary p-[8px]'>
							<p>JavaScript</p>
							<p>TypeScript</p>
							<p>Java</p>
							<p>C</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
