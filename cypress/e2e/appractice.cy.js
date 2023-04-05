import autologin from "../pageobjects/autologin";
describe("autologinpage",()=>{
it("testingpracticepage",()=>{
cy.visit("https://itera-qa.azurewebsites.net/home/automation")
  const ln    = new autologin;
        ln.setusername('tanish')
        ln.setphoneno('0425159990')
        ln.setemail('tanish123@gamil.com')
        ln.setpassword('tanish321')
        ln.setaddress('tanish678')
        ln.submitbtn("button[name='submit']")
})
})

