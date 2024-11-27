<script>
	/** @type {HTMLVideoElement} */
	let videoRef;

	const handleTimeUpdate = () => {
		if (videoRef?.currentTime > videoRef?.duration - 0.5) {
			videoRef?.pause();
		}
	};
</script>

<svelte:head>
	<title>heio.dev</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="relative z-20 grid min-h-screen animate-fade-in place-items-center p-4 opacity-0">
	<div class="flex flex-col items-center justify-center gap-12 text-center">
		<h2 class="title-m">Hello there!</h2>
		<h1 class="title-s sm:title-m md:title-l font-accent leading-relaxed">
			I like building apps. <br /> Let me build your app.
		</h1>
		<h3 class="title-s leading-relaxed">
			Contact me at <address>
				<a href="mailto:ovidiud.dev@proton.me">ovidiud.dev@proton.me</a>
			</address>
		</h3>
	</div>
</section>

<div class="overlay z-[-1]">
	<video
		bind:this={videoRef}
		ontimeupdate={handleTimeUpdate}
		autoplay
		playsinline
		muted
		class="absolute z-0 h-full w-full object-cover brightness-75">
		<source src="/background1.mp4" type="video/mp4" />
		<track kind="captions" />
	</video>

	<div class="absolute inset-0 z-0 bg-black/25"></div>
</div>
