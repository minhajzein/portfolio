'use client'

import Hero from './components/hero/Hero'
import Projects from './components/projects/Projects'
import Quotes from './components/Quotes'
import Title from './components/Title'
import Skills from './components/skills/Skills'
import About from './components/about/About'
import Contact from './components/Contact'
import Specializations from './components/specializations/Specializations'
import BlogSection from './components/blog/BlogSection'
import Testimonials from './components/testimonials/Testimonials'

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
			<Title title='specializations' link={null} />
			<div className='w-full px-[16px] md:px-[170px] mt-[32px]'>
				<Specializations />
			</div>
			<Title title='about-me' link={null} />
			<div className='w-full px-[16px] md:px-[170px] mt-[32px]'>
				<About />
			</div>
			<Title title='testimonials' link={null} />
			<div className='w-full px-[16px] md:px-[170px] mt-[32px]'>
				<Testimonials />
			</div>
			<Title title='blogs' link='/blogs' />
			<div className='w-full px-[16px] md:px-[170px] mt-[32px]'>
				<BlogSection />
			</div>
			<Title title='contact-me' link={null} />
			<Contact />
		</div>
	)
}
