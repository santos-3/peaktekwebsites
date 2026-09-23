/* =========================================================
   PEAKTEK MASTER WEBSITE
   UNIVERSAL WEBSITE ENGINE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* =====================================================
       CHECK CONFIG
    ===================================================== */

  if (typeof siteConfig === "undefined") {
    console.error("PeakTek: config.js could not be loaded.");
    return;
  }

  /* =====================================================
       DOM ELEMENTS
    ===================================================== */

  const body = document.body;

  const siteHeader = document.getElementById("siteHeader");

  const desktopNav = document.getElementById("desktopNav");
  const mobileNav = document.getElementById("mobileNav");
  const footerNav = document.getElementById("footerNav");

  const menuToggle = document.getElementById("menuToggle");

  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  const scrollTopBtn = document.getElementById("scrollTopBtn");

  const contactForm = document.getElementById("contactForm");

  const contactFormWrapper = document.getElementById("contactFormWrapper");

  const statsSection = document.getElementById("statsSection");

  const pricingSection = document.getElementById("pricing");

  const portfolioSection = document.getElementById("portfolio");

  const testimonialsSection = document.getElementById("testimonials");

  const faqSection = document.getElementById("faq");

  /* =====================================================
       HELPER FUNCTIONS
    ===================================================== */

  function setText(id, value) {
    const element = document.getElementById(id);

    if (element) {
      element.textContent = value ?? "";
    }
  }

  function escapeHTML(value) {
    if (value === null || value === undefined) {
      return "";
    }

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function hideElement(element) {
    if (element) {
      element.classList.add("hidden");
    }
  }

  function showElement(element) {
    if (element) {
      element.classList.remove("hidden");
    }
  }

  /* =====================================================
       BRAND COLORS
    ===================================================== */

  document.documentElement.style.setProperty(
    "--color-primary",
    siteConfig.primaryColor || "#2563eb",
  );

  document.documentElement.style.setProperty(
    "--color-primary-hover",
    siteConfig.primaryHover || "#1d4ed8",
  );

  /* =====================================================
       BUSINESS INFORMATION
    ===================================================== */

  const businessName = siteConfig.businessName || "Business Name";

  const phone = siteConfig.phone || "";

  const phoneLink = siteConfig.phoneLink || "";

  const email = siteConfig.email || "";

  const city = siteConfig.city || "";

  const serviceArea = siteConfig.serviceArea || "";

  /* =====================================================
       SEO
    ===================================================== */

  const seoTitle =
    siteConfig.seo?.title ||
    `${businessName} | ${siteConfig.tagline || "Professional Services"}`;

  const seoDescription =
    siteConfig.seo?.description || siteConfig.description || "";

  document.title = seoTitle;

  const metaDescription = document.getElementById("metaDescription");

  if (metaDescription) {
    metaDescription.setAttribute("content", seoDescription);
  }

  const themeColor = document.getElementById("themeColor");

  if (themeColor) {
    themeColor.setAttribute("content", siteConfig.primaryColor || "#2563eb");
  }

  const favicon = document.getElementById("favicon");

  if (favicon && siteConfig.favicon) {
    favicon.href = siteConfig.favicon;
  }

  /* =====================================================
       LOGO
    ===================================================== */

  const siteLogo = document.getElementById("siteLogo");

  const footerLogo = document.getElementById("footerLogo");

  const logoText = document.getElementById("logoText");

  if (siteConfig.logo) {
    if (siteLogo) {
      siteLogo.src = siteConfig.logo;

      siteLogo.alt = `${businessName} logo`;
    }

    if (footerLogo) {
      footerLogo.src = siteConfig.logo;

      footerLogo.alt = "";
    }
  }

  if (logoText) {
    logoText.textContent = businessName;
  }

  /* =====================================================
       HERO
    ===================================================== */

  const hero = siteConfig.hero || {};

  setText("heroBadge", hero.badge || "Professional Services");

  setText("heroHeadline", hero.headline || businessName);

  setText("heroDescription", hero.description || siteConfig.description || "");

  const heroPrimaryButton = document.getElementById("heroPrimaryButton");

  if (heroPrimaryButton) {
    heroPrimaryButton.textContent = hero.primaryButton || "Get Started";

    heroPrimaryButton.href = hero.primaryButtonLink || "#contact";
  }

  const heroSecondaryButton = document.getElementById("heroSecondaryButton");

  if (heroSecondaryButton) {
    heroSecondaryButton.textContent =
      hero.secondaryButton || "Explore Services";

    heroSecondaryButton.href = hero.secondaryButtonLink || "#services";
  }

  const heroImage = document.getElementById("heroImage");

  if (heroImage) {
    if (siteConfig.heroImage) {
      heroImage.src = siteConfig.heroImage;

      heroImage.alt = businessName;
    } else {
      hideElement(heroImage.parentElement);
    }
  }

  /* =====================================================
       CONTACT INFORMATION
    ===================================================== */

  const phoneHref = phoneLink ? `tel:${phoneLink}` : "#";

  const emailHref = email ? `mailto:${email}` : "#";

  const heroPhone = document.getElementById("heroPhone");

  if (heroPhone) {
    heroPhone.href = phoneHref;

    heroPhone.innerHTML = `<span>☎</span><span>${escapeHTML(
      phone || "Call Us",
    )}</span>`;
  }

  const heroEmail = document.getElementById("heroEmail");

  if (heroEmail) {
    heroEmail.href = emailHref;

    heroEmail.innerHTML = `<span>✉</span><span>${escapeHTML(
      email || "Email Us",
    )}</span>`;
  }

  setText("phoneText", phone);

  setText("emailText", email);

  setText("contactCity", city);

  setText("contactServiceArea", serviceArea);

  const contactPhone = document.getElementById("contactPhone");

  if (contactPhone) {
    contactPhone.href = phoneHref;
  }

  const contactEmail = document.getElementById("contactEmail");

  if (contactEmail) {
    contactEmail.href = emailHref;
  }

  const footerPhone = document.getElementById("footerPhone");

  if (footerPhone) {
    footerPhone.href = phoneHref;

    footerPhone.textContent = phone;
  }

  const footerEmail = document.getElementById("footerEmail");

  if (footerEmail) {
    footerEmail.href = emailHref;

    footerEmail.textContent = email;
  }

  /* =====================================================
       PHONE / EMAIL SETTINGS
    ===================================================== */

  const enablePhone = siteConfig.settings?.enablePhoneLink !== false;

  const enableEmail = siteConfig.settings?.enableEmailLink !== false;

  if (!enablePhone) {
    ["heroPhone", "contactPhone", "footerPhone"].forEach((id) => {
      hideElement(document.getElementById(id));
    });
  }

  if (!enableEmail) {
    ["heroEmail", "contactEmail", "footerEmail"].forEach((id) => {
      hideElement(document.getElementById(id));
    });
  }

  /* =====================================================
       STATS
    ===================================================== */

  const statsContainer = document.getElementById("statsContainer");

  if (
    siteConfig.features?.stats === false ||
    !Array.isArray(siteConfig.stats) ||
    siteConfig.stats.length === 0
  ) {
    hideElement(statsSection);
  } else {
    showElement(statsSection);

    if (statsContainer) {
      statsContainer.innerHTML = siteConfig.stats
        .map(
          (stat) => `

                        <div class="stat">

                            <span class="stat-number">
                                ${escapeHTML(stat.number)}
                            </span>

                            <span class="stat-label">
                                ${escapeHTML(stat.label)}
                            </span>

                        </div>

                    `,
        )
        .join("");
    }
  }

  /* =====================================================
       SERVICES
    ===================================================== */

  const servicesContainer = document.getElementById("servicesContainer");

  setText(
    "servicesIntro",
    siteConfig.servicesIntro ||
      "Professional services designed around your needs.",
  );

  if (servicesContainer) {
    const services = Array.isArray(siteConfig.services)
      ? siteConfig.services
      : [];

    servicesContainer.innerHTML = services
      .map(
        (service, index) => `

                    <article class="service-card">

                        <div class="service-icon">
                            ${escapeHTML(service.icon || String(index + 1))}
                        </div>

                        <h3>
                            ${escapeHTML(service.title)}
                        </h3>

                        <p>
                            ${escapeHTML(service.description)}
                        </p>

                        ${
                          Array.isArray(service.features) &&
                          service.features.length
                            ? `

                                    <ul class="service-list">

                                        ${service.features
                                          .map(
                                            (feature) => `
                                                    <li>
                                                        ${escapeHTML(feature)}
                                                    </li>
                                                `,
                                          )
                                          .join("")}

                                    </ul>

                                `
                            : ""
                        }

                    </article>

                `,
      )
      .join("");
  }

  /* =====================================================
       SERVICE DROPDOWN
    ===================================================== */

  const serviceSelect = document.getElementById("service");

  if (serviceSelect) {
    const services = Array.isArray(siteConfig.services)
      ? siteConfig.services
      : [];

    services.forEach((service) => {
      const option = document.createElement("option");

      option.value = service.title || "";

      option.textContent = service.title || "";

      serviceSelect.appendChild(option);
    });
  }

  /* =====================================================
       ABOUT
    ===================================================== */

  const about = siteConfig.about || {};

  setText("aboutEyebrow", about.eyebrow || "About Us");

  setText(
    "aboutTitle",
    about.title || "Professional Service Built Around You.",
  );

  const aboutParagraphs = document.getElementById("aboutParagraphs");

  if (aboutParagraphs) {
    aboutParagraphs.innerHTML = (
      Array.isArray(about.paragraphs) ? about.paragraphs : []
    )
      .map(
        (paragraph) => `
                    <p>
                        ${escapeHTML(paragraph)}
                    </p>
                `,
      )
      .join("");
  }

  const aboutButton = document.getElementById("aboutButton");

  if (aboutButton) {
    aboutButton.textContent = about.button || "Contact Us";

    aboutButton.href = about.buttonLink || "#contact";
  }

  const aboutImage = document.getElementById("aboutImage");

  if (aboutImage) {
    if (siteConfig.aboutImage) {
      aboutImage.src = siteConfig.aboutImage;

      aboutImage.alt = `About ${businessName}`;
    } else {
      hideElement(aboutImage.parentElement);
    }
  }

  /* =====================================================
       PORTFOLIO
    ===================================================== */

  const portfolioContainer = document.getElementById("portfolioContainer");

  if (
    siteConfig.features?.portfolio === false ||
    !Array.isArray(siteConfig.portfolio) ||
    siteConfig.portfolio.length === 0
  ) {
    hideElement(portfolioSection);
  } else {
    showElement(portfolioSection);

    if (portfolioContainer) {
      portfolioContainer.innerHTML = siteConfig.portfolio
        .map(
          (project) => `

                        <article class="portfolio-card">

                            <div class="portfolio-image-wrapper">

                                <img
                                    src="${escapeHTML(project.image)}"
                                    alt="${escapeHTML(project.title)}"
                                    class="portfolio-image"
                                    loading="lazy"
                                >

                            </div>

                            <div class="portfolio-content">

                                <h3>
                                    ${escapeHTML(project.title)}
                                </h3>

                                <p>
                                    ${escapeHTML(project.description)}
                                </p>

                            </div>

                        </article>

                    `,
        )
        .join("");
    }
  }

  /* =====================================================
       TESTIMONIALS
    ===================================================== */

  const testimonialSlider = document.getElementById("testimonialSlider");

  if (
    siteConfig.features?.testimonials === false ||
    !Array.isArray(siteConfig.testimonials) ||
    siteConfig.testimonials.length === 0
  ) {
    hideElement(testimonialsSection);
  } else {
    showElement(testimonialsSection);

    if (testimonialSlider) {
      testimonialSlider.innerHTML = siteConfig.testimonials
        .map(
          (testimonial) => `

                        <article class="testimonial-card">

                            <div
                                class="stars"
                                aria-label="5 out of 5 stars"
                            >
                                ★★★★★
                            </div>

                            <blockquote>
                                "${escapeHTML(testimonial.quote)}"
                            </blockquote>

                            <div class="testimonial-author">

                                <strong>
                                    ${escapeHTML(testimonial.name)}
                                </strong>

                                <span>
                                    ${escapeHTML(testimonial.role)}
                                </span>

                            </div>

                        </article>

                    `,
        )
        .join("");
    }
  }

  /* =====================================================
       PRICING
    ===================================================== */

  const pricingContainer = document.getElementById("pricingContainer");

  if (
    siteConfig.features?.pricing !== true ||
    !Array.isArray(siteConfig.pricing) ||
    siteConfig.pricing.length === 0
  ) {
    hideElement(pricingSection);
  } else {
    showElement(pricingSection);

    if (pricingContainer) {
      pricingContainer.innerHTML = siteConfig.pricing
        .map(
          (plan) => `

                        <article
                            class="pricing-card ${
                              plan.featured ? "featured" : ""
                            }"
                        >

                            ${
                              plan.featured
                                ? `
                                        <span class="pricing-badge">
                                            Most Popular
                                        </span>
                                    `
                                : ""
                            }

                            <h3>
                                ${escapeHTML(plan.name)}
                            </h3>

                            <div class="price">
                                ${escapeHTML(plan.price)}
                            </div>

                            <p class="price-description">
                                ${escapeHTML(plan.description)}
                            </p>

                            <ul class="pricing-features">

                                ${(plan.features || [])
                                  .map(
                                    (feature) => `
                                                <li>
                                                    ${escapeHTML(feature)}
                                                </li>
                                            `,
                                  )
                                  .join("")}

                            </ul>

                            <a
                                href="#contact"
                                class="btn btn-primary btn-full"
                            >
                                Get Started
                            </a>

                        </article>

                    `,
        )
        .join("");
    }
  }

  /* =====================================================
       FAQ
    ===================================================== */

  const faqContainer = document.getElementById("faqContainer");

  if (
    siteConfig.features?.faq === false ||
    !Array.isArray(siteConfig.faq) ||
    siteConfig.faq.length === 0
  ) {
    hideElement(faqSection);
  } else {
    showElement(faqSection);

    if (faqContainer) {
      faqContainer.innerHTML = siteConfig.faq
        .map(
          (item, index) => `

                        <div class="faq-item">

                            <button
                                class="faq-question"
                                type="button"
                                aria-expanded="false"
                                aria-controls="faq-answer-${index}"
                            >

                                <span>
                                    ${escapeHTML(item.question)}
                                </span>

                                <span class="faq-plus">
                                    +
                                </span>

                            </button>

                            <div
                                class="faq-answer"
                                id="faq-answer-${index}"
                            >

                                <div class="faq-answer-inner">

                                    ${escapeHTML(item.answer)}

                                </div>

                            </div>

                        </div>

                    `,
        )
        .join("");

      faqContainer.querySelectorAll(".faq-question").forEach((button) => {
        button.addEventListener("click", () => {
          const item = button.closest(".faq-item");

          const answer = item.querySelector(".faq-answer");

          const isOpen = item.classList.contains("open");

          faqContainer
            .querySelectorAll(".faq-item.open")
            .forEach((openItem) => {
              openItem.classList.remove("open");

              const openButton = openItem.querySelector(".faq-question");

              const openAnswer = openItem.querySelector(".faq-answer");

              openButton?.setAttribute("aria-expanded", "false");

              if (openAnswer) {
                openAnswer.style.maxHeight = null;
              }
            });

          if (!isOpen) {
            item.classList.add("open");

            button.setAttribute("aria-expanded", "true");

            answer.style.maxHeight = `${answer.scrollHeight}px`;
          }
        });
      });
    }
  }

  /* =====================================================
       CTA
    ===================================================== */

  const cta = siteConfig.cta || {};

  setText("ctaEyebrow", cta.eyebrow || "Ready to Get Started?");

  setText("ctaTitle", cta.title || "Let's Work Together.");

  setText("ctaDescription", cta.description || "Contact us today.");

  const ctaButton = document.getElementById("ctaButton");

  if (ctaButton) {
    ctaButton.textContent = cta.button || "Contact Us";

    ctaButton.href = cta.buttonLink || "#contact";
  }

  /* =====================================================
       CONTACT SECTION
    ===================================================== */

  const contact = siteConfig.contact || {};

  setText("contactEyebrow", contact.eyebrow || "Get In Touch");

  setText("contactTitle", contact.title || "Let's Talk.");

  setText(
    "contactDescription",
    contact.description || "Have a question or ready to get started?",
  );

  if (siteConfig.features?.contactForm === false) {
    hideElement(contactFormWrapper);
  } else {
    showElement(contactFormWrapper);
  }

  /* =====================================================
       FOOTER
    ===================================================== */

  const footer = siteConfig.footer || {};

  setText("footerBusinessName", businessName);

  setText(
    "footerDescription",
    footer.description || siteConfig.description || "",
  );

  const currentYear = new Date().getFullYear();

  setText(
    "footerCopyright",
    `© ${currentYear} ${businessName}. ${
      footer.copyright || "All rights reserved."
    }`,
  );

  /* =====================================================
       WEBSITE CREDIT
    ===================================================== */

  const websiteCredit = document.getElementById("websiteCredit");

  if (siteConfig.settings?.showWebsiteCredit === false) {
    hideElement(websiteCredit);
  } else {
    setText("websiteCredit", "Website by PeakTek Websites");
  }

  /* =====================================================
       NAVIGATION
    ===================================================== */

  const navItems = [
    {
      label: "Home",
      href: "#home",
    },

    {
      label: "Services",
      href: "#services",
    },

    {
      label: "About",
      href: "#about",
    },
  ];

  if (
    siteConfig.features?.portfolio !== false &&
    Array.isArray(siteConfig.portfolio) &&
    siteConfig.portfolio.length > 0
  ) {
    navItems.push({
      label: "Our Work",
      href: "#portfolio",
    });
  }

  if (
    siteConfig.features?.pricing === true &&
    Array.isArray(siteConfig.pricing) &&
    siteConfig.pricing.length > 0
  ) {
    navItems.push({
      label: "Pricing",
      href: "#pricing",
    });
  }

  if (
    siteConfig.features?.faq !== false &&
    Array.isArray(siteConfig.faq) &&
    siteConfig.faq.length > 0
  ) {
    navItems.push({
      label: "FAQ",
      href: "#faq",
    });
  }

  navItems.push({
    label: "Contact",
    href: "#contact",
  });

  function buildNavigation() {
    const links = navItems
      .map(
        (item) => `
                    <a href="${item.href}">
                        ${escapeHTML(item.label)}
                    </a>
                `,
      )
      .join("");

    if (desktopNav) {
      desktopNav.innerHTML = links;
    }

    if (mobileNav) {
      mobileNav.innerHTML = links;
    }

    if (footerNav) {
      footerNav.innerHTML = links;
    }
  }

  buildNavigation();

  /* =====================================================
       MOBILE MENU
    ===================================================== */

  function closeMobileMenu() {
    mobileNav?.classList.remove("open");

    mobileNav?.setAttribute("aria-hidden", "true");

    menuToggle?.setAttribute("aria-expanded", "false");

    menuToggle?.setAttribute("aria-label", "Open menu");
  }

  function openMobileMenu() {
    mobileNav?.classList.add("open");

    mobileNav?.setAttribute("aria-hidden", "false");

    menuToggle?.setAttribute("aria-expanded", "true");

    menuToggle?.setAttribute("aria-label", "Close menu");
  }

  menuToggle?.addEventListener("click", () => {
    const isOpen = mobileNav?.classList.contains("open");

    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("click", (event) => {
    if (
      mobileNav &&
      menuToggle &&
      mobileNav.classList.contains("open") &&
      !mobileNav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMobileMenu();
    }
  });

  /* =====================================================
       DARK MODE
    ===================================================== */

  const darkModeEnabled = siteConfig.features?.darkMode !== false;

  function updateThemeIcon() {
    if (!themeIcon) {
      return;
    }

    const isDark = body.classList.contains("dark");

    themeIcon.textContent = isDark ? "☀️" : "🌙";

    themeToggle?.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode",
    );

    themeToggle?.setAttribute(
      "title",
      isDark ? "Switch to light mode" : "Switch to dark mode",
    );
  }

  if (darkModeEnabled) {
    const savedTheme = localStorage.getItem("peaktek-theme");

    if (savedTheme === "dark") {
      body.classList.add("dark");
    } else if (savedTheme === "light") {
      body.classList.remove("dark");
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      body.classList.add("dark");
    }

    updateThemeIcon();

    themeToggle?.addEventListener("click", () => {
      body.classList.toggle("dark");

      localStorage.setItem(
        "peaktek-theme",
        body.classList.contains("dark") ? "dark" : "light",
      );

      updateThemeIcon();
    });
  } else {
    hideElement(themeToggle);
  }

  /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

  function handleHeaderScroll() {
    if (!siteHeader) {
      return;
    }

    if (window.scrollY > 20) {
      siteHeader.classList.add("scrolled");
    } else {
      siteHeader.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleHeaderScroll, {
    passive: true,
  });

  handleHeaderScroll();

  /* =====================================================
       SCROLL TO TOP
    ===================================================== */

  function handleScrollTop() {
    if (!scrollTopBtn) {
      return;
    }

    if (window.scrollY > 500) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  }

  window.addEventListener("scroll", handleScrollTop, {
    passive: true,
  });

  scrollTopBtn?.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  /* =====================================================
       SMOOTH ANCHOR LINKS
    ===================================================== */

  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');

    if (!link) {
      return;
    }

    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
    });

    closeMobileMenu();
  });

  /* =====================================================
       CONTACT FORM
       
       Opens the client's email
       application with the
       completed inquiry.
    ===================================================== */

  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const status = document.getElementById("formStatus");

    const name = document.getElementById("name")?.value.trim();

    const senderEmail = document.getElementById("email")?.value.trim();

    const senderPhone = document.getElementById("phone")?.value.trim();

    const service = document.getElementById("service")?.value.trim();

    const message = document.getElementById("message")?.value.trim();

    /* Basic validation */

    if (!name || !senderEmail || !message) {
      if (status) {
        status.textContent = "Please complete the required fields.";

        status.className = "form-status error";
      }

      return;
    }

    /* Basic email validation */

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(senderEmail)) {
      if (status) {
        status.textContent = "Please enter a valid email address.";

        status.className = "form-status error";
      }

      return;
    }

    /* Create email */

    const subject = encodeURIComponent(`Website Inquiry - ${businessName}`);

    const emailBody = `New website inquiry

Name: ${name}

Email: ${senderEmail}

Phone: ${senderPhone || "Not provided"}

Service: ${service || "Not specified"}

Message:

${message}
`;

    const mailto =
      `mailto:${email}` +
      `?subject=${subject}` +
      `&body=${encodeURIComponent(emailBody)}`;

    if (status) {
      status.textContent = "Opening your email application...";

      status.className = "form-status success";
    }

    window.location.href = mailto;
  });

  /* =====================================================
       SOCIAL MEDIA
    ===================================================== */

  const socialLinks = document.getElementById("socialLinks");

  if (socialLinks) {
    const social = siteConfig.social || {};

    const platforms = [
      {
        name: "Facebook",
        key: "facebook",
        short: "f",
      },

      {
        name: "Instagram",
        key: "instagram",
        short: "ig",
      },

      {
        name: "LinkedIn",
        key: "linkedin",
        short: "in",
      },

      {
        name: "YouTube",
        key: "youtube",
        short: "yt",
      },

      {
        name: "TikTok",
        key: "tiktok",
        short: "tt",
      },
    ];

    socialLinks.innerHTML = platforms
      .filter((platform) => social[platform.key])
      .map(
        (platform) => `

                        <a
                            href="${escapeHTML(social[platform.key])}"
                            class="social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="${platform.name}"
                            title="${platform.name}"
                        >
                            ${platform.short}
                        </a>

                    `,
      )
      .join("");

    if (socialLinks.innerHTML === "") {
      hideElement(socialLinks);
    }
  }

  /* =====================================================
       ANIMATIONS
    ===================================================== */

  const animationsEnabled = siteConfig.features?.animations !== false;

  const reducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (animationsEnabled && !reducedMotion) {
    const animatedElements = document.querySelectorAll(
      `
                .service-card,
                .portfolio-card,
                .testimonial-card,
                .pricing-card,
                .faq-item,
                .section-heading,
                .about-content,
                .about-image-wrapper,
                .contact-info,
                .contact-form-wrapper
                `,
    );

    animatedElements.forEach((element) => {
      element.classList.add("animate-ready");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      },
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });
  }

  /* =====================================================
       FINAL LOGO ACCESSIBILITY
    ===================================================== */

  if (siteLogo) {
    siteLogo.alt = `${businessName} logo`;
  }

  /* =====================================================
       READY
    ===================================================== */

  console.log(`${businessName} website loaded successfully.`);
});
