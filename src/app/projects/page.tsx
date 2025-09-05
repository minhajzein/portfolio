import React from 'react'
import MainProjects from './components/MainProjects'
import PageTitle from '@/components/PageTitle'
import Title from './components/Title'
import MiniProjects from './components/mini-projects/MiniProjects'

function Projects() {
	return (
		<div className='px-[16px] md:px-[170px] w-full flex flex-col gap-[32px]'>
			<PageTitle title='projects' description='list of my projects' />
			<Title title='complete projects' />
			<MainProjects />
			<Title title='mini projects' />
			<MiniProjects />
		</div>
	)
}

export default Projects
