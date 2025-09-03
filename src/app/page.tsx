'use client'

import CubeAnimation from './components/skills/CubeAnimation'
import Hero from './components/Hero'
import Projects from './components/projects/Projects'
import Quotes from './components/Quotes'
import Title from './components/Title'
import Skills from './components/skills/Skills'

export default function Home() {
	return (
		<div className='flex flex-col'>
			<Hero />
			<Quotes />
			<Title title='projects' link='/projects' />
			<Projects />
			<Title title='skills' link={null} />
			<Skills />
		</div>
	)
}
