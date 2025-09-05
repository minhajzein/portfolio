import ProjectCard from '@/app/components/projects/ProjectCard'
import projects from '@/lib/constants/projects'

function MainProjects() {
	return (
		<div className='grid md:grid-cols-3 gap-[18px]'>
			{projects.map((project, i) => (
				<ProjectCard key={`${project.title}-${i}`} project={project} />
			))}
		</div>
	)
}

export default MainProjects
