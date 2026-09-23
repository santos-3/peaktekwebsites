/* =========================================================
   PEAKTEK MASTER WEBSITE
   CLIENT CONFIGURATION

   Change the information in this file for each client.
========================================================= */

const siteConfig = {
  /* =========================
       BUSINESS INFORMATION
    ========================== */

  businessName: "PeakTek Websites",

  tagline: "Professional Websites for Growing Businesses",

  description: "Professional services designed around your needs. Contact us today to learn more.",

  city: "New Jersey",

  serviceArea: "Serving New Jersey and businesses nationwide",

  phone: "(555) 123-4567",

  phoneLink: "+15551234567",

  email: "peaktekwebsites@gmail.com",

  /* =========================
       BRANDING
    ========================== */

  primaryColor: "#C9A227",

  primaryHover: "#E0B93D",

  logo: "images/logo.png",

  favicon: "images/favicon.png",

  heroImage: "images/hero.jpg",

  aboutImage: "images/about.jpg",

  /* =========================
       SOCIAL MEDIA
       
       Leave blank if client
       doesn't use a platform.
    ========================== */

  social: {
    facebook: "",

    instagram: "",

    linkedin: "",

    youtube: "",

    tiktok: "",
  },

  /* =========================
       WEBSITE FEATURES
       
       true = show
       false = hide
    ========================== */

  features: {
    stats: false,

    pricing: false,

    portfolio: true,

    testimonials: false,

    faq: false,

    contactForm: true,

    darkMode: true,

    animations: true,
  },

  /* =========================
       SETTINGS
    ========================== */

  settings: {
    showWebsiteCredit: true,

    enablePhoneLink: true,

    enableEmailLink: true,
  },

  /* =========================
       SEO
       
       Leave title/description
       blank to automatically
       use business information.
    ========================== */

  seo: {
    title: "",

    description: "",

    keywords: "professional services, local business, services",
  },

  /* =========================
       HERO
    ========================== */

  hero: {
    badge: "Website Design For Small Businesses",

    headline: "A Professional Website for Your Business.",

    description: "Modern, mobile-friendly websites designed to help your business stand out and make a great first impression.",

    primaryButton: "Start Your Website",

    primaryButtonLink: "#contact",

    secondaryButton: "View Our Work",

    secondaryButtonLink: "#portfolio",
  },

  /* =========================
       STATS
       
       Replace these with real
       client information.
    ========================== */

  stats: [
    {
      number: "10+",
      label: "Years Experience",
    },

    {
      number: "500+",
      label: "Clients Served",
    },

    {
      number: "100%",
      label: "Professional Service",
    },

    {
      number: "5★",
      label: "Client Satisfaction",
    },
  ],

  /* =========================
       SERVICES
    ========================== */

  servicesIntro:
    "Explore our professional services and discover how we can help.",

  services: [
    {
      icon: "01",

      title: "Website Design",

      description: "Professional websites designed specifically for your business and customers.",

      features: [
        "Custom business website",
        "Mobile-Friendly design",
        "Professional layout",
      ],
    },

    {
      icon: "02",

      title: "Website Redesign",

      description: "Give your existing website a modern look and improve the experience for your customers.",

      features: [
        "Modern redesign",
        "Improved mobile experience",
        "Updated content",
      ],
    },

    {
      icon: "03",

      title: "Website Maintenance",

      description:
        "Keep your website current, secure, and looking professional as your business grows.",

      features: [
        "Content updates",
        "Image updates",
        "Ongoing support",
      ],
    },
  ],

  /* =========================
       ABOUT
    ========================== */

  about: {
    eyebrow: "About PeakTek",

    title: "Professional Websites Without the Hassle.",

    paragraphs: [
      "PeakTek Websites helps small businesses establish a professional online presence with modern, responsive websites.",

      "We focus on clean design, mobile-friendly experiences, and websites that make it easy for customers to learn about your business and get in touch.",

      "Whether you're starting from scratch or your current website needs a refresh, we can help bring your vision online.",
    ],

    button: "Let's Work Together",

    buttonLink: "#contact",
  },

  /* =========================
       PORTFOLIO
    ========================== */

  portfolio: [
    {
      image: "images/portfolio/project-1.jpg",

      title: "Project One",

      description: "A recent project completed for a valued client.",
    },

    {
      image: "images/portfolio/project-2.jpg",

      title: "Project Two",

      description: "A customized solution created around the client's needs.",
    },

    {
      image: "images/portfolio/project-3.jpg",

      title: "Project Three",

      description: "Professional work delivered with attention to detail.",
    },
  ],

  /* =========================
       TESTIMONIALS
       
       Replace demo testimonials
       with real client-approved
       testimonials before launch.
    ========================== */

  testimonials: [
    {
      quote:
        "Professional, responsive, and easy to work with. I would definitely recommend their services.",

      name: "Client Name",

      role: "Client",
    },

    {
      quote:
        "The entire process was straightforward and professional from beginning to end.",

      name: "Client Name",

      role: "Client",
    },

    {
      quote:
        "Excellent communication and attention to detail. Very happy with the experience.",

      name: "Client Name",

      role: "Client",
    },
  ],

  /* =========================
       PRICING
       
       Only displayed when:
       features.pricing = true
    ========================== */

  pricing: [
    {
      name: "Basic",

      price: "$XX",

      description: "A simple option for basic needs.",

      featured: false,

      features: [
        "Professional service",
        "Standard support",
        "Flexible scheduling",
      ],
    },

    {
      name: "Standard",

      price: "$XX",

      description: "A complete option for most clients.",

      featured: true,

      features: [
        "Everything in Basic",
        "Additional support",
        "Priority scheduling",
      ],
    },

    {
      name: "Premium",

      price: "$XX",

      description: "Additional support for more involved needs.",

      featured: false,

      features: [
        "Everything in Standard",
        "Additional services",
        "Personalized support",
      ],
    },
  ],

  /* =========================
       FAQ
    ========================== */

  faq: [
    {
      question: "How do I get started?",

      answer:
        "Contact us through the website, phone, or email. We'll discuss your needs and explain the next steps.",
    },

    {
      question: "Do I need an appointment?",

      answer:
        "Appointment requirements vary by service. Contact us to discuss availability and scheduling.",
    },

    {
      question: "What areas do you serve?",

      answer:
        "We serve the areas listed on this website. Contact us if you're outside the listed service area.",
    },

    {
      question: "How much do your services cost?",

      answer:
        "Pricing depends on the service and scope of work. Contact us for current pricing or a customized quote.",
    },
  ],

  /* =========================
       CTA
    ========================== */

  cta: {
    eyebrow: "Ready to Get Started?",

    title: "Let's Work Together.",

    description:
      "Contact us today to discuss your needs and find the right solution.",

    button: "Contact Us",

    buttonLink: "#contact",
  },

  /* =========================
       CONTACT
    ========================== */

  contact: {
    eyebrow: "Get In Touch",

    title: "Let's Talk.",

    description:
      "Have a question or ready to get started? Reach out today and we'll be happy to help.",
  },

  /* =========================
       FOOTER
    ========================== */

  footer: {
    description: "Professional services designed around your needs.",

    copyright: "All rights reserved.",
  },
};
