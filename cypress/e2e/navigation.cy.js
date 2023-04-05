//const cypress = require("cypress");
//const { describe } = require("mocha");

describe('navigation',()=>{
it('navigationtest',()=>{
cy.visit("https://www.nopcommerce.com/en/demo")//home page
cy.title('eq','Store Demo - nopCommerce')
cy.get('.navigation-top-menu-main > :nth-child(4) > .navigation-top-menu-link > .navigation-top-menu-label').click()//partners page
cy.title('eq','Partners. Create your store with nopCommerce partners - nopCommerce')
cy.go('back')
cy.title('eq','Store Demo - nopCommerce')
cy.go('forward')
cy.title('eq','Partners. Create your store with nopCommerce partners - nopCommerce')



})

})