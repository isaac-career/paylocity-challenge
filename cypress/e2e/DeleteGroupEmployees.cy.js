import loginPage from "./LoginPage"
import homePage from "./homePage"
import employeesData from "../fixtures/newEmployees.json"  

describe(' Delete all Employees in List', function(){

  // let listingCount =0;

      let lenVal =0;

    before( function()  {

        cy.fixture('credentials')
          .then(credentials => {
            this.credentials = credentials;
            cy.visit('/')
            loginPage.doLogin(this.credentials.userName, this.credentials.password)
         
          })
      
      })

      beforeEach(function(){

        
      })

    it('delete-all-items', function(){
        

     
          // // delete first element of table
          // cy.get('tr').children().last().children().last().click()
          // cy.wait(1000)
          // homePage.deleteCreatedEmployee()

          // console.log(cy.find("td[contains(., 'employees')]").length > 0)
          

        //   cy.get("body").then($body => {
        //     if ($body.find('td[@text=no employees found]').length > 0) {   
        //         //evaluates as true
        //     }
        // });

        //xpath: td[contains(., 'employees')]

            // if(! (cy.find("td[contains(., 'employees')]").length > 0)){
            //   console.log('into IF ==========')

            // }else{
            //   console.log('out of IF ==========')
            // }
        
        
        
          cy.get('tbody > tr').each(($el)=>{
            
              cy.get('tbody > tr').first().children().last().children().last().click()
              cy.wait(1000)
              homePage.deleteCreatedEmployee()
              cy.wait(1000)

            
        })

        
        // get length of list
          
        //     cy.get('table > tbody').find('tr')
        //     .then((leng) => {
        //       listingCount = Cypress.$(leng).length;
        //       // If storing in a Cypress.env() variable
        //       //Cypress.env('listLength', length);
        //       // If storing in a traditional JS variable
              
        // });

          // lenVal = cy.get('table > tbody > tr').its('length');

    })
   
    // it('Add group Employees', function () {
    //     // loginPage.doLogin(this.credentials.userName, this.credentials.password)
    
    //   let n = 1;
    //   do{
    //   //  intercept('POST', 'https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees').as('createBoard')
    //   homePage.addNewEmployee(employeesData[2].name, employeesData[2].lastName, employeesData[2].dependants)
    //   //homePage.addNewEmployee('Roberto', 'Lara', '5')
    //   n=n+1;
    //   }while(n <= 4)

    //   cy.wait(2000)

    //   // loginPage.doLogin(this.credentials.userName, this.credentials.password)
        
    // })


})