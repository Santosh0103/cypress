///<reference types="Cypress"/>



//radio buttons
//checkboxes ,,etccc


describe('everything', () => {
    it('checkbox', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[type="checkbox"]').check(['option1', 'option2'])
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        // cy.get('#checkBoxOption2').check()
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')


    });

    it('dropdown', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select('option1').should('have.value', 'option1')

    });

    it('suggestionbox   or DYNAMIC DROPDOWN', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item').each(($el, index, $list) => {
            expect($list).to.have.length(3)
            if ($el.text() == 'India') {

                cy.wrap($el).click()
            }
        })

    });


    it.skip('dynamic drop down ', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.contains('Admin').click()
        cy.get('input[placeholder="Type for hints..."]').type('L')
        cy.get('.oxd-autocomplete-dropdown > * > span').each(($el, index, $list) => {

            if ($el.text() == 'Lisa  Andrews') {
                cy.wrap($el).click()
            }

        })

    });



    it('hide and show', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').type('sai').should('be.visible')
        cy.get('#hide-textbox').click()
       // cy.get('#displayed-text').should('not.be.visible').and('have.text', 'sai')

    });

    it('alert and confirm', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(("Hello , share this practice page and share your knowledge"))
        })
        cy.get('#confirmbtn').click()


    });
    it('radio buttons', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.radioButton').check('radio1')

    });
    it('mousehover', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#mousehover').trigger('mouseover')
        cy.contains('Top').click({ force: true })
        // cy.url().should('include','top')
        //or

        // cy.get('#mousehover').invoke(show)
        // cy.contains('Top').click({force:true})
        //or
        cy.contains('Top').click({ force: true })
    });

    it('tab switching', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr', 'target').click()
    });
    it('new window', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.contains('Click Here').click()
    });

});