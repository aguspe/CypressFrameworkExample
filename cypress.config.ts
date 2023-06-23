import { defineConfig } from 'cypress'
import * as allureWriter from '@shelex/cypress-allure-plugin/writer';


export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // @ts-ignore
      allureWriter(on, config);
      return config;
    },
    baseUrl: 'https://automationteststore.com/'
  }
})
