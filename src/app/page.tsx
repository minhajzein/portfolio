'use client'

import CubeAnimation from './components/CubeAnimation'
import Hero from './components/Hero'
import Quotes from './components/Quotes'
import Title from './components/Title'

export default function Home() {
	return (
		<div className='flex flex-col'>
			<Hero />
			<Quotes />
			<Title title='projects' link='/projects' />
			<CubeAnimation
				skills={['NextJs', 'NodeJs', 'MongoDB', 'Express', 'MongoDB']}
			/>
		</div>
	)
}
