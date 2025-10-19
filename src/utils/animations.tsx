import gsap from 'gsap'
import Physics2DPlugin from 'gsap/Physics2DPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import html2canvas from 'html2canvas'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import React from 'react'

gsap.registerPlugin(SplitText, Physics2DPlugin, ScrollTrigger)

export function splitTextAnimation(
	container: React.RefObject<HTMLDivElement | null> | HTMLDivElement | null,
	onComplete?: () => void
) {
	const root =
		container && 'current' in container ? container.current : container
	const element = root?.querySelector('#split-text')
	if (!element) return

	gsap.killTweensOf(element)
	gsap.set(element, { opacity: 0 })

	document.fonts.ready.then(() => {
		const split = new SplitText(element, { type: 'chars' })

		const tl = gsap.timeline({
			onStart: () => {
				gsap.set(element, { opacity: 1 })
			},
			onComplete: () => {
				if (element && element.parentNode) {
					// Keep the text in its final animated state (opacity: 0)
					// Don't revert the split text to prevent showing full text
					gsap.set(element, { opacity: 0 })
					onComplete && onComplete()
				}
			},
		})

		gsap.set(element, { opacity: 1 })

		tl.from(split.chars, {
			duration: 2,
			y: 100,
			rotation: 90,
			opacity: 0,
			ease: 'elastic',
			stagger: 0.03,
		}).to(split.chars, {
			duration: 1.8,
			delay: 2.5,
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
}

export function animatePageIn() {
	const bannerOne = document.getElementById('banner-1')
	const bannerTwo = document.getElementById('banner-2')
	const bannerThree = document.getElementById('banner-3')
	const bannerFour = document.getElementById('banner-4')
	if (bannerOne && bannerTwo && bannerThree && bannerFour) {
		const tl = gsap.timeline()
		tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
			yPercent: 0,
		}).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
			yPercent: 100,
			stagger: 0.2,
		})
	}
}

export function animatePageOut(href: string, router: AppRouterInstance) {
	const bannerOne = document.getElementById('banner-1')
	const bannerTwo = document.getElementById('banner-2')
	const bannerThree = document.getElementById('banner-3')
	const bannerFour = document.getElementById('banner-4')
	if (bannerOne && bannerTwo && bannerThree && bannerFour) {
		const tl = gsap.timeline()
		tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
			yPercent: -100,
		}).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
			yPercent: 0,
			stagger: 0.2,
			onComplete: () => {
				router.push(href)
			},
		})
	}
}

export function disintegrateAnimation(captureEl: HTMLElement) {
	const COUNT = 75
	const REPEAT_COUNT = 3

	html2canvas(captureEl).then(canvas => {
		const width = canvas.width
		const height = canvas.height
		const ctx = canvas.getContext('2d')!
		const imageData = ctx.getImageData(0, 0, width, height)

		const dataList: ImageData[] = []
		captureEl.style.display = 'none'

		for (let i = 0; i < COUNT; i++) {
			dataList.push(ctx.createImageData(width, height))
		}

		for (let x = 0; x < width; x++) {
			for (let y = 0; y < height; y++) {
				for (let l = 0; l < REPEAT_COUNT; l++) {
					const index = (x + y * width) * 4
					const dataIndex = Math.floor(
						(COUNT * (Math.random() + (2 * x) / width)) / 3
					)
					for (let p = 0; p < 4; p++) {
						dataList[dataIndex].data[index + p] = imageData.data[index + p]
					}
				}
			}
		}

		dataList.forEach((data, i) => {
			const clonedCanvas = canvas.cloneNode() as HTMLCanvasElement
			clonedCanvas.width = width
			clonedCanvas.height = height
			clonedCanvas.getContext('2d')!.putImageData(data, 0, 0)
			clonedCanvas.className =
				'absolute top-0 left-0 pointer-events-none w-full h-full'
			document.body.appendChild(clonedCanvas)

			const randomAngle = (Math.random() - 0.5) * 2 * Math.PI
			const randomRotationAngle = 30 * (Math.random() - 0.5)

			gsap.to(clonedCanvas, {
				scrollTrigger: {
					trigger: captureEl,
					scrub: true,
					start: 'top center',
					end: 'bottom bottom',
				},
				duration: 1,
				rotate: randomRotationAngle,
				x: 40 * Math.sin(randomAngle),
				y: 40 * Math.cos(randomAngle),
				opacity: 0,
				delay: (i / dataList.length) * 2,
			})
		})
	})
}
