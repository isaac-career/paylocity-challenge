import employeesData from "./../fixtures/newEmployees.json" 

describe('API tests', function(){

   

    it('CREATE NEW EMPLOYEE', function(){
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

    it('UPDATE EMPLOYEE', function(){
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

    it('GET JUST CREATED EMPLOYEE', function(){
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

    it('DELETE CREATED EMPLOYEE', function(){
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

    it('VALUES OF NEW EMPLOYEE WITH 0 DEPENDANTS ARE CORRECT', function(){
        cy.request({
            method: 'POST',
            url: 'https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees', 
            headers: {
                Authorization: 'Basic VGVzdFVzZXI0MDA6L2phdTg0X1ErLS1w',
                'Content-Type': 'application/json'
            },
            body:{
                "firstName":employeesData[0].name,
                "lastName": employeesData[0].lastName,
                "dependants": employeesData[0].dependants
            }
        })
            .then((r) => {
            // expect(r.status).to.eq(200)
            expect(r.body.salary).to.eq(52000)
            console.log('Benefit-Costs== '+ r.body.benefitsCost)
            const benefitsCost = r.body.benefitsCost
            const net = r.body.net
            // console.log('Benefit-Costs in variable== '+ benefitsCost)
            // console.log('Benefit-Costs in variable & fixed== '+ benefitsCost.toFixed(2))
            
            const fixedCost = benefitsCost.toFixed(2)
            const fixedNet = net.toFixed(2)

            expect(fixedCost).to.eq('38.46')    // 38.46 
            expect(fixedNet).to.eq('1961.54')   // 2000 - 38.46
            
            console.log("response CREATE NEW EMPLOYEE")
            console.log(r)
            const idNewEmployee = r.body.id;
            console.log('just-created-ID' + idNewEmployee)
            cy.wrap(idNewEmployee).as ('justCreatedId')
            })
    })

    it('VALUES OF NEW EMPLOYEE WITH 1 DEPENDANTS ARE CORRECT', function(){
        cy.request({
            method: 'POST',
            url: 'https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees', 
            headers: {
                Authorization: 'Basic VGVzdFVzZXI0MDA6L2phdTg0X1ErLS1w',
                'Content-Type': 'application/json'
            },
            body:{
                "firstName":employeesData[4].name,
                "lastName": employeesData[4].lastName,
                "dependants": employeesData[4].dependants
            }
        })
            .then((r) => {
           // expect(r.status).to.eq(200)
            expect(r.body.salary).to.eq(52000)
            console.log('Benefit-Costs== '+ r.body.benefitsCost)
            const benefitsCost = r.body.benefitsCost
            const net = r.body.net
            // console.log('Benefit-Costs in variable== '+ benefitsCost)
            // console.log('Benefit-Costs in variable & fixed== '+ benefitsCost.toFixed(2))
            
            const fixedCost = benefitsCost.toFixed(2)
            const fixedNet = net.toFixed(2)

            expect(fixedCost).to.eq('57.69')    // calculation:   38.46 + (19.23 x 1) = 57.69
            expect(fixedNet).to.eq('1942.31')   // 2000 - 57.69
            
            console.log("response CREATE NEW EMPLOYEE")
            console.log(r)
            const idNewEmployee = r.body.id;
            console.log('just-created-ID' + idNewEmployee)
            cy.wrap(idNewEmployee).as ('justCreatedId')
            })
    })

    it('VALUES OF NEW EMPLOYEE WITH 3 DEPENDANTS ARE CORRECT', function(){
        cy.request({
            method: 'POST',
            url: 'https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees', 
            headers: {
                Authorization: 'Basic VGVzdFVzZXI0MDA6L2phdTg0X1ErLS1w',
                'Content-Type': 'application/json'
            },
            body:{
                "firstName":employeesData[2].name,
                "lastName": employeesData[2].lastName,
                "dependants": employeesData[2].dependants
            }
        })
            .then((r) => {
            // expect(r.status).to.eq(200)
            expect(r.body.salary).to.eq(52000)
            console.log('Benefit-Costs== '+ r.body.benefitsCost)
            const benefitsCost = r.body.benefitsCost
            const net = r.body.net
            // console.log('Benefit-Costs in variable== '+ benefitsCost)
            // console.log('Benefit-Costs in variable & fixed== '+ benefitsCost.toFixed(2))
            
            const fixedCost = benefitsCost.toFixed(2)
            const fixedNet = net.toFixed(2)

            expect(fixedCost).to.eq('96.15')    // calculation:   38.46 + (19.23 x 3) = 96.15
            expect(fixedNet).to.eq('1903.85')   // 2000 - 96.15
            
            console.log("response CREATE NEW EMPLOYEE")
            console.log(r)
            const idNewEmployee = r.body.id;
            console.log('just-created-ID' + idNewEmployee)
            cy.wrap(idNewEmployee).as ('justCreatedId')
            })
    })

     it('GET ALL EMPLOYEES', function(){
        cy.request({
            method: 'GET',
            url: 'https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees', 
            headers: {
                Authorization: 'Basic VGVzdFVzZXI0MDA6L2phdTg0X1ErLS1w'
            }
        })
            .then((r) => {
     //        expect(r.status).to.eq(200)
            console.log("response GET ALL EMPLOYEES")
            console.log(r)
            const idNewEmployee = r.body.id;
            console.log('just-created-ID' + idNewEmployee)
            cy.wrap(idNewEmployee).as ('justCreatedId')
            })
    })
    

})

        