document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('#humIcon');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');
    const header = document.querySelector(".header");
    const sections = document.querySelectorAll('section');
    const footerScrollBtn = document.querySelector('.footerIconTop a');
    var form = document.querySelector("#form");

    if (menuIcon) {
        menuIcon.onclick = () => {
            navbar.classList.toggle('active');
        };
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');

            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    navbar.classList.remove('active');

                    window.scrollTo({
                        top: targetSection.offsetTop - 70, 
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        header.style.backgroundColor = "#112e42";
        header.style.boxShadow = "0 0 20px #00ffff";
    } else {
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
    }
});


    if (footerScrollBtn) {
        footerScrollBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }


    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

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
