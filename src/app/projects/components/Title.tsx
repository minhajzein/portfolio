import React from 'react'

function Title({ title }: { title: string }) {
	return (
		<h1 className='md:text-3xl text-lg'>
			<span className='text-primary'>#</span>
			<span className='text-primary-foreground text-nowrap'>{title}</span>
		</h1>
	)
}

export default Title
