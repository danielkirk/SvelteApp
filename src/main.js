import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Daniel Kirk',
		age: 25
	}
});

export default app;