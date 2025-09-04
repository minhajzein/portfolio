'use client'

import { animatePageOut } from '@/utils/animations'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'

interface Props {
	href: string
	label: string
}
function TransitionLink({ href, label }: Props) {
	const router = useRouter()
	const pathName = usePathname()

	const isActive: boolean = href === pathName

	const handleClick = () => {
		if (!isActive) {
			animatePageOut(href, router)
		}
	}

	return (
		<Button
			onClick={handleClick}
			variant='destructive'
			className={`${
				isActive ? 'text-primary-foreground' : 'text-secondary'
			} capitalize hover:text-primary-foreground text-[16px] flex gap-0 cursor-pointer duration-300 items-center p-0`}
		>
			<span className='text-primary'>#</span>
			<span>{label}</span>
		</Button>
	)
}

export default TransitionLink
