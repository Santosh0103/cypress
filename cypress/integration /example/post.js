/// <reference types ="Cypress"/>


describe('Post method', () => {
    it('with body', () => {
        cy.request({
            method:"POST",
            url:"https://reqres.in/api/users",
            body:
                {
                    "name": "morpheus",
                    "job": "leader"
                },
            header :{
                accept : "application/json"
            }
        }).then((response)=>{
            expect(response.status).to.eql(201)
        })

        
        
    });
});