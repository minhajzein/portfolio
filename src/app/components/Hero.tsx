'use client'

import { Button } from '@/components/ui/button'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { SplitText } from 'gsap/SplitText'
import { Physics2DPlugin } from 'gsap/Physics2DPlugin'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(SplitText, Physics2DPlugin, useGSAP)

function Hero() {
	const container = useRef<HTMLDivElement>(null)

	useGSAP(
		() => {
			const element = container.current?.querySelector('#split-text')
			if (!element) return

			document.fonts.ready.then(() => {
				const split = new SplitText(element, { type: 'chars' })
				const tl = gsap.timeline({ repeat: -1 })

				gsap.set(element, { opacity: 1 })

				tl.from(split.chars, {
					duration: 2,
					y: 100,
					rotation: 90,
					opacity: 0,
					ease: 'elastic',
					stagger: 0.03,
				}).to(split.chars, {
					duration: 2.5,
					delay: 3,
					opacity: 0,
					rotation: 'random(-2000, 2000)',
					physics2D: {
						angle: 'random(240, 320)',
						velocity: 'random(300, 600)',
						gravity: 800,
					},
					stagger: 0.015,
				})
			})
		},
		{ scope: container }
	)
	return (
		<div
			ref={container}
			className='px-[170px] py-[30px] flex justify-between overflow-hidden'
		>
			<div className='flex flex-col gap-[50px]'>
				<h1 id='split-text' className='text-[32px] opacity-0'>
					Crafting Scalable <span className='text-primary'>Web Solutions</span>,
					<br />
					<span className='text-primary'>Front</span> to{' '}
					<span className='text-primary'>Back.</span>
				</h1>
				<p className='text-[16px]'>
					I'm a Full Stack Developer specializing in building seamless
					<br /> digital experiences — from stunning UIs to powerful backends.
				</p>
				<Button
					variant='outline'
					className='w-[141px] h-[37px] border-primary text-[16px] hover:bg-primary hover:text-primary-foreground cursor-pointer'
				>
					Contact me!!
				</Button>
			</div>
			<div className='flex flex-col relative'>
				<img
					src='/images/logo.png'
					className='size-[155px] absolute left-[20px] z-20 top-[50px]'
					alt=''
				/>
				<img
					src='/images/my-pic.png'
					className='h-[390px] w-[380px] z-30'
					alt=''
				/>
				<img
					src='/images/dots.png'
					className='size-[84px] absolute right-0 top-[255px] z-40'
					alt=''
				/>
				<div className='flex items-center px-[16px] py-[8px] gap-[12px] border'>
					<div className='size-[16px] bg-primary'></div>
					<div className='flex flex-col'>
						<p className='text-[16px] text-secondary'>
							Currently working on <br />{' '}
							<span className='text-primary-foreground'>Reve Infotech</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
