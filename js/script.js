// Typing Effect
const typingTarget = document.querySelector("#typing-text");
const roles = [
  "IT Manager & AI Engineer",
  "Claude Engineer",
  "Fullstack Developer",
  "Node.js Developer",
  "Graphic Designer",
  "Cybersecurity Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
  const currentRole = roles[roleIndex];
  typingTarget.textContent = currentRole.slice(0, charIndex);

  if (!isDeleting && charIndex < currentRole.length) {
    charIndex += 1;
    setTimeout(typeRole, 80);
    return;
  }

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    setTimeout(typeRole, 1200);
    return;
  }

  if (isDeleting && charIndex > 0) {
    charIndex -= 1;
    setTimeout(typeRole, 42);
    return;
  }

  isDeleting = false;
  roleIndex = (roleIndex + 1) % roles.length;
  setTimeout(typeRole, 250);
}

typeRole();

// Mobile Navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Scroll Reveal, Active Navigation, Skill Bars, and Counters
const revealItems = document.querySelectorAll(".reveal");
const skillCards = document.querySelectorAll(".skill-card");
const statNumbers = document.querySelectorAll("[data-count]");
const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a");
const animatedCounters = new WeakSet();

function animateCounter(counter) {
  const target = Number(counter.dataset.count);
  let current = 0;
  const duration = 1200;
  const stepTime = 24;
  const increment = target / (duration / stepTime);

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      counter.textContent = `${target}+`;
      clearInterval(timer);
      return;
    }
    counter.textContent = `${Math.ceil(current)}+`;
  }, stepTime);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("visible");

    if (entry.target.classList.contains("skill-card")) {
      const level = entry.target.dataset.level;
      entry.target.querySelector(".progress span").style.width = `${level}%`;
    }

    if (entry.target.matches("[data-count]") && !animatedCounters.has(entry.target)) {
      animatedCounters.add(entry.target);
      animateCounter(entry.target);
    }
  });
}, { threshold: 0.2 });

revealItems.forEach((item) => observer.observe(item));
skillCards.forEach((item) => observer.observe(item));
statNumbers.forEach((item) => observer.observe(item));

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) current = section.id;
  });

  navItems.forEach((item) => {
    item.classList.toggle("active", item.getAttribute("href") === `#${current}`);
  });
});

// Graphic Design Gallery
const galleryItems = [
  {
    title: "Kabati Poster",
    category: "posters",
    src: "images/designs/posters/kabati.png",
    label: "Poster"
  },
  {
    title: "PFS Poster",
    category: "posters",
    src: "images/designs/posters/pfs.png",
    label: "Poster"
  },
  {
    title: "Poster Design 01",
    category: "posters",
    src: "images/designs/posters/WhatsApp Image 2026-05-07 at 4.30.01 PM.jpeg",
    label: "Poster"
  },
  {
    title: "Poster Design 02",
    category: "posters",
    src: "images/designs/posters/WhatsApp Image 2026-05-07 at 4.30.06 PM.jpeg",
    label: "Poster"
  },
  {
    title: "Poster Design 03",
    category: "posters",
    src: "images/designs/posters/WhatsApp Image 2026-05-07 at 4.30.08 PM.jpeg",
    label: "Poster"
  },
  {
    title: "Poster Design 04",
    category: "posters",
    src: "images/designs/posters/WhatsApp Image 2026-05-07 at 4.30.10 PM.jpeg",
    label: "Poster"
  },
  {
    title: "Poster Design 05",
    category: "posters",
    src: "images/designs/posters/WhatsApp Image 2026-05-07 at 4.30.12 PM.jpeg",
    label: "Poster"
  },
  {
    title: "Poster Design 06",
    category: "posters",
    src: "images/designs/posters/WhatsApp Image 2026-05-07 at 4.30.13 PM.jpeg",
    label: "Poster"
  },
  {
    title: "Poster Design 07",
    category: "posters",
    src: "images/designs/posters/WhatsApp Image 2026-05-07 at 4.30.15 PM.jpeg",
    label: "Poster"
  },
  {
    title: "Poster Design 08",
    category: "posters",
    src: "images/designs/posters/WhatsApp Image 2026-05-07 at 4.30.17 PM.jpeg",
    label: "Poster"
  },
  {
    title: "Poster Design 09",
    category: "posters",
    src: "images/designs/posters/WhatsApp Image 2026-05-07 at 4.30.18 PM.jpeg",
    label: "Poster"
  },
  {
    title: "Poster Design 10",
    category: "posters",
    src: "images/designs/posters/WhatsApp Image 2026-05-07 at 4.30.20 PM.jpeg",
    label: "Poster"
  },
  {
    title: "Poster Design 11",
    category: "posters",
    src: "images/designs/posters/WhatsApp Image 2026-05-07 at 4.30.22 PM.jpeg",
    label: "Poster"
  },
  {
    title: "Poster Design 12",
    category: "posters",
    src: "images/designs/posters/WhatsApp Image 2026-05-07 at 4.30.24 PM (1).jpeg",
    label: "Poster"
  },
  {
    title: "Poster Design 13",
    category: "posters",
    src: "images/designs/posters/WhatsApp Image 2026-05-07 at 4.30.25 PM (1).jpeg",
    label: "Poster"
  },
  {
    title: "Poster Design 14",
    category: "posters",
    src: "images/designs/posters/WhatsApp Image 2026-05-07 at 4.30.25 PM.jpeg",
    label: "Poster"
  },
  {
    title: "Poster Design 15",
    category: "posters",
    src: "images/designs/posters/WhatsApp Image 2026-05-07 at 4.30.27 PM.jpeg",
    label: "Poster"
  },
  {
    title: "Poster Design 16",
    category: "posters",
    src: "images/designs/posters/WhatsApp Image 2026-05-07 at 4.31.01 PM.jpeg",
    label: "Poster"
  }
];

const galleryGrid = document.querySelector("#gallery-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryViewAllButton = document.querySelector("#gallery-view-all");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector(".lightbox-caption");
const lightboxClose = lightbox.querySelector(".lightbox-close");
const galleryPreviewLimit = 3;
let activeGalleryFilter = "all";
let isGalleryExpanded = false;

function prettyCategory(category) {
  return category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function renderGallery(filter = activeGalleryFilter) {
  const filteredItems = filter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);
  const visibleItems = isGalleryExpanded
    ? filteredItems
    : filteredItems.slice(0, galleryPreviewLimit);

  galleryGrid.innerHTML = visibleItems.map((item, index) => {
    const imageMarkup = item.src
      ? `<img src="${item.src}" alt="${item.title}" loading="lazy">`
      : `<div class="gallery-placeholder" aria-label="${item.title}">${item.label}</div>`;

    return `
      <article class="gallery-card" tabindex="0" data-index="${index}" data-src="${item.src}" data-title="${item.title}" data-category="${prettyCategory(item.category)}">
        ${imageMarkup}
        <div class="gallery-overlay">
          <strong>${item.title}</strong>
          <small>${prettyCategory(item.category)}</small>
        </div>
      </article>
    `;
  }).join("");

  if (galleryViewAllButton) {
    const hasMoreItems = filteredItems.length > galleryPreviewLimit;
    galleryViewAllButton.hidden = !hasMoreItems;
    galleryViewAllButton.textContent = isGalleryExpanded ? "Show Less" : "View All";
  }
}

function openLightbox(card) {
  const src = card.dataset.src;
  const title = card.dataset.title;
  const category = card.dataset.category;

  if (!src) {
    lightboxImage.removeAttribute("src");
    lightboxImage.alt = "";
    lightboxCaption.textContent = `${title} - add an image path in js/script.js to preview this design.`;
  } else {
    lightboxImage.src = src;
    lightboxImage.alt = title;
    lightboxCaption.textContent = `${title} / ${category}`;
  }

  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  lightboxClose.focus();
}

renderGallery();

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeGalleryFilter = button.dataset.filter;
    isGalleryExpanded = false;
    renderGallery();
  });
});

if (galleryViewAllButton) {
  galleryViewAllButton.addEventListener("click", () => {
    isGalleryExpanded = !isGalleryExpanded;
    renderGallery();
  });
}

galleryGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".gallery-card");
  if (card) openLightbox(card);
});

galleryGrid.addEventListener("keydown", (event) => {
  const card = event.target.closest(".gallery-card");
  if (card && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openLightbox(card);
  }
});

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("open")) {
    closeLightbox();
  }
});

// Contact Form
const contactForm = document.querySelector(".contact-form");
const formNote = document.querySelector(".form-note");
const submitButton = contactForm.querySelector('button[type="submit"]');
const emailServiceId = "service_qb3d0p9";
const emailTemplateId = "template_970by4d";
const recipientEmail = "machuhijoseph734@gmail.com";

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!window.emailjs) {
    formNote.textContent = "Email service is still loading. Please try again in a moment.";
    return;
  }

  const formData = new FormData(contactForm);
  const templateParams = {
    from_name: formData.get("name"),
    from_email: formData.get("email"),
    reply_to: formData.get("email"),
    message: formData.get("message"),
    to_name: "Joseph Machuhi Maina",
    to_email: recipientEmail
  };

  submitButton.disabled = true;
  submitButton.textContent = "Sending...";
  formNote.textContent = "Sending your message...";

  try {
    await emailjs.send(emailServiceId, emailTemplateId, templateParams);
    formNote.textContent = "Message sent successfully. Thank you for reaching out.";
    contactForm.reset();
  } catch (error) {
    console.error("EmailJS send failed:", error);
    formNote.textContent = "Message could not be sent. Please try again or contact me on WhatsApp.";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Send Message";
  }
});
