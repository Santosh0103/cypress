///<reference types="Cypress"/>
//alias and invoke
describe('product', () => {
    it('test case', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=52"]').click()
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as("Productname1")
        cy.get('@Productname1').its('length').should('be.greaterThan',10)
        cy.get('@Productname1').should('include',"Seaweed Conditioner")

        cy.get('.fixed_wrapper .prdocutname').should('have.lenght',8)
        // cy.get('')
        // cy.get('')
        
    });
});