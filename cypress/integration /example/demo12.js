///<reference types="Cypress"/>



describe('DATA DRIVEN', () => {

    before(function(){
        cy.fixture('example').then(function(data){
            globalThis.data=data
        })

    })

    it('first test case', () => {
        cy.each(($data,index,$list)=>{
    

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type(data.name[index])
        cy.get('input[name="password"]').type(data.password[index])
        cy.get('button[type="submit"]').click()


        })
        //to check login name
        // cy.get('.oxd-userdropdown-tab').click()
        // cy.contains("Logout").click()
        //try data driven and also newtours website
    })

})