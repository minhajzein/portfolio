import MainProjects from './components/MainProjects'
import PageTitle from '@/components/PageTitle'
import Title from './components/Title'
import MiniProjects from './components/mini-projects/MiniProjects'

export const metadata = {
	title:
		"Minhaj's Portfolio – MERN Full Stack Web Applications | Calicut, Kerala",
	description:
		'Explore Minhaj’s MERN full stack web development projects in Calicut, Kerala. See custom web applications, responsive UIs, secure backends, and scalable solutions built for businesses.',
}

function Projects() {
	return (
		<div className='px-[16px] md:px-[170px] w-full flex flex-col gap-[32px] py-[32px]'>
			<PageTitle title='projects' description='list of my projects' />
			<Title title='complete projects' />
			<MainProjects />
			<Title title='mini projects' />
			<MiniProjects />
		</div>
	)
}

export default Projects
