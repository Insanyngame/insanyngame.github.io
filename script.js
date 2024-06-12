const observer = new IntersectionObserver(elements => {
  elements.forEach((el) => {
		if (el.isIntersecting) {
			el.target.classList.add('lineAnimate');
		}
	})
});

document.querySelectorAll('.line').forEach((el) => {
	observer.observe(el);
})