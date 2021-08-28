<script>
//exported variables
	export let name;
	export let age;
//

//function list
	const addAge = () => age += 1;
	
	const decreaseAge = () => age -= 1;

	const nameChange = (e) => {
		const nameChange = e.target.value;
		name = nameChange;
	}
//

</script>

<main>
	<h1>Hello {name}, Age {age}!</h1>
	<button on:click="{addAge}">BUTTON OF AGING</button>
	<button on:click="{decreaseAge}">BUTTON OF YOUTH</button>
	<br/>
	<input type="text" value="{name}" on:input="{nameChange}"/>

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>