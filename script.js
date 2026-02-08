const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

/* FORCE ACTIVE ON CLICK / TAP */
navLinks.forEach(link => {
    ["click", "touchstart"].forEach(evt => {
        link.addEventListener(evt, () => {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });
});

/* SCROLL DETECTION */
window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPos = window.scrollY + window.innerHeight / 2;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    /* FIX FOR LAST SECTION (CONTACT) */
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
        current = "contact";
    }

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});




function hireMe() {
    const user = "nageshl15260";
    const domain = "gmail.com";
    window.location.href = `mailto:${user}@${domain}`;
}
function sendMail(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const myEmailUser = "nageshl5260";   // 👈 YOUR EMAIL USERNAME
    const myEmailDomain = "gmail.com";   // 👈 DOMAIN

    const subject = "New Contact from Portfolio";
    const body =
        `Name: ${name}%0D%0A` +
        `Email: ${email}%0D%0A` +
        `Phone: ${phone}%0D%0A%0D%0A` +
        `Message:%0D%0A${message}`;

    window.location.href =
        `mailto:${myEmailUser}@${myEmailDomain}?subject=${subject}&body=${body}`;
}
(function () {
    emailjs.init("2mtGk8WnjaWQPImYP"); // 👈 YOUR USER ID
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_rhsnwur",
        "template_lcofwx4",
        this
    ).then(() => {
        alert("Message sent successfully!");
        this.reset();
    }, (error) => {
        alert("Failed to send message. Please try again.");
        console.error(error);
    });
});
