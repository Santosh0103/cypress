///<reference types="Cypress"/>

describe('first test suite', () => {
    it('first test case', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        //to check login name
        //cy.get('.oxd-userdropdown-name').should('have.text','ankita22 Patel')
        cy.get('.oxd-userdropdown-img').click()
        cy.get('.oxd-userdropdown-link').should('have.length','4')
       // cy.get('a[href="/web/index.php/auth/logout"]').click()
        cy.get('.oxd-userdropdown-link').eq(3).contains('Logout').then((lastlink) =>{
            const linkname =lastlink.text()
            cy.log(linkname)
            cy.wrap(lastlink).click() 
        })                            
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    });
})
