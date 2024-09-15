import { For } from 'solid-js';
import useToast from '~/state/toast';

const Toast = (props) => {
	const [toasts] = useToast();

	return (
		<div ref={props.ref} class="toast">
			<For each={toasts()}>
				{(toast) => (
					<div class="alert alert--success alert--show">{toast}</div>
				)}
			</For>
		</div>
	);
};

export default Toast;
