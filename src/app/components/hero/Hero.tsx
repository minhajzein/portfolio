'use client'

import Image from 'next/image'
import TitleSection from './TitleSection'
import ImageSection from './ImageSection'

function Hero() {
	return (
		<div className='px-[16px] md:px-[170px] gap-[25px] py-[30px] flex flex-col md:flex-row md:justify-between'>
			<TitleSection />
			<ImageSection />
		</div>
	)
}

export default Hero
