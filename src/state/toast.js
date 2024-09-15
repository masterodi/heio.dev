import { createSignal } from 'solid-js';

const [toasts, setToasts] = createSignal([]);

const showToast = (message, type = 'success') => {
	setToasts((prev) => [...prev, message]);

	setTimeout(() => {
		setToasts((prev) => prev.slice(1));
	}, 2500);
};

const useToast = () => [toasts, showToast];

export default useToast;
