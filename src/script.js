import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
// import Swiper and modules styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function initSwiper() {
    const swiper = new Swiper('.hero-section .swiper', {
        // Optional parameters

        loop: true,

        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        //   },

        // If we need pagination
        modules: [Navigation, Pagination, Autoplay],

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

function handleScroll() {
    const navbarContainer = document.querySelector('.header')

    if (window.scrollY > 95) {
        navbarContainer.classList.add('sticky')
    } else {
        navbarContainer.classList.remove('sticky')
    }
}
