import loginPage from "./LoginPage"
import homePage from "./homePage"
import employeesData from "./../fixtures/newEmployees.json"  

describe('template spec', () => {

  beforeEach( function()  {

    cy.fixture('credentials')
      .then(credentials => {
        this.credentials = credentials;
        cy.visit('/')
        loginPage.doLogin(this.credentials.userName, this.credentials.password)
     
      })
  
  })

  // it('Test it', function () {
  //   console.log('inside it')
  //   console.log(employeesData[0].name + '==' + employeesData[0].lastName + '==' + employeesData[0].dependants)
  // })

  

  it('Add one Employee', function () {
    // loginPage.doLogin(this.credentials.userName, this.credentials.password)
    
      
      cy.intercept('POST', 'https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees').as('createBoard')
    homePage.addNewEmployee(employeesData[0].name, employeesData[0].lastName, employeesData[0].dependants)
      //homePage.addNewEmployee('Roberto', 'Lara', '1')

      cy.wait(2000)
      cy.wait('@createBoard').then(({response}) => {
        console.log(response)
        const id = response.body.id
        console.log('created-ID' + id)
        cy.wrap(id).as('createdId')
        expect(response.statusCode).to.eq(200)
        cy.wait(2000)
      })
      
      //expect(response.statusCode).to.eq(200) //expect(response.body.firstName).to.eq('jorge') const idNewUser = response.body.id console.log('ID new idNewUser) cy.wrap(idNewUser).as ('wrapCreatedUserID')

  })  

    it('Edit created user', function(){
      console.log(this.createdId)
      cy.contains('tr', this.createdId ).children().last().children().first().click()
      homePage.editNewEmployee(employeesData[1].name, employeesData[1].lastName, employeesData[1].dependants)
      cy.wait(2000)

    })  

    it('Delete created user', function(){
      console.log(this.createdId)
      cy.contains('tr', this.createdId ).children().last().children().last().click()
      homePage.deleteCreatedEmployee()
      cy.wait(2000)

  })

  it('Add another Employee', function () {
    // loginPage.doLogin(this.credentials.userName, this.credentials.password)
    
      
      cy.intercept('POST', 'https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees').as('createBoard')
    homePage.addNewEmployee(employeesData[2].name, employeesData[2].lastName, employeesData[2].dependants)
      //homePage.addNewEmployee('Roberto', 'Lara', '5')

      cy.wait(2000)
      cy.wait('@createBoard').then(({response}) => {
        console.log(response)
        const id = response.body.id
        console.log('created-ID' + id)
        cy.wrap(id).as('createdId')
        expect(response.statusCode).to.eq(200)
        cy.wait(2000)
      })
      
      //expect(response.statusCode).to.eq(200) //expect(response.body.firstName).to.eq('jorge') const idNewUser = response.body.id console.log('ID new idNewUser) cy.wrap(idNewUser).as ('wrapCreatedUserID')

  })  
  


})