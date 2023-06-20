///<reference types ="Cypress"/>



//REGISTER PAGE



describe('case study', () => {

    // before(function(){
    //     cy.fixture('example').then(function(data){
    //         globalThis.data=data
    //     })
    beforeEach(function(){
        cy.visit('https://demo.guru99.com/test/newtours/')

    })

    
    it('register and login', () => {
        cy.fixture('example').then(function(data){         
        data.forEach(user => {
        cy.get('a[href="register.php"]').eq(0).click()
        cy.get('input[name="firstName"]').type(user.first)
        cy.get('input[name="lastName"]').type(user.last)
        cy.get('input[name="phone"]').type(user.phone)
        cy.get('input[name="userName"]').type(user.email)
        cy.get('input[name="address1"]').type(user.address)
        cy.get('input[name="city"]').type(user.city)
        cy.get('input[name="state"]').type(user.state)
        cy.get('input[name="postalCode"]').type(user.postal)
        cy.get('select[name="country"]').select('INDIA')
        cy.get('input[name="email"]').type(user.username)
        cy.get('input[name="password"]').type(user.password)
        cy.get('input[name="confirmPassword"]').type(user.confirmpassword)
        cy.get('input[name="submit"]').click()
        cy.get('a[href="login.php"]').click()
        cy.get('input[name="userName"]').type(user.username)
        cy.get('input[name="password"]').type(user.password)
        cy.get('input[name="submit"]').click()

    })
})
})
    


    it.only('flights', () => {

        cy.get('a[href="reservation.php"]').click()
        cy.get('input[value="oneway"]').check()
        cy.get('select[name="passCount"]').select(3)
        cy.get('select[name="fromPort"]').select('Paris')
        cy.get('select[name="fromMonth"]').select('June')
        cy.get('select[name="fromDay"]').select('13')
        cy.get('select[name="toPort"]').select('London')
        cy.get('select[name="toMonth"]').select('June')
        cy.get('select[name="toDay"]').select('19')
        cy.get('[value="First"]').check()
        cy.get('select[name="airline"]').select('Blue Skies Airlines')
        cy.get('input[name="findFlights"]').click()
        
    })

    it('Car Rentals', () => {
        //cy.visit("https://demo.guru99.com/test/newtours/index.php")
        cy.get('a[href^="support"]').contains("Car Rentals").click();
        cy.log("site is under construction so go to home")
        cy.get('img[src="images/home.gif"]').click()
     })
     it('cruises', () => {
           //cy.visit("https://demo.guru99.com/test/newtours/index.php")
           cy.get('a[href^="index"]').contains("Cruises").click();
           cy.get('input[name=userName]').type("Rithica")
           cy.get("input[name=password]").type("rithi@123")
           cy.get("input[name=submit]").click()
        })
        it.only('Vacations', () => {
            //cy.visit("https://demo.guru99.com/test/newtours/index.php")
            cy.get('a[href^="support"]').contains("Vacations").click();
            cy.url().should('not.include','Vacations')
            cy.log("site is under construction so go to home")
            cy.get('img[src="images/home.gif"]').click()
         })




})

