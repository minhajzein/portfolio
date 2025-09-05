import Image from 'next/image'

function ImageSection() {
	return (
		<div className='flex justify-end relative overflow-hidden'>
			<Image
				src='/images/logo.png'
				alt='logo'
				width={0}
				height={0}
				sizes='100vw'
				className='size-[155px] absolute left-[250px] z-20 top-[50px]'
			/>
			<div className='absolute size-[100px] left-0 top-[50px] border border-secondary'></div>
			<div className='absolute size-[75px] left-[150px] top-[150px] border border-secondary'></div>
			<div className='absolute size-[50px] left-[75px] top-[250px] border border-secondary'></div>
			<Image
				src='/images/my-pic-2.png'
				width={0}
				height={0}
				sizes='100vw'
				className='object-cover object-top h-[400px] border-b w-[300px] z-30'
				alt=''
			/>{' '}
			<Image
				src='/images/dots.png'
				alt='dots'
				width={0}
				height={0}
				sizes='100vw'
				className='size-[54px] absolute left-[50px] top-[175px] z-40'
			/>
			<Image
				src='/images/dots.png'
				alt='dots'
				width={0}
				height={0}
				sizes='100vw'
				className='size-[84px] absolute right-0 top-[255px] z-40'
			/>
		</div>
	)
}

export default ImageSection
