class Logout{


logout(){

       cy.get('.oxd-userdropdown-tab .oxd-userdropdown-icon').click()
       cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
}
}
export default Logout