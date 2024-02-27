import { defineConfig } from "cypress";

export default defineConfig({
  // chromeWebSecurity: false,
  // experimentalModifyObstructiveThirdPartyCode: true,
  e2e: {
    baseUrl: 'https://testing.powerus.de/',
  },
});
