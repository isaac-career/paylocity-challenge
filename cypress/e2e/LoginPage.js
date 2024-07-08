class loginPage {

    elements= {
        fieldUserName: () => cy.get('#Username'),
        fieldPassword: ()=> cy.get('#Password'),
        btnLogin: ()=> cy.get('button[type=submit]')
    }

    doLogin(name, password){

        this.elements.fieldUserName().type(name)
        this.elements.fieldPassword().type(password)
        this.elements.btnLogin().click()
        
    }

}

module.exports = new loginPage()
