import React from 'react'
import MiniProjectCard from './MiniProjectCard'
import projects from '@/lib/constants/miniProjects'

function MiniProjects() {
	return (
		<div className='grid md:grid-cols-3 gap-[18px]'>
			{projects.map((project, i) => (
				<MiniProjectCard key={`${project.title}-${i}`} project={project} />
			))}
		</div>
	)
}

export default MiniProjects
