import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
	return [{ title: 'heio.dev' }, { name: 'description', content: 'Hi!' }];
};

export default function Index() {
	return (
		<div>
			<h1 className='text-3xl font-bold underline'>Hello world!</h1>
		</div>
	);
}
