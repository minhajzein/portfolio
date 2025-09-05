interface Props {
	title: string
	description: string | undefined | null
}

function PageTitle({ title, description }: Props) {
	return (
		<div className='flex flex-col gap-[8px]'>
			<h1 className='text-[32px]'>
				<span className='text-primary'>/</span>
				<span className='text-primary-foreground'>{title}</span>
			</h1>
			<p className='text-secondary'>{description}</p>
		</div>
	)
}

export default PageTitle
