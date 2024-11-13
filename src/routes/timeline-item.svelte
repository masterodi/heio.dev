<script>
	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<li class="mb-10 ms-4">
	<div class="border-primary bg-primary-200 absolute -start-[0.55rem] mt-1.5 h-4 w-4 rounded-full">
	</div>
	{@render children()}
</li>
