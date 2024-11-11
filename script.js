let menuIcon = document.querySelector('#nav-toggle');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};
// Close the navbar on window resize to larger than mobile view
window.onresize = () => {
    if (window.innerWidth > 768) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('active');
    }
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('active');
    navbar.classList.toggle('active');
};

//...... READ MORE BUTTON............

const para2 = document.querySelector('.about-para2');
const readMore = document.querySelector('#about-btn');
const readLess = document.querySelector('#about-btn2');

readMore.addEventListener('click', ()=>{
    para2.style.display = 'block';
    readMore.style.display ='none';
    readLess.style.display ='block';
})

readLess.addEventListener('click', ()=>{
    para2.style.display = 'none';
    readMore.style.display ='block';
    readLess.style.display ='none';
})



// The modal
const modal = document.getElementById("hireMeModal");
const btn = document.getElementById("hireMeBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Prevents the form from actually submitting
function showAlert(event) {
    event.preventDefault(); 
    alert("Thank you for reaching out! For Contact us click Hire Me button above.");
}

// Skill Progress Animation
const skillsSection = document.querySelector('#skills');
const progressBars = document.querySelectorAll('.progress');

function showProgress() {
    progressBars.forEach(bar => {
        const value = bar.getAttribute('data-skill');
        bar.style.width = `${value}%`;
    });
}

function handleScroll() {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos) {
        showProgress();
        window.removeEventListener('scroll', handleScroll); // Run only once
    }
}

window.addEventListener('scroll', handleScroll);

// Counter Animation for both counters
const counters = document.querySelectorAll('.counter');

const animateCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 100;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// Trigger animation when "About" section is in view
const aboutSection = document.querySelector('#about');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target); // Run only once
        }
    });
}, { threshold: 0.5 });

observer.observe(aboutSection);


// JavaScript for FAQ toggle functionality
// document.querySelectorAll('.faq-item').forEach(item => {
//     item.addEventListener('click', () => {
//         item.classList.toggle('active');
//     });
// });


