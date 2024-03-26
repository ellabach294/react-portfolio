let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

const btn = document.querySelector('.btn')
const nav = document.querySelector('.navbar')

btn.addEventListener('click', (e) => {
    e.preventDefault();

    nav.classList.toggle('show')
    const isExpanded = nav.classList.contains('show')
    btn.setAttribute('aria-expanded', isExpanded)
})

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 180;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let activeLink = document.querySelector('header nav a[href*=' + id + ']')
                if(activeLink) {
                    activeLink.classList.add('active')
                }
            })
        }
    })
}