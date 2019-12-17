fetch('//eo62cocntx.com/f02eb8342057764a4dc50f42ff5bc8e8/invoke.js').catch(() => {
	let adp_underlay = document.createElement('div');
	adp_underlay.className = 'adp-underlay';
	document.body.appendChild(adp_underlay);
	let adp = document.createElement('div');
	adp.className = 'adp';
	adp.innerHTML = `
		<h3>Ad Blocker Detected!</h3>
		<p>We use advertisements to keep our website online, could you please whitelist our website, thanks!</p>
		<a href="#">Okay</a>
	`;
	document.body.appendChild(adp);
	adp.querySelector('a').onclick = e => {
		e.preventDefault();
		document.body.removeChild(adp_underlay);
		document.body.removeChild(adp);
	};
});
