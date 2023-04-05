//const cypress = require("cypress");
//const { describe } = require("mocha");

//const { it } = require("mocha")

describe("checking dropdowns",()=>{
it("validating drpopdowns",()=>{
cy.visit("https://www.zoho.com/commerce/free-demo.html")
cy.get("#zcf_address_country").select('India').should('have.value','India')
 })

})
