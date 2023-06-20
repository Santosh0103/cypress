import Homepage from "../support/pageObjects/orangrhrm/Homepage";
import Link from "../support/pageObjects/orangrhrm/Link";
import Logout from "../support/pageObjects/orangrhrm/Logout";

describe('', () => {
    const homepage= new Homepage()
    const linkobj = new Link()
    const logoutobj =new Logout()

beforeEach(function(){
    homepage.visithome()
    cy.wait(10000)
    homepage.login()
})

    it('', () => {
        
        cy.wait(6000)
        //cy.SelectName('Admin')
        linkobj.selectlink('Admin')


       
//         //cy.get('.oxd-main-menu .oxd-main-menu-item active .oxd-text').should('includes','Admin').click()
//         cy.contains('Admin').click()
//         cy.url().should('include','admin')



        
    });
});