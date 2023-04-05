//import cypress from "cypress"
describe('locators', ()=> {
    it('csslocators',()=>{
        cy.visit('https://www.google.com/')
        cy.title().should('eq','Google')//home page
        
        cy.get("[title='Search']").type("t-shirts").type('{enter}')
        cy.wait(10000);
        //cy.type('{enter}')
       //

        
      
       
      // cy.get("input[value='Google Search']").click()

        cy.get("[class='SPZz6b']").should('have.text','T-Shirt')
        cy.go('back')
        cy.title().should('eq','Google')//home page

        cy.go('forward')
        cy.reload//

    })

})
