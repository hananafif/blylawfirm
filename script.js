// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add active state to navigation links on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active")
    }
  })
})

// Add animation on scroll for fade-in elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = `fadeInUp 0.8s ease-out forwards`
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

document.querySelectorAll(".fade-in-up").forEach((el) => {
  observer.observe(el)
})

// Form submission handler
/*
const contactForm = document.querySelector(".contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const message = document.getElementById("message").value

    // You can add your own backend integration here
    console.log("Form submitted:", { name, email, phone, message })

    // Show success message
    alert("Terima kasih! Pesan Anda telah kami terima. Kami akan segera menghubungi Anda.")
    contactForm.reset()
  })
} */

// Add hover effect to buttons
const buttons = document.querySelectorAll(".btn")
buttons.forEach((button) => {
  button.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-2px)"
  })

  button.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
  })
})

function toggleTeam() {
  const hiddenCards = document.querySelectorAll(".team-card-hidden")
  const expandBtn = document.getElementById("expandBtn")

  hiddenCards.forEach((card) => {
    card.classList.toggle("visible")
  })

  // Toggle button text
  if (expandBtn.textContent === "Lihat Semua Tim") {
    expandBtn.textContent = "Sembunyikan Tim"
  } else {
    expandBtn.textContent = "Lihat Semua Tim"
  }
}

const profileButtons = document.querySelectorAll(".btn-profile")
profileButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault()
    const teamCard = this.closest(".team-card")
    const name = teamCard.querySelector("h3").textContent
    const position = teamCard.querySelector("p").textContent

    alert(`Profil Lengkap: ${name}\n${position}\n\nFitur detail profil akan ditampilkan di sini.`)
  })
})

// === HAMBURGER MENU TOGGLE ===
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Tutup menu setelah klik link di mobile
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// === ACTIVE LINK ON SCROLL ===
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

function setActiveNav() {
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active")
    }
  })
}

// ✅ Jalankan saat scroll
window.addEventListener("scroll", setActiveNav)

// ✅ Jalankan juga sekali saat halaman pertama kali dimuat
window.addEventListener("DOMContentLoaded", setActiveNav)
