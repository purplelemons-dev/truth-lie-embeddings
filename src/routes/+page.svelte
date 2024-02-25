<script>
	let textValue = 'The quick brown fox jumps over the lazy dog';
	let lieStatement = '';
	const handleClick = async () => {
		lieStatement = ``;
		const response = await fetch('https://cloud-vector.purplelemons.dev/query', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ value: textValue })
		});
		const { id } = await response.json();
		lieStatement = `That is ${id}.`;
	};
</script>

<textarea bind:value={textValue}></textarea>

<button on:click={handleClick}>is it a lie?</button>

<p>{lieStatement}</p>
