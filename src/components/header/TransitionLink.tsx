'use client'

import { animatePageOut } from '@/utils/animations'
import { usePathname, useRouter } from 'next/navigation'
import React, { Dispatch, SetStateAction } from 'react'
import { Button } from '../ui/button'

interface Props {
	href: string
	label: string
	closeMenu: Dispatch<SetStateAction<boolean>>
}

function TransitionLink({ href, label, closeMenu }: Props) {
	const router = useRouter()
	const pathName = usePathname()

	const isActive: boolean = href === pathName

	const handleClick = () => {
		if (!isActive) {
			animatePageOut(href, router)
			closeMenu(false)
		}
	}

	return (
		<Button
			onClick={handleClick}
			variant='destructive'
			className={`${
				isActive ? 'text-primary-foreground' : 'text-secondary'
			} capitalize hover:text-primary-foreground md:text-[16px] text-[32px] flex gap-0 cursor-pointer duration-300 items-center p-0`}
		>
			<span className='text-primary'>#</span>
			<span>{label}</span>
		</Button>
	)
}

export default TransitionLink
