

class nrmapage2{
    selectdate      ="#f15_cctDatePicker_datepicker";
   // dateselect      =" a[class='ui-state-default'][href='#']"
    homeaddress     = "li[class='ui-menu-item'] a[id='ui-id-115']";
    homeowner       ="label[for='f11_cctHomeOwner_input1']";
    homeused        ="label[for='f13_cctBusinessOrPrivateUse_input0']";
    wholives        = "label[for='f12_cctWhoLivesInHome_input0']"
    bodycorporare   = "label[for='f14_cctStrata_input1']";
    wellmaintained  = "#f10_radStructureTightNo_label";
    kitchenandbath  = "#f10_radFuncNo_label";
    construction    = "#f10_radUnderConstNo_label";
    externalwalls   = "#f10_radRenoNo_label";
    email           = "#f17_txtSaveEmailQuote";
    contunuebtn     = "a[id='f16_btnContinue']>span[class='text']";

    setselectdate(date)
    {
    cy.datepicker(this.selectdate).type(03/02/2023).click()
    }
    dateselect()
    {
        cy.get(this.dateselect).contains(03).click()
    }
    sethomeaddress(address)
    {
    cy.get(this.homeaddress).type('25 furness drive ,tewantin {enter}').click()
    }
   sethomeowner()
   {
    cy.get(this.homeowner).click()
   }
   sethomeused()
   {
    cy.get(this.homeused).click()
   }
   setwholives()
   {
    cy.get(this.wholives).click()
   }
   setbodycorporate()
   {
    cy.get(this.bodycorporare).click()
   }
   setwellmaintained()
   {
    cy.get(this.wellmaintained).click()
   }
   setkithchenandbath()
   {
    cy.get(this.kitchenandbath).click()
   }
   setconstruction()
   {
    cy.get(this.construction).click
   }
   setwalls()
   {
    cy.get(this.externalwalls).click
   }
   setemail(email)
   {
    cy.get(this.email).type("abc123@gmail.com")
   }
   setcontinue()
   {
    cy.get(this.contunuebtn).click()
   }

}
export default nrmapage2