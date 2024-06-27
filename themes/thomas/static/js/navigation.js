const navbarMenu = document.getElementById("navbar-block--header");
const burgerMenu = document.getElementById("burger");

burgerMenu.addEventListener("click", () => {
	navbarMenu.classList.toggle("active");
	burgerMenu.classList.toggle("active");
});

// Toggle to show and hide dropdown menu
const dropdown = document.querySelectorAll(".dropdown");

dropdown.forEach((item) => {
	const dropdownToggle = item.querySelector(".dropdown-toggle");

	dropdownToggle.addEventListener("click", () => {
		const dropdownShow = document.querySelector(".dropdown-show");
		toggleDropdownItem(item);

		// Remove 'dropdown-show' class from other dropdown
		if (dropdownShow && dropdownShow != item) {
			toggleDropdownItem(dropdownShow);
		}
	});
});

// Function to display the dropdown menu
const toggleDropdownItem = (item) => {
	const dropdownContent = item.querySelector(".dropdown-content");

	// Remove other dropdown that have 'dropdown-show' class
	if (item.classList.contains("dropdown-show")) {
		dropdownContent.removeAttribute("style");
		item.classList.remove("dropdown-show");
	} else {
		// Added max-height on active 'dropdown-show' class
		dropdownContent.style.height = dropdownContent.scrollHeight + "px";
		item.classList.add("dropdown-show");
	}
};

// Fixed dropdown menu on window resizing
window.addEventListener("resize", () => {
	if (window.innerWidth > 992) {
		document.querySelectorAll(".dropdown-content").forEach((item) => {
			item.removeAttribute("style");
		});
		dropdown.forEach((item) => {
			item.classList.remove("dropdown-show");
		});
	}
});

// Fixed navbar menu on window resizing
window.addEventListener("resize", () => {
	if (window.innerWidth > 992) {
		if (navbarMenu.classList.contains("active")) {
			navbarMenu.classList.remove("active");
			burgerMenu.classList.remove("active");
		}
	}
});

const scrollTopBtn = document.getElementById("scroll-top-btn");
document.addEventListener("scroll", () => {
	window.scrollY > window.innerHeight
		? scrollTopBtn.classList.add("active")
		: scrollTopBtn.classList.remove("active");
});
scrollTopBtn.addEventListener("click", () => {
	window.scrollTo({ top: 0 });
});
