document.addEventListener('DOMContentLoaded', () => {
    setActivePage()
    toggleHamburgerMenu()

    function setActivePage() {
        const currentUrl = window.location.pathname
        const navLinks = document.querySelectorAll('.site-nav a')

        navLinks.forEach((link) => {
            const href = link.getAttribute('href')
            const isActive = href === currentUrl
            link.classList.toggle('active-page', isActive)
        })
    }

    function toggleHamburgerMenu() {
        const menuBtn = document.querySelector('.hamburger-menu')

        if (menuBtn) {
            menuBtn.addEventListener('click', () => {
                menuBtn.classList.toggle('active')
            })
        }
    }
})
