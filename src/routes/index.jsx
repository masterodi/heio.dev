import { animate, spring } from 'motion';
import { createEffect, createSignal, lazy, onMount } from 'solid-js';
import LoadingIndicator from '~/components/LoadingIndicator';
import { createMessage } from './actions';

const Navbar = lazy(() => import('./navbar'));

export default function Home() {
	let containerRef, buttonRef, toastRef;
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
		setText('');
	};

	onMount(() => {
		document.body.style = '';
		const { innerWidth: windowWidth } = window;

		animate(
			containerRef,
			{ x: [-windowWidth, 0] },
			{ easing: spring({ stiffness: 54 }) },
		);
	});

	createEffect(() => {
		if (hasText()) {
			animate(buttonRef, { scale: 1 }, { duration: 2 });
		}
	});

	createEffect(() => {
		const { innerWidth: windowWidth } = window;

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
					<Navbar />
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
