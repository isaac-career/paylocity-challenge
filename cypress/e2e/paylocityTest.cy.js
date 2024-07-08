import loginPage from "./LoginPage"
import homePage from "./homePage"

describe('template spec', () => {
  
  it('do login', function () {
      cy.visit('/')
      loginPage.doLogin('TestUser400','/jau84_Q+--p')
      
      cy.intercept('POST', 'https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/employees').as('createBoard')
      homePage.addNewEmployee('Roberto', 'Lara', '1')

      cy.wait(2000)
      cy.wait('@createBoard').then(({response}) => {
        console.log(response)
        const id = response.body.id
        console.log('created-ID' + id)
        cy.wrap(id).as('createdId')
        expect(response.statusCode).to.eq(200)
      })
      
      //expect(response.statusCode).to.eq(200) //expect(response.body.firstName).to.eq('jorge') const idNewUser = response.body.id console.log('ID new idNewUser) cy.wrap(idNewUser).as ('wrapCreatedUserID')

  })  

  it('Edit created user', function(){
    cy.visit('/')
    loginPage.doLogin('TestUser400','/jau84_Q+--p')
    console.log(this.createdId)
    cy.contains('tr', this.createdId ).children().last().children().first().click()
    homePage.editNewEmployee('Alex', 'Campos', '3')

  })

  it('Delete created user', function(){
    cy.visit('/')
    loginPage.doLogin('TestUser400','/jau84_Q+--p')
    console.log(this.createdId)
    cy.contains('tr', this.createdId ).children().last().children().last().click()
    homePage.deleteCreatedEmployee()

  })


  


})