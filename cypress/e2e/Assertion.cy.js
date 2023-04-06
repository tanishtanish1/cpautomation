//const cypress = require("cypress");
//const { describe } = require("mocha");

describe("asserrtion demo",()=>{
it("implicit assertion",()=>{
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
/*cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
.should('not.contain','orangehrmlive123')
.should('contain','orangehrmlive')
.should('include','orangehrmlive.com')*/
cy.title().should('eq','OrangeHRM')
.should('contain','HRM')
cy.get('.orangehrm-login-branding > img').should('be.visible')//logo visible
cy.get("input[placeholder='Username']").type('Admin')
cy.get("input[placeholder='Username']").should('have.value','Admin')
cy.get("input[placeholder='Password']").type('Admin123')
cy.get("input[placeholder='Password']").should('have.value','Admin123')
cy.get("tanish").click()


})

})