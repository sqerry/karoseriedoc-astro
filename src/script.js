import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
// import Swiper and modules styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function initSwiper() {
    const swiper = new Swiper('.hero-section .swiper', {
        loop: true,

        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },

        modules: [Navigation, Pagination, Autoplay],

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })
}

document.addEventListener('DOMContentLoaded', () => {
    setActivePage()
    toggleHamburgerMenu()
    initSwiper()
    window.addEventListener('scroll', handleScroll)
})

document.addEventListener('astro:after-swap', () => {
    initSwiper()
    setActivePage()
    toggleHamburgerMenu()
    window.addEventListener('scroll', handleScroll)
})

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
    const body = document.body

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active')
            body.classList.toggle('hamburger-active')
        })
    }
}

function detectLanguageAndRedirect() {
    const userLang = navigator.language || navigator.userLanguage
    const currentPath = window.location.pathname
    if (userLang.startsWith('de') && !currentPath.startsWith('/de/')) {
        window.location.href = '/de' + currentPath
    }
}

if (window.location.pathname === '/') {
    detectLanguageAndRedirect()
}

function handleScroll() {
    const navbarContainer = document.querySelector('.header')

    if (window.scrollY > 95) {
        navbarContainer.classList.add('sticky')
    } else {
        navbarContainer.classList.remove('sticky')
    }
}
