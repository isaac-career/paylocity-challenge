import LoginPage from "./LoginPage"

describe('template spec', () => {
  it('do login', () => {
    cy.visit('/')
    LoginPage.doLogin('TestUser400','/jau84_Q+--p')

 

    cy.get('table').contains('tr', '0b713941-8e76-4dc5-b44a-04be6aa5a219').children().last().children().last().click()

  })


})