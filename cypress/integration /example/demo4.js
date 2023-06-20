/// <reference types = "Cypress"/>

describe('automation page', () => {
    it('first case', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.get('input[name="first_name"]').type('santosh')
        cy.get('#ContactUsFrm_email').should('have.attr','name','email')
        cy.get('#ContactUsFrm_email').type("santosh123@gmail.com")
        cy.get('#ContactUsFrm_enquiry').type("santosh is a goodboi")
        cy.get('.col-md-6 > .btn').click()
        cy.get('.contentpanel > .mb40 ').should('contain.text','Your enquiry has been successfully sent to the store owner!')
        alert('hi')




        
    });
});