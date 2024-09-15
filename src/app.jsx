import { MetaProvider, Title } from '@solidjs/meta';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense } from 'solid-js';
import './app.css';
import Toast from './components/Toast';

export default function App() {
	return (
		<Router
			root={(props) => (
				<MetaProvider>
					<Title>heio.dev</Title>

					<Suspense>{props.children}</Suspense>

					<Toast />
				</MetaProvider>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
