import { animate, spring } from 'motion';
import { createEffect, createSignal, onMount } from 'solid-js';
import { GithubIcon, LinkedinIcon } from '~/components/icons';
import LoadingIndicator from '~/components/LoadingIndicator';
import { createMessage } from './actions';

export default function Home() {
	let containerRef, buttonRef, linkedinIconRef, githubIconRef, toastRef;
	const [text, setText] = createSignal('');
	const [loading, setLoading] = createSignal(false);
	const [success, setSuccess] = createSignal(false);
	const hasText = () => !!text();

	const handleInputChange = (e) => {
		setText(e.currentTarget.value);
	};

	const handleMessageSend = async (e) => {
		setLoading(true);
		setSuccess(false);
		await createMessage({ text: text() });
		setLoading(false);
		setSuccess(true);
	};

	onMount(() => {
		const windowHeight = window.innerHeight;
		const windowWidth = window.innerWidth;
		let keyframes = { y: [-windowHeight, 0] };

		if (windowWidth <= 840) {
			keyframes = { x: [-windowWidth, 0] };
		}

		animate(
			containerRef,
			{ x: [-windowWidth, 0] },
			{ easing: spring({ stiffness: 54 }) },
		);
		animate(githubIconRef, keyframes, {
			easing: spring({ stiffness: 36 }),
		});
		animate(linkedinIconRef, keyframes, {
			easing: spring({ stiffness: 36 }),
			delay: 0.2,
		});
	});

	createEffect(() => {
		if (hasText()) {
			animate(buttonRef, { scale: 1 }, { duration: 2 });
		}
	});

	createEffect(() => {
		const windowWidth = window.innerWidth;

		if (success()) {
			animate(toastRef, { x: [windowWidth, 0] }, { duration: 0.5 });
			setTimeout(() => {
				setSuccess(false);
			}, 2500);
		}
	});

	return (
		<>
			<main class="layout">
				<div ref={containerRef} class="container">
					<div>
						<h1 class="title">
							Welcome, <br /> dear visitor.
						</h1>
					</div>
					<section class="section">
						<p>
							Here is where most people would say "I am a
							developer", <br /> but I'm gonna do something a
							little different
						</p>

						<div class="input-container">
							<input
								placeholder="Tell me what you need"
								value={text()}
								onInput={handleInputChange}
								class="input"
							/>

							<button
								ref={buttonRef}
								type="button"
								disabled={loading()}
								onClick={handleMessageSend}
								class={hasText() ? 'btn' : 'btn btn--shrinked'}
							>
								{loading() ? <LoadingIndicator /> : 'Send'}
							</button>
						</div>

						<p class="small">
							or{' '}
							<a href="mailto:ovidiud.dev@proton.me" class="link">
								contact me at ovidiud.dev@proton.me
							</a>
						</p>
					</section>
				</div>
				<aside class="aside">
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
				</aside>
			</main>

			<div
				ref={toastRef}
				class={
					success() ? 'toast toast--success' : 'toast toast--hidden'
				}
			>
				Message sent
			</div>
		</>
	);
}
