'use client'

import { animatePageIn } from '@/utils/animations'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

gsap.registerPlugin(useGSAP)

function template({ children }: { children: React.ReactNode }) {
	useGSAP(() => {
		animatePageIn()
	})
	return (
		<div className='w-full min-h-dvh'>
			<div
				id='banner-1'
				className='min-h-dvh w-1/4 fixed top-0 left-0 z-50 bg-neutral-950'
			></div>
			<div
				id='banner-2'
				className='min-h-dvh w-1/4 fixed top-0 left-1/4 z-50 bg-neutral-950'
			></div>
			<div
				id='banner-3'
				className='min-h-dvh w-1/4 fixed top-0 left-2/4 z-50 bg-neutral-950'
			></div>
			<div
				id='banner-4'
				className='min-h-dvh w-1/4 fixed top-0 left-3/4 z-50 bg-neutral-950'
			></div>
			{children}
		</div>
	)
}

export default template
