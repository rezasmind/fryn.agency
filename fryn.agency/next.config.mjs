await import("./src/env.mjs");
import pwa from '@ducanh2912/next-pwa'


const withPWA = pwa({
  dest: "public",
});


/** @type {import("next").NextConfig} */
const config = withPWA({
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});

export default config;
