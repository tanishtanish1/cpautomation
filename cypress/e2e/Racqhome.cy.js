


describe("homeinsurancetest",()=>{
it("firstinsurancetest",()=>{
cy.visit("https://www.racq.com.au")
cy.title().should('eq','Roadside Assistance, Insurance, Banking, Motoring, Travel | RACQ')
cy.get("a[data-variantitemid='{6615C327-8C49-4F02-9B1A-ECD18E4A4EFF}']",{setTimeout:6000}).click()//insurance
cy.get("li[class='active chevron-up'] a[href*='home-insurance'] ",{setTimeout:4000}).click()//home insurance
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

cy.get("a[href*='?covertype=hh&cm_re=GetAQuote-_-Accordion-_-Home']",{setTimeout:4000}).click()//get my quote
//cy.wait(15000)
//cy.get("[value='I agree']").as('btn')
//cy.get("[value='I agree']").
cy.get(" [value='I agree']",{force: true}).click()//agree
//cy.get(" [value='I agree']").click()
//cy.get(" [value='I agree']").click()
//cy.get('button').as('btn').click()
//cy.get('@btn').click()
//agree
//start your quote
cy.get("label[for*='HomeInsuranceOccupancy_lst_0']").click({force: true})//owner occupied
cy.get("label[for='phracq_body_0_phracq_contentcontainer_0_Step1StartYourQuote_ucTypeOfBuilding_lst_0']").click({force: true})//house
cy.get("#phracq_body_0_phracq_contentcontainer_0_Step1StartYourQuote_ucInsuranceProducts_ddl").select(1, {force: true})
cy.wait(4000)
cy.get("input[autocomplete='off']").type('25 Furness Drive,TEWANTIN QLD 4565',{force: true})
cy.wait(4000)
cy.get('ul[class="address-lookup__results-list"]>li>a')
.each(($ele,index,list)=>{
    cy.log($ele.text())
    if($ele.text()==='25 Furness Drive,TEWANTIN QLD 4565'){
    cy.wrap($ele.click())
    }
   else{
    cy.log('not found');
   }

})
//cy.contains("25 Furness Drive, TEWANTIN  QLD 4565").click('{force:true}')//adress

cy.get("[for*='HasCurrentMembership_YesNoList_1']").click({force: true})//no
cy.get("[for='phracq_body_0_phracq_contentcontainer_0_Step1StartYourQuote_ucNoOfPolicies_lst_0']") //0
cy.get("[type='submit'][value='Next']",{force: true}).as('btn')//next
cy.get('@btn').click()
cy.get('@btn').click()

//building details 
cy.get("input[name='phracq_body_0$phracq_contentcontainer_0$Step2BuildingDetails$txtRebuildCost$txt']").type('500000')//cost 
cy.get("[name='phracq_body_0$phracq_contentcontainer_0$Step2BuildingDetails$txtBuildingYear$txt']").type('1980')//year
cy.get("#phracq_body_0_phracq_contentcontainer_0_Step2BuildingDetails_ddlRoofMaterial_ddl").select('Slate')//roof
cy.get("#phracq_body_0_phracq_contentcontainer_0_Step2BuildingDetails_ddlPrimaryMaterial_ddl").select('Aluminium')//external walls
cy.get("[name='phracq_body_0$phracq_contentcontainer_0$Step2BuildingDetails$BNEButtons$btnNext']").click()//next
//personal details
cy.get("[for='phracq_body_0_phracq_contentcontainer_0_Step4PersonalDetails_ynOver55OrSenior_YesNoList_1']")//55 years of age
cy.get("[for='phracq_body_0_phracq_contentcontainer_0_Step4PersonalDetails_ynBuildingClaims_YesNoList_1']").click()//last 12 months
cy.get("#phracq_body_0_phracq_contentcontainer_0_Step4PersonalDetails_ddlClaimFreeYears_ddl").select('None')//claim free
cy.get("[type='email']")//email
cy.get("[name='phracq_body_0$phracq_contentcontainer_0$Step4PersonalDetails$BNEButtons$btnNext']")//Next
//your quote
cy.get("[name='phracq_body_0$phracq_contentcontainer_0$Step5YourQuote$ucBuildingExcesses$ddl']").select("$750")//basic excess
cy.get("[name='phracq_body_0$phracq_contentcontainer_0$Step5YourQuote$ucBuildingOptionalCover$ddl']").select('None')//optional cover 
cy.get("[name='phracq_body_0$phracq_contentcontainer_0$Step5YourQuote$ucStartDate$txt']").select('20/01/2023').type('{enter}')//start date
cy.get("[name='phracq_body_0$phracq_contentcontainer_0$Step5YourQuote$QuoteSummaryEmail$txtEmail']").type("abe123@gmail.com")//summary
cy.get("[name='phracq_body_0$phracq_contentcontainer_0$Step5YourQuote$txtInsuredAmount$txt']").type('500000')//sum insured
cy.get("#phracq_body_0_phracq_contentcontainer_0_Step5YourQuote_hrefBottomBuyOnline").click()//buy online








   
})
})
        