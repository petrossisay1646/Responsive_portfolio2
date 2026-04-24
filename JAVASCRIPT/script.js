document.addEventListener('DOMContentLoaded', () => {

    const menuIcon = document.querySelector('#humIcon');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');
    const header = document.querySelector(".header");
    const sections = document.querySelectorAll('section');
    const footerScrollBtn = document.querySelector('.footerIconTop a');

    // ===============================
    // MENU TOGGLE
    // ===============================
    if (menuIcon) {
        menuIcon.onclick = () => {
            navbar.classList.toggle('active');
        };
    }

    // ===============================
    // NAV CLICK (SMOOTH SCROLL)
    // ===============================
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

    // ===============================
    // NAVBAR SCROLL COLOR
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

    // ===============================
    // SCROLL TO TOP
    // ===============================
    if (footerScrollBtn) {
        footerScrollBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===============================
    // ACTIVE LINK ON SCROLL
    // ===============================
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;

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

    // ===============================
    // FORM VALIDATION (NEW VERSION)
    // ===============================
    const form = document.querySelector("#form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let isValid = true;

        // FULL NAME
        const nameRegex = /^[A-Za-z]+( [A-Za-z]+)+$/;

        if (nameInput.value.trim() === "") {
            setError(nameInput, "Full name is required");
            isValid = false;
        } else if (!nameRegex.test(nameInput.value.trim())) {
            setError(nameInput, "Enter at least two names, letters only");
            isValid = false;
        } else {
            setSuccess(nameInput);
        }

        // EMAIL
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailInput.value.trim() === "") {
            setError(emailInput, "Email is required");
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            setError(emailInput, "Enter a valid email");
            isValid = false;
        } else {
            setSuccess(emailInput);
        }

        // MESSAGE
        if (messageInput.value.trim() === "") {
            setError(messageInput, "Message cannot be empty");
            isValid = false;
        } else {
            setSuccess(messageInput);
        }

        // FINAL
        if (isValid) {
            alert("Form submitted successfully!");
            form.reset();
        }
    });

    // ===============================
    // ERROR FUNCTIONS
    // ===============================
    function setError(input, message) {
        const parent = input.parentElement;
        const errorDisplay = parent.querySelector(".error");

        errorDisplay.innerText = message;
        input.style.borderColor = "red";
    }

    function setSuccess(input) {
        const parent = input.parentElement;
        const errorDisplay = parent.querySelector(".error");

        errorDisplay.innerText = "";
        input.style.borderColor = "#00ffff";
    }

});
