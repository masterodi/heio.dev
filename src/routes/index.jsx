import { animate } from 'motion';
import { onMount } from 'solid-js';
import {
	CssIcon,
	GlobeIcon,
	HtmlIcon,
	JavaScriptIcon,
} from '~/components/icons';
import { iconContainer } from './(index).css';

export default function Home() {
	let pivotEl;

	onMount(() => {
		animate(pivotEl, { x: 32, y: -32 }, { duration: 1, repeat: Infinity });
	});

	return (
		<main>
			<div ref={pivotEl} class={iconContainer}>
				<GlobeIcon />
			</div>
			<div class={iconContainer}>
				<HtmlIcon />
			</div>
			<div class={iconContainer}>
				<CssIcon />
			</div>
			<div class={iconContainer}>
				<JavaScriptIcon />
			</div>
		</main>
	);
}
