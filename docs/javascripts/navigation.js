// navigation.js

// Wait for MkDocs Material content loading events
document$.subscribe(function () {
    // Set active navigation link on page load or after navigation
    setActiveLink();
    // Reinitialize active link when content is dynamically updated
    document.addEventListener('contentUpdated', function () {
        setActiveLink();
    });
});

// Function to set active link in the navigation based on the current page
function setActiveLink() {
    var currentUrl = window.location.pathname;

    // Remove all existing active classes
    document.querySelectorAll('.md-nav__item--active, .md-nav__link--active, .md-nav__dropdown-item--active, .md-nav__dropdown-link--active').forEach(function (el) {
        el.classList.remove('md-nav__item--active', 'md-nav__link--active', 'md-nav__dropdown-item--active', 'md-nav__dropdown-link--active');
    });

    // Don't set any active class if on root URL
    if (currentUrl === '/') {
        return;
    }

    // Function to set the active class for a given element
    function setActiveClass(el) {
        el.classList.add('md-nav__link--active');
        var item = el.closest('.md-nav__item');
        if (item) {
            item.classList.add('md-nav__item--active');
        }
    }

    // Function to check if the link matches the current URL
    function isPathActive(linkPath) {
        return currentUrl === linkPath || currentUrl.startsWith(linkPath + '/');
    }

    // Set active class for top navigation links
    document.querySelectorAll('.md-nav--top .md-nav__link').forEach(function (link) {
        var linkPath = new URL(link.href).pathname;
        if (isPathActive(linkPath)) {
            setActiveClass(link);
        }
    });

    // Set active class for dropdown links
    document.querySelectorAll('.md-nav__dropdown-link').forEach(function (link) {
        var linkPath = new URL(link.href).pathname;
        if (isPathActive(linkPath)) {
            link.classList.add('md-nav__dropdown-link--active');
            var dropdownItem = link.closest('.md-nav__dropdown-item');
            if (dropdownItem) {
                dropdownItem.classList.add('md-nav__dropdown-item--active');
                var parentItem = dropdownItem.closest('.md-nav__item');
                if (parentItem) {
                    parentItem.classList.add('md-nav__item--active');
                }
            }
        }
    });
}