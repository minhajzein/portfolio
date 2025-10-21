function Skills() {
	return (
		<div className='w-full text-[16px] grid md:grid-cols-3 gap-[12px]'>
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
	)
}

export default Skills
