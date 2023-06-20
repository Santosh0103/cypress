class product_tab{

    go(link){

        cy.get('.fixed_wrapper  .fixed').each(($el,index,$list)=>{
            if($el.text().includes(link)){
               
                cy.wrap($el).click()
            }
        })
       }
       
    cart(){
        cy.get('.cart').click()
    }
    
}
export default product_tab