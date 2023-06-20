///<reference types="Cypress"/>
//iterations


describe('Iterations', () => {
    it('log the products present in haircare', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('a[href*= "index.php?rt=product/category&path"]').contains('Hair Care').click()
        cy.get('.fixed_wrapper  .fixed').each(($el,index,$list)=>{
            cy.log("index"+index+":"+$el.text())
        })
    });


    it.only('iterate and click on any product', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('a[href*= "index.php?rt=product/category&path"]').contains('Hair Care').click()
        cy.get('.fixed_wrapper  .fixed').each(($el,index,$list)=>{
            if($el.text().includes('Eau Parfumee au The Vert Shampoo')){//use $list.......................
                cy.wrap($list[2]).click()
            }
        })
        


    });
});