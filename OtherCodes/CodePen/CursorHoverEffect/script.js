window.addEventListener('DOMContentLoaded', () => {
	const arrow = document.getElementById('arrow'); 
	const circle = document.getElementById('circle');
	const button_1 = document.getElementById('button_1');
	const button_2 = document.getElementById('button_2');

	document.addEventListener('mousemove', (e) => {
		arrow.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
		circle.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
	});

	button_1.addEventListener('mouseenter', () => {
		arrow.style.opacity = 1;
	});

	button_1.addEventListener('mouseleave', () => {
		arrow.style.opacity = 0;
	});

	button_2.addEventListener('mouseenter', () => {
		circle.style.opacity = 1;
	});

	button_2.addEventListener('mouseleave', () => {
		circle.style.opacity = 0;
	});
});
