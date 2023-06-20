class any_tab{
    go(link){
        cy.get('a[href*="index.php?rt=product/category&path="]').contains(link).click()
    }
    
}
export default any_tab