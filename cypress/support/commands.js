// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
/// const cypress = require("cypress")
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

//import cypress = require("cypress");


// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getIframe',(iframe)=>{
    return cy.get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap);
})
//custom commonds for clicking on links using label
Cypress.Commands.add('clicklink',(label)=>{
cy.get('a').contains(label).click()

})
//custom command for login
Cypress.Commands.add("loginapp",(email,password)=>{

    cy.get("#Email").type("cypresstesting2023@gmail.com")
    
    cy.get("#Password").type("G7qs7hw@XWCnv")
    cy.get("button[class='button-1 login-button']").click();
})
//date picker
Cypress.Commands.add('datepicker',()=>{
cy.get("#f15_cctDatePicker_datepicker").click()
cy.get(" a[class='ui-state-default'][href='#']")
.each(($el,index,list)=>{
    var date=$el.text()
    if(date==3)
    {
        cy.wrap($el).click()
    }
})
})