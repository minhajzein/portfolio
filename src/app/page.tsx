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
		<div className='flex flex-col overflow-hidden'>
			<Hero />
			<Quotes />
			<Title title='projects' link='/projects' />
			<div className='w-full px-[16px] md:px-[170px] mt-[32px]'>
				<Projects />
			</div>
			<Title title='skills' link={null} />
			<Skills />
			<Title title='about-me' link={null} />
			<div className='w-full px-[16px] md:px-[170px] mt-[32px]'>
				<About />
			</div>
			<Title title='contact-me' link={null} />
			<Contact />
		</div>
	)
}
