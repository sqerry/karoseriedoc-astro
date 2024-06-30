import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
// import Swiper and modules styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const swiper = new Swiper('.swiper', {
    // Optional parameters

    loop: true,

    // If we need pagination
    modules: [Navigation, Pagination],

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})

document.addEventListener('DOMContentLoaded', () => {
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

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active')
        })
    }
}
function handleScroll() {
    const navbarContainer = document.querySelector('.header')

    if (window.scrollY > 95) {
        navbarContainer.classList.add('sticky')
    } else {
        navbarContainer.classList.remove('sticky')
    }
}
