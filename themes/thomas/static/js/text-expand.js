const pElements = document.querySelectorAll("p");
Array.prototype.forEach.call(pElements, function (el, i) {
	if (el.innerHTML == "[expand]") {
		const parentcontent = el.parentNode.innerHTML
			.replace(
				"<p>[expand]</p>",
				'<div class="expand" style="display: none; height: 0; overflow: hidden;">'
			)
			.replace("<p>[/expand]</p>", "</div>");
		el.parentNode.innerHTML = parentcontent;
	}
});

const expandElements = document.querySelectorAll("div.expand");
Array.prototype.forEach.call(expandElements, function (el, i) {
	el.previousElementSibling.innerHTML =
		el.previousElementSibling.innerHTML +
		"<span>..&nbsp; <button class=\"read-more-btn\" onclick=\"this.parentNode.parentNode.nextElementSibling.style.display = 'block'; this.parentNode.parentNode.nextElementSibling.style.height = 'auto'; this.parentNode.style.display = 'none';\">read&nbsp;more&nbsp;&rarr;</button></span>";
});
