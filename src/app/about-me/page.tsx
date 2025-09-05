import PageTitle from '@/components/PageTitle'
import React from 'react'
import About from '../components/about/About'
import Title from '../projects/components/Title'
import Skills from './components/Skills'
import FunFacts from './components/FunFacts'

function AboutMe() {
	return (
		<div className='flex flex-col w-full px-[16px] md:px-[170px] gap-[32px] py-[32px]'>
			<PageTitle title='about-me' description='who am i?' />
			<About />
			<Title title='skills' />
			<Skills />
			<Title title='my-fun-facts' />
			<FunFacts />
		</div>
	)
}

export default AboutMe
