const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', (e) => {
	const searchArea = document.querySelector('#searchbar-input-area');
	const searchValue = searchArea.value.split(' ').join('+');
	window.open(`https://www.google.com/search?q=${searchValue}`,"_self")
})