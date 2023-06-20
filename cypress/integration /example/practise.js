/// <reference types ="Cypress"/>

describe('practise', () => {
    it('GET', () => {

        cy.request({
            method:"GET",
            url:"https://dummy.restapiexample.com/api/v1/employees/1"


        }).then((response)=>{
           let body = JSON.parse(JSON.stringify(response.body))
           cy.log(body[0].employee_name)

            
        })
        
    });
});