import { animate, spring } from 'motion';
import { onMount } from 'solid-js';
import { GithubIcon, LinkedinIcon } from '~/components/icons';

const Navbar = () => {
	let linkedinIconRef, githubIconRef;

	onMount(() => {
		const { innerHeight: windowHeight, innerWidth: windowWidth } = window;
		let keyframes = { y: [-windowHeight, 0] };

		if (windowWidth <= 840) {
			keyframes = { x: [-windowWidth, 0] };
		}

		animate(githubIconRef, keyframes, {
			easing: spring({ stiffness: 36 }),
		});
		animate(linkedinIconRef, keyframes, {
			easing: spring({ stiffness: 36 }),
			delay: 0.2,
		});
	});

	return (
		<nav class="navbar">
			<a
				ref={linkedinIconRef}
				href="https://www.linkedin.com/in/ovidiu-d/"
				target="_blank"
				class="icon"
			>
				<LinkedinIcon />
			</a>
			<a
				ref={githubIconRef}
				href="https://github.com/masterodi"
				target="_blank"
				class="icon"
			>
				<GithubIcon />
			</a>
		</nav>
	);
};

export default Navbar;
