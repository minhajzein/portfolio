import Image from 'next/image'

function ProjectCard({ project }: { project: Project }) {
	return (
		<div className='flex flex-col border h-fit border-secondary'>
			<Image
				src={project.cover}
				alt='logo'
				width={0}
				height={0}
				sizes='100vw'
				className='h-[200px] object-cover w-full border-b border-secondary'
			/>
			<div className='p-[12px] text-secondary text-[16px] flex flex-wrap gap-[8px] border-b border-secondary'>
				{project.techs.map((tech, i) => (
					<p key={`${tech}-${i}`}>{tech}</p>
				))}
			</div>
			<div className='p-[18px] flex flex-col gap-[12px]'>
				<h1 className='text-[24px] capitalize'>{project.title}</h1>
				<p className='text-[16px] text-secondary'>{project.tagline}</p>
				<a
					href={project.live}
					target='_blank'
					className='h-[32px] w-[110] flex justify-center items-center text-[16px] px-[12px] hover:bg-primary/20 border border-primary'
				>{`Live <~>`}</a>
			</div>
		</div>
	)
}

export default ProjectCard
