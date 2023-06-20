/// <reference types ="Cypress"/>

describe('update', () => {
    it('update', () => {

        cy.request({
            method:'PATCH',
            url:"https://reqres.in/api/users/2",
            body:{

    "name": "morpheus",
    "job": "zion resident"
            }
        }).then((response)=>{
            expect(response.status).to.eql(200)
        })
        
    });
});