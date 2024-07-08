describe('API tests', function(){

   

    it('CREATE NEW EMPLOYEE, and get 200 code', function(){
        cy.request({
            method: 'POST',
            url: 'https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees', 
            headers: {
                Authorization: 'Basic VGVzdFVzZXI0MDA6L2phdTg0X1ErLS1w',
                'Content-Type': 'application/json'
            },
            body:{
            "firstName": "Alex",
            "lastName": "Campos",
            "dependants": 1
            }
        })
            .then((r) => {
            expect(r.status).to.eq(200)
            console.log("response CREATE NEW EMPLOYEE")
            console.log(r)
            const idNewEmployee = r.body.id;
            console.log('just-created-ID' + idNewEmployee)
            cy.wrap(idNewEmployee).as ('justCreatedId')
            })
    })

    it('UPDATE EMPLOYEE, and get 200 code', function(){
        cy.request({
            method: 'PUT',
            url: 'https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees', 
            headers: {
                Authorization: 'Basic VGVzdFVzZXI0MDA6L2phdTg0X1ErLS1w',
                'Content-Type': 'application/json'
            },
            body:{
                
                "id": this.justCreatedId,
                "firstName": "Carlos",
                "lastName": "Aranza",
                "dependants": 4
                
            }
        })
            .then((r) => {
            expect(r.status).to.eq(200)
            console.log("response CREATE NEW EMPLOYEE")
            console.log(r)
            const idNewEmployee = r.body.id;
            console.log('just-created-ID' + idNewEmployee)
            cy.wrap(idNewEmployee).as ('justCreatedId')
            })
    })

    it('GET JUST CREATED EMPLOYEE, and get 200 code', function(){
        cy.request({
            method: 'GET',
            url: 'https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees/' + this.justCreatedId, 
            headers: {
                Authorization: 'Basic VGVzdFVzZXI0MDA6L2phdTg0X1ErLS1w'
            }
        })
            .then((r) => {
            expect(r.status).to.eq(200)
            console.log("response GET JUST CREATED EMPLOYEE")
            console.log(r)
            })
    })

    it('DELETE CREATED EMPLOYEE, and get 200 code', function(){
        cy.request({
            method: 'DELETE',
            url: 'https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees/' + this.justCreatedId, 
            headers: {
                Authorization: 'Basic VGVzdFVzZXI0MDA6L2phdTg0X1ErLS1w'
            }
        })
            .then((r) => {
            expect(r.status).to.eq(200)
            console.log("response DELETE CREATED EMPLOYEE")
            console.log(r)
            })
    })



    //  it('GET ALL EMPLOYEES, and get 200 code', function(){
    //     cy.request({
    //         method: 'GET',
    //         url: 'https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees', 
    //         headers: {
    //             Authorization: 'Basic VGVzdFVzZXI0MDA6L2phdTg0X1ErLS1w'
    //         }
    //     })
    //         .then((r) => {
    //         expect(r.status).to.eq(200)
    //         console.log("response GET ALL EMPLOYEES")
    //         console.log(r)
    //         const idNewEmployee = r.body.id;
    //         console.log('just-created-ID' + idNewEmployee)
    //         cy.wrap(idNewEmployee).as ('justCreatedId')
    //         })
    // })
    

})

        