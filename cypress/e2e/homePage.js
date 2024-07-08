const { last } = require("cypress/types/lodash")

class homePage {
    elements= {
        btnAdd: () => cy.get('#add'),
        fieldName: ()=> cy.get('#firstName'),
        fieldLastName: ()=> cy.get('#lastName'),
        fieldDependants: ()=> cy.get('#dependants'),
        btnCancel: ()=> cy.get('button[id=submit]'),
        btnSave: ()=> cy.get('button[id=addEmployee]'),
        btnDelete: ()=> cy.get('button[id=deleteEmployee]'),
        btnUpdate: ()=> cy.get('button[id=updateEmployee]')
    }

    addNewEmployee(name, lastname, dependants){
        this.elements.btnAdd().click()
        this.elements.fieldName().type(name)
        this.elements.fieldLastName().type(lastname)
        this.elements.fieldDependants().type(dependants)
        this.elements.btnSave().click()
    }

    editNewEmployee(name, lastname, dependants){
        this.elements.btnAdd().click()
        this.elements.fieldName().type(name)
        this.elements.fieldLastName().type(lastname)
        this.elements.fieldDependants().type(dependants)
        this.elements.btnUpdate().click()
    }

    deleteCreatedEmployee(){
        this.elements.btnDelete().click()
    }

}


module.exports = new homePage()

