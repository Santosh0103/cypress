class Homepage{
    visithome(){
        cy.visit(Cypress.env('orange_home'))
    }

    login(){
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
    }

}
export default Homepage