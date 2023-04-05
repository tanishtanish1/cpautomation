import nrma from "../pageobjects/nrma"
describe("get a quote ",()=>{
it("firsttestnrma",()=>{
cy.visit("https://www.nrma.com.au/home-insurance")
const ln=new nrma();
ln.setgetaquote()
ln.setselectstate()
ln.setselectinsurance()
ln.setselectpolicy()
ln.setbtnclick()
})
})