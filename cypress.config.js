const { defineConfig } = require("cypress");

async function setupNodeEvents(on,config){

  return config;
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern:"cypress/case studies/*.js",
    env:{
      orange_home:"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      auto_store:"https://automationteststore.com/"
    }
    },
  },
);

