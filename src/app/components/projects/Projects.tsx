import projects from '@/lib/constants/projects'
import ProjectCard from './ProjectCard'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'

function Projects() {
	return (
		<div className='flex w-full flex-col '>
			<Carousel className='w-full relative'>
				<CarouselContent>
					{projects.map((project, i) => (
						<CarouselItem
							key={`${project.title}-${i}`}
							className='md:basis-1/2 lg:basis-1/3'
						>
							<ProjectCard project={project} />
						</CarouselItem>
					))}
				</CarouselContent>
				<div className='absolute top-full translate-y-full right-12 flex gap-2 pt-4'>
					<CarouselPrevious />
					<CarouselNext />
				</div>
			</Carousel>
		</div>
	)
}

export default Projects
