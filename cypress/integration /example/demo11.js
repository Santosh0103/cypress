///<reference types="Cypress"/>
//web table accesseing
describe('everything', () => {
    it('checkbox', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       // cy.get('input[type="checkbox"]').check(['option1','option2'])
        // cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        // cy.get('#checkBoxOption2').check()
        // cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('.tableFixHead').find('tr td:nth-child(2)').each(($el,index,$list)=>{
            if($el.text().includes('Python')){
                $el.next().then((cost)=>{
                   const data =cost.text()
                    cy.log(data)
                })


            }

        })
       

    });
})