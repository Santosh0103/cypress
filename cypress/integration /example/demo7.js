///<reference types="Cypress"/>
//browising navigation buttons
//go
//forward
//back 

describe('', () => {
    it('', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        //cy.get('.oxd-main-menu .oxd-main-menu-item active .oxd-text').should('includes','Admin').click()
        cy.contains('Admin').click()
        cy.url().should('include','admin')
        cy.go('back')

        cy.url().should('include','dashboard')
        cy.go('forward')

        cy.reload()

        cy.reload(true)

        cy.title().should('include','OrangeHRM')
        cy.document().should('have.property','charset','UTF-8')
    });
});