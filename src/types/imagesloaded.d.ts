declare module 'imagesloaded' {
	interface ImagesLoaded {
		on(
			event: 'always' | 'done' | 'fail' | 'progress',
			callback: (instance: ImagesLoaded) => void
		): void
	}

	function imagesLoaded(
		elem: Element | Element[] | NodeListOf<Element> | string,
		callback?: (instance: ImagesLoaded) => void
	): ImagesLoaded

	export default imagesLoaded
}
