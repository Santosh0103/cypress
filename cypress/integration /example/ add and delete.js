/// <reference types ="Cypress"/>
describe('add and delete', () => {
    var id;
    it('ADD', () => {
        cy.request({
            method: "POST",
            url: "http://216.10.245.166/maps/api/place/add/json?key=qaclick123",
            body:
            {
               "location": {


                    "lat": -38.383494,


                    "lng": 33.427362

                },

               "accuracy": 50,


                "name": "Frontline house",


                "phone_number": "(+91) 983 893 3937",


                "address": "29, side layout, cohen 09",


                "types": ["shoe park", "shop"],


                "website": "http://google.com",


                "language": "French-IN"


            }


        }).then((response)=>{
            let body = JSON.parse(JSON.stringify(response.body))
            id=body.place_id
            cy.log(id)

        })


    })

    it('delete', () => {
        cy.request({
            method: "DELETE",
            url: "http://216.10.245.166/maps/api/place/delete/json?key=qaclick123",
            body:{
                
                    "place_id":id          
                
            }


        }).then((response)=>{
            let body = JSON.parse(JSON.stringify(response.body))

            cy.log(id)
            cy.log(body)

        })

        
    });
});