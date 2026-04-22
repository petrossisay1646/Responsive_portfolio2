document.addEventListener('DOMContentLoaded', () => {
    // Selectors matching your specific HTML structure
    const menuIcon = document.querySelector('#humIcon');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');
    const header = document.querySelector(".header");
    const sections = document.querySelectorAll('section');
    const footerScrollBtn = document.querySelector('.footerIconTop a');
    var form = document.querySelector("#form");


    // 1. Mobile Menu Toggle
    // Handles the hamburger icon click to show/hide the menu
    if (menuIcon) {
        menuIcon.onclick = () => {
            navbar.classList.toggle('active');
        };
    }

    // 2. Smooth Scrolling for Navigation Links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Close mobile menu when a link is clicked
                    navbar.classList.remove('active');

                    window.scrollTo({
                        top: targetSection.offsetTop - 70, // Offset for your sticky header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ===============================
// 3. NAVBAR COLOR CHANGE ON SCROLL
// ===============================
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        header.style.backgroundColor = "#112e42";
        header.style.boxShadow = "0 0 20px #00ffff";
    } else {
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
    }
});


    // 3. Scroll to Top Logic
    // Uses your existing uparrow icon in the footer
    if (footerScrollBtn) {
        footerScrollBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 4. Scroll Events: Active Link Highlighting
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Checks if the section is currently in the viewport
            if (window.pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// ===============================
// 2. FORM VALIDATION (EMPTY CHECK)
// ===============================
form.addEventListener("submit", (e) => {
    const inputs = form.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            valid = false;
            input.style.borderColor = "red";
        } else {
            input.style.borderColor = "#00ffff";
        }
    });

    if (!valid) {
        e.preventDefault();
        alert("Please fill all fields!");
    } else {
        alert("Form submitted successfully!");
    }
});
