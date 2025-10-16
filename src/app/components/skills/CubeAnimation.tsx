'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

export default function CubeAnimation({ skills }: { skills: string[] }) {
	const povRef = useRef<HTMLDivElement>(null)
	const n = 19

	useGSAP(() => {
		const rots = skills.map((_, i) => {
			const angle = (360 / skills.length) * i
			const alpha = 1 - i / skills.length
			return { ry: angle, a: alpha }
		})

		gsap.set('.face', {
			z: 200,
			rotateY: (i: number) => rots[i % rots.length].ry,
			transformOrigin: '50% 50% -201px',
		})

		const themeColors = ['var(--primary)', 'var(--secondary)', 'var(--accent)']

		for (let i = 0; i < n; i++) {
			const die = document.querySelector('.die') as HTMLElement
			let cube = die.querySelector('.cube') as HTMLElement

			if (i > 0) {
				const clone = die.cloneNode(true) as HTMLElement
				document.querySelector('.tray')?.append(clone)
				cube = clone.querySelector('.cube') as HTMLElement
			}

			gsap
				.timeline({
					repeat: -1,
					yoyo: true,
					defaults: { ease: 'power3.inOut', duration: 1 },
				})
				.fromTo(
					cube,
					{ rotateY: -90 },
					{ rotateY: 90, ease: 'power1.inOut', duration: 2 }
				)
				.fromTo(
					cube.querySelectorAll('.face'),
					{
						color: (j: number) => themeColors[(i + j) % themeColors.length],
					},
					{
						color: (j: number) => themeColors[(i + j + 1) % themeColors.length],
					},
					0
				)
				.to(
					cube.querySelectorAll('.face'),
					{
						color: (j: number) => themeColors[(i + j + 2) % themeColors.length],
					},
					1
				)
				.progress(i / n)
		}

		gsap
			.timeline()
			.from('.tray', {
				yPercent: -3,
				duration: 2,
				ease: 'power1.inOut',
				yoyo: true,
				repeat: -1,
			})
			.fromTo(
				'.tray',
				{ rotate: -15 },
				{
					rotate: 15,
					duration: 4,
					ease: 'power1.inOut',
					yoyo: true,
					repeat: -1,
				},
				0
			)
			.from('.die', {
				duration: 0.01,
				opacity: 0,
				stagger: { each: -0.05, ease: 'power1.in' },
			})
			.to('.tray', {
				scale: 1.2,
				duration: 2,
				ease: 'power3.inOut',
				yoyo: true,
				repeat: -1,
			})

		const resizeHandler = () => {
			const h = n * 56
			gsap.set('.tray', { height: h })
			gsap.set('.pov', { scale: innerHeight / h })
		}

		resizeHandler()
		window.addEventListener('resize', resizeHandler)
		return () => window.removeEventListener('resize', resizeHandler)
	}, [skills])

	return (
		<div
			ref={povRef}
			className='pov flex items-center justify-center w-full h-[500px] md:h-full overflow-hidden font-[Montserrat] font-black'
		>
			<div className='tray relative'>
				<div className='die w-[300px] h-[55px] pb-[9px] perspective-[999px]'>
					<div className='cube absolute w-full h-full [transform-style:preserve-3d]'>
						{skills.map((skill, i) => (
							<div
								key={`${skill}-${i}`}
								className='face absolute uppercase w-full h-full flex items-center justify-center text-white text-[60px] backface-hidden'
							>
								{skill}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
