describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://automationexercise.com/login')
    
    cy.get('[data-qa="signup-name"]').type('testleko')
    cy.get('[data-qa="signup-email"]').type('testlekoshoniaaaaa@gmail.com')
    cy.get('[data-qa="signup-button"]').click()
    cy.contains("Enter Account Information").should("be.visible")
    cy.get('#id_gender1').check()
    cy.get('[data-qa="password"]').type("miau123")
    cy.get('[data-qa="months"]').select("December") 
    cy.get('[data-qa="days"]').select(25)
    cy.get('[data-qa="years"]').select("1989")
    cy.get('[data-qa="first_name"]').type("leko")
    cy.get('[data-qa="last_name"]').type("shonia")
    cy.get('[data-qa="company"]').type("smartacademy")
    cy.get('[data-qa="address"]').type("mesxis qucha")
    cy.get('[data-qa="country"]').select("Singapore")
    cy.get('[data-qa="state"]').type("Georgia")
    cy.get('[data-qa="city"]').type("Tbilisi")
    cy.get('[data-qa="zipcode"]').type("0105")
    cy.get('[data-qa="mobile_number"]').type("599945757")
    cy.get('[data-qa="create-account"]').click()
    cy.contains("Account Created!").should("be.visible")
    cy.get('[data-qa="continue-button"]').click()
    cy.contains("Logged in as").should("be.visible")
    cy.contains("Delete Account").click()
    cy.contains("Account Deleted!").should("be.visible")
    
   
    
  })

})