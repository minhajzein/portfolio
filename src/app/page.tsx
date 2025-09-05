'use client'

import Hero from './components/hero/Hero'
import Projects from './components/projects/Projects'
import Quotes from './components/Quotes'
import Title from './components/Title'
import Skills from './components/skills/Skills'
import About from './components/about/About'
import Contact from './components/Contact'

export default function Home() {
	return (
		<div className='flex flex-col'>
			<Hero />
			<Quotes />
			<Title title='projects' link='/projects' />
			<div className='px-[16px] md:px-[170px] mt-[32px]'>
				<Projects />
			</div>
			<Title title='skills' link={null} />
			<Skills />
			<Title title='about-me' link={null} />
			<About />
			<Title title='contact-me' link={null} />
			<Contact />
		</div>
	)
}
