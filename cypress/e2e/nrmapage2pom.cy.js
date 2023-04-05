import nrmapage2 from "../pageobjects/nrmapage2"
import nrma from "../pageobjects/nrma"

describe("nrma second page ",()=>{
    it("test second page",()=>{
    cy.visit("https://www.nrma.com.au/home-insurance")

    const ln=new nrma();
ln.setgetaquote()
ln.setselectstate()
ln.setselectinsurance()
ln.setselectpolicy()
ln.setbtnclick()
    
    const homed=new nrmapage2()
          homed.setselectdate()
          homed.sethomeaddress()
          homed.sethomeowner()
          homed.sethomeused()
          homed.setwholives()
          homed .setbodycorporate()
          homed.setwellmaintained()
          homed.setkithchenandbath()
          homed.setconstruction()
          homed.setwalls()
          homed.setemail()
          homed.setcontinue()

})
})