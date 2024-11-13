<script>
	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<ul class="border-primary-200 relative list-none border-s-2">
	{@render children()}
</ul>
