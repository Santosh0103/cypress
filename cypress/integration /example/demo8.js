///<reference types='Cypress'/>

// opening a site
//scroll
//drag and drop
//double click


describe('opening nineleaps', () => {
    it('first case', () => {
        cy.visit('https://www.google.com/')
        cy.get('input[title="Search"]').type('Nineleaps')
        cy.get('#jZ2SBf').click()
        cy.get('a[href$="nineleaps"]').eq(0).scrollIntoView().click()    
    });

    it('Drag and drop', () => {
        cy.visit('https://www.globalsqa.com/demo-site/draganddrop/')
        cy.get('.ui-widget-content  .ui-widget-header').eq(0).trigger('mousedown')
        cy.get('trash').trigger('mousemove').trigger('mouseup')
    });

    it('double click', () => {
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.contains('Double-Click Me To See Alert').dblclick()
        
    });
    it('orange', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[name="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.contains('My Info').click()
        cy.get('.orangehrm-action-header .oxd-text').scrollIntoView()
        cy.get('.orangehrm-action-header .oxd-button ').click()
        cy.get('.oxd-file-div .oxd-icon ').selectFile('cypress/fixtures/ja.java')
    });
    it.only('vegetable cart', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/')
        cy.get('input[type="search"]').type('ca')
        cy.get('.search-button').click()
        cy.get('.product').as('citems')
        cy.get('@citems').eq(1).contains('ADD TO CART').click()
        cy.get('@citems').each(($el,index,$list) =>{
        cy.log($el.find('.product-name').text())
        if($el.text().includes('Cashews')){
            cy.wrap($el).find('button').click()
        }
        })
        cy.title().should('include','GreenKart - veg and fruits kart')
        cy.get('.cart-icon').click()
        cy.get('.action-block').eq(0).click()
        cy.contains('Place Order').click()
        cy.get('input[type="checkbox"]').click()
        cy.contains('Proceed').click()
        
    });

})
