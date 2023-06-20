/// <reference types ="Cypress"/>

describe('rest api testing', () => {
    var result;
    it('get api', () => {
        result = cy.request('https://reqres.in/api/users/2')
        result.its("status").should("equal",200)
    });
    
    it.only('validate response', () => {
        cy.request({
            method:"GET",
            url:'https://reqres.in/api/users/2',
            header:{
                accept:"application/json",
            }

        }).then((response)=>{
            // to covert repomnse to json
           let body = JSON.parse(JSON.stringify(response.body))
           cy.log(body.data.email)
           expect(body.data).has.property('email','janet.weaver@reqres.in')
           let b= body.data
           cy.log(b['id'] + " " +b['email'])

        })
        
    });
});