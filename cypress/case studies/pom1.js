/// <reference types ="Cypress"/>
import homepage from "../support/pageObjects/automationstore/homepage";
import any_tab from "../support/pageObjects/automationstore/any_tab";
import product_tab from "../support/pageObjects/automationstore/product_tab";

describe('pom of store', () => {

    const home_visit = new homepage
    const tab_visit = new any_tab
    const product_visit=new product_tab
    it('visit the page', () => {
        home_visit.visit()
        tab_visit.go('Skincare')
        product_visit.go('Absolue Eye Precious Cells')
        product_visit.cart()
      //  tab_visit.go('Skincare')
       cy.go("back")
       cy.go("back")
     //  cy.wait(10000)
       product_visit.go('Total Moisture Facial Cream')
       cy.wait(10000)
   //cy.SelectName('Creme Precieuse Nuit 50ml')
      product_visit.cart()

        
    });
});