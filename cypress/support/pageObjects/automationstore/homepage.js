class homepage{
    visit(){
        cy.visit(Cypress.env('auto_store'))
    }
}
export default homepage