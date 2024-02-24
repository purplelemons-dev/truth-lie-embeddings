<script>
	let textValue = 'The quick brown fox jumps over the lazy dog';
	let lieStatement = '';
	const handleClick = async () => {
		const response = await fetch('/api/lies', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ text: textValue })
		});
		const data = await response.json();
        lieStatement = data.isLie ? 'That is a lie!' : 'That is the truth!';
	};
</script>

<textarea bind:value={textValue}></textarea>

<button on:click={handleClick}>Click me!</button>

<p>{lieStatement}</p>
