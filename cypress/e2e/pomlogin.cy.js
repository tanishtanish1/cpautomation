import login from "../pageobjects/loginpage2"; 
describe("pomloginpage",()=> {
it("loginpagetest1",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const ln= new login();
    ln.setusername("Admin")
    ln.setpassword("admin123")
    ln.clicksubmit()
    ln.verifylogin()
})

}) 
