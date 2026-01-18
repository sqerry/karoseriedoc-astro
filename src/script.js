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
            delay: 15000,
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

/**
 * Detects if user should be redirected to German version based on:
 * 1. Timezone (Europe/Berlin, Europe/Vienna, Europe/Zurich for DACH region)
 * 2. Browser/system language as fallback
 *
 * Respects user preference stored in localStorage if they manually switched languages.
 */
function detectLanguageAndRedirect() {
    const currentPath = window.location.pathname

    // Skip if already on German pages
    if (currentPath.startsWith('/de')) {
        return
    }

    // Check if user has manually set a language preference
    const userPreference = localStorage.getItem('preferredLang')
    if (userPreference) {
        // User has explicitly chosen a language, respect their choice
        return
    }

    const isGermanUser = isUserFromGermany()

    if (isGermanUser) {
        // Store that we auto-redirected so we can track it
        localStorage.setItem('autoRedirectedToGerman', 'true')

        // Build the German URL path
        const germanPath = buildGermanPath(currentPath)
        window.location.href = germanPath
    }
}

/**
 * Checks if user is likely from Germany/Austria/Switzerland based on:
 * 1. Timezone
 * 2. Browser language
 */
function isUserFromGermany() {
    // Check timezone first (more reliable indicator of location)
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const germanTimezones = [
        'Europe/Berlin',      // Germany
        'Europe/Vienna',      // Austria
        'Europe/Zurich',      // Switzerland
        'Europe/Busingen',    // German exclave
    ]

    if (germanTimezones.includes(timezone)) {
        return true
    }

    // Fallback: check browser/system language
    const browserLang = navigator.language || navigator.languages?.[0] || ''

    // Check for German language codes (de, de-DE, de-AT, de-CH)
    if (browserLang.toLowerCase().startsWith('de')) {
        return true
    }

    return false
}

/**
 * Builds the German path with proper route translations
 */
function buildGermanPath(czechPath) {
    // Route translations from Czech to German
    const routeTranslations = {
        'sluzby': 'dienstleistungen',
        'galerie': 'galerie',
        'kontakt': 'kontakt',
    }

    // Handle root path
    if (czechPath === '/' || czechPath === '') {
        return '/de'
    }

    // Translate route segments if needed
    let germanPath = czechPath
    for (const [czech, german] of Object.entries(routeTranslations)) {
        germanPath = germanPath.replace(`/${czech}`, `/${german}`)
    }

    return `/de${germanPath}`
}

/**
 * Call this when user manually switches language via the language selector
 * to store their preference and prevent auto-redirect
 */
window.setLanguagePreference = function (lang) {
    localStorage.setItem('preferredLang', lang)
}

// Run language detection on page load (all pages, not just homepage)
detectLanguageAndRedirect()

function handleScroll() {
    const navbarContainer = document.querySelector('.header')

    if (window.scrollY > 95) {
        navbarContainer.classList.add('sticky')
    } else {
        navbarContainer.classList.remove('sticky')
    }
}
