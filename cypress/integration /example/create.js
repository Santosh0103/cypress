/// <reference types ="Cypress"/>

describe('create', () => {
    var key= 'd2b98ecc2922917816b0620a22ef633c';
    var APIToken ='ATTA933670088d497f87ed3f7584ff234a1b09bb4e29d4118475303272ac524e4b6b96A9383B';
    var id1;
    var name='sheela'

    var changedname="shakeela"
    
    it('create', () => {
        cy.request({
            method:"POST",
            url:'https://api.trello.com/1/boards/?name='+name+'&key='+key+'&token='+APIToken+'',

        }).then((response)=>{
            let body= JSON.parse(JSON.stringify(response.body))
            cy.log(body.id)
            id1=body.id

        })
        
    });

    it('update', () => {
        cy.request({
            method:"PUT",
            url:'https://api.trello.com/1/boards/'+id1+'?key='+key+'&token='+APIToken+'&name='+changedname+''

        }).then((response)=>{
            let body= JSON.parse(JSON.stringify(response.body))
            

        })
        
        
    });

    it('get', () => {
        cy.request({
            method:"GET",
            url:'https://api.trello.com/1/boards/'+id1+'?key='+key+'&token='+APIToken+''

        }).then((response)=>{
            let body= JSON.parse(JSON.stringify(response.body))
            cy.log(body)

        })
        
        
    });


    it('delete', () => {
        cy.request({
            method:"DELETE",
            url:'https://api.trello.com/1/boards/'+id1+'?key='+key+'&token='+APIToken+''

        }).then((response)=>{
            let body= JSON.parse(JSON.stringify(response.body))
            cy.log(body)

        })
        
        
    });

});