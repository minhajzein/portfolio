import React from 'react'

function MiniProjectCard({ project }: { project: MiniProject }) {
	return (
		<div className='flex flex-col border h-fit border-secondary'>
			<div className='p-[12px] text-secondary text-[16px] flex flex-wrap gap-[8px] border-b border-secondary'>
				{project.techs.map((tech, i) => (
					<p key={`${tech}-${i}`}>{tech}</p>
				))}
			</div>
			<div className='p-[18px] flex flex-col gap-[12px]'>
				<h1 className='text-[24px] capitalize'>{project.title}</h1>
				<p className='text-[16px] text-secondary'>{project.tagline}</p>
				<a
					href={project.github}
					rel='noopener noreferrer'
					target='_blank'
					className='h-[32px] text-nowrap duration-300 w-fit flex justify-center items-center text-[16px] px-[12px] hover:bg-primary/20 border border-primary'
				>{`GitHub <~>`}</a>
			</div>
		</div>
	)
}

export default MiniProjectCard
