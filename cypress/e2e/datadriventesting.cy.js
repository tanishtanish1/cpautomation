describe("datatesting",()=>{
it.skip("testdata",()=>{
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
cy.fixture('orangehrm').then((data)=>{
cy.get("input[placeholder='Username']").type(data.username)
cy.get("input[placeholder='Password']").type(data.password)
cy.get("button[type='submit']").click()
cy.title().should('eq',data.expected);

})

})
let userdata;
before(()=>{
cy.fixture('orangehrem').then((data)=>{
userdata=data;

})
})

it("testdata",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.fixture('orangehrm').then((data)=>{
    cy.get("input[placeholder='Username']").type(userdata.username)
    cy.get("input[placeholder='Password']").type(userdata.password)
    cy.get("button[type='submit']").click()
    cy.title().should('eq',userdata.expected);

})
})