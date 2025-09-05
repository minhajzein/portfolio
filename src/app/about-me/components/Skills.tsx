function Skills() {
	return (
		<div className='w-full text-[16px] grid grid-cols-2 md:grid-cols-4 gap-[12px]'>
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
	)
}

export default Skills
