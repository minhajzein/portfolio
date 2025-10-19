import Image from 'next/image'

function ImageSection() {
	return (
		<div className='flex flex-col items-center md:min-w-[40%] relative'>
			<Image
				src='/images/logo.png'
				alt='logo'
				width={0}
				height={0}
				sizes='100vw'
				className='size-[155px] absolute left-[20px] z-20 top-[50px]'
			/>
			<Image
				src='/images/my-pic-1.png'
				alt='my picture'
				width={0}
				height={0}
				sizes='100vw'
				className='md:h-[390px] object-contain h-auto w-full md:w-[70%] z-30'
			/>
			<Image
				src='/images/dots.png'
				alt='dots'
				width={0}
				height={0}
				sizes='100vw'
				className='size-[84px] absolute right-0 top-[255px] z-40'
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
	)
}

export default ImageSection
