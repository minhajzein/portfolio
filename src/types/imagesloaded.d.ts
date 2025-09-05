declare module 'imagesloaded' {
	interface ImagesLoadedCallback {
		(instance: any): void
	}

	interface ImagesLoaded {
		on(
			event: 'always' | 'done' | 'fail' | 'progress',
			callback: ImagesLoadedCallback
		): this
	}

	interface ImagesLoadedFactory {
		(
			elements: Element | Element[] | NodeListOf<Element>,
			options?: object,
			callback?: ImagesLoadedCallback
		): ImagesLoaded
	}

	const imagesLoaded: ImagesLoadedFactory
	export default imagesLoaded
}
