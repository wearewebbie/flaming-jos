export default {
  title: "Flaming Jo's",
  description: "Website Description",
  schemaType: "LocalBusiness",
  url: process.env.CF_PAGES_BRANCH === 'main'
    ? "https://PROD URL"
    : process.env.CF_PAGES_URL || "http://localhost:8080",
  logo: "/assets/images/logo-icon.png",
  logoFull: "/assets/images/logo-full.png",
  image: "SEO Preview Image Card (1200 x 675 pixels)",
  phone: "07702763234",
  email: "info@flamingjos.co.uk",
  contactFormAction: "https://submit-form.com/c7mEgC9fM",
  social: {
    instagram: "https://www.instagram.com/flaming_jos/",
    facebook: "https://facebook.com/example",
    tiktok: ""
  }
};