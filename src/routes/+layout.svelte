<script>
	import ArrowUp from '$lib/components/ArrowUp.svelte';
	import Github from '$lib/components/Github.svelte';
	import Linkedin from '$lib/components/Linkedin.svelte';
	import Web from '$lib/components/Web.svelte';
	import { cn } from '$lib/utils';
	import '../app.css';

	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();
	let show = $state(false);

	const toggleShow = () => (show = !show);
</script>

<svelte:head>
	<title>heio.dev</title>
	<meta name="description" content="Hello!" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap"
		rel="stylesheet" />
</svelte:head>

<div class="app">
	<main class="container mx-auto">
		{@render children()}
	</main>

	<div class="toast m-4">
		<div class="relative">
			<button type="button" onclick={toggleShow} class="btn btn-primary btn-square relative z-20">
				<span class={cn('transition-all duration-200 ease-in-out', show && 'rotate-180')}>
					<ArrowUp />
				</span>
			</button>

			<div
				class={cn(
					'absolute bottom-0 z-10 flex flex-shrink flex-col gap-2 overflow-hidden transition-all duration-200 ease-linear',
					!show && 'h-0',
					show && 'h-[10rem] -translate-y-14'
				)}>
				<a
					href="https://www.linkedin.com/in/ovidiu-d/"
					target="_blank"
					class="btn btn-secondary btn-square">
					<Linkedin />
				</a>
				<a href="https://github.com/masterodi" target="_blank" class="btn btn-secondary btn-square">
					<Github />
				</a>
				<a
					href="https://objectivebias.heio.dev"
					target="_blank"
					class="btn btn-secondary btn-square">
					<Web />
				</a>
			</div>
		</div>
	</div>
</div>
