//const cypress = require("cypress");
//const { describe } = require("mocha");

describe('checking ui elements',()=>{
it('radio buttons',()=>{
cy.visit("https://itera-qa.azurewebsites.net/home/automation")
//input boxes
cy.get("#name").type('tanish')
cy.get("#phone").type('0425159999')
cy.get("#email").type('tanish123@gamil.com')
cy.get("#password").type('tanish321')
cy.get("#address").type('tanish678')
cy.get("button[name='submit']").click()


cy.get("input#male").should('be.visible')//visibilty of elemetnts
cy.get("input#female").should('be.visible')
//selecting radio buttons
cy.get("input#male").check().should('be.checked')
cy.get("input#female").should('not.be.checked')

cy.get("input#female").check().should('be.checked')
cy.get("input#male").should('not.be.checked')
cy.get("input#monday").should('be.visible')//visibility of element
cy.get("input#monday").check().should('be.checked')//checking element
cy.get("input#monday").uncheck().should('not.be.checked')//unchecking element*/
//selecting all checkboxes
cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')
//selecting first and last checkboxes
cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')
//dropdown
cy.get(".custom-select").select('2').should('have.value','2')










})
})