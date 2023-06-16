import TextBoxPage from "../../pageObjects/textBox.page";

describe("Appointment", () => {
  beforeEach(() => {
    cy.visit("https://katalon-demo-cura.herokuapp.com/")
  });

  it("Make an Appointment", () => {

    // Actions
    TextBoxPage.appointmentButton.click();

    TextBoxPage.usernameField.type("John Doe");
    TextBoxPage.passwordField.type("ThisIsNotAPassword");
    TextBoxPage.loginButton.click();

    TextBoxPage.facilityOptions.select("Seoul CURA Healthcare Center").invoke("val");     //.should("eq", "Seoul CURA Healthcare Center");
    TextBoxPage.checkBox.check();
    TextBoxPage.setDate.click();
    TextBoxPage.setSpecificDate.contains('30').click();
    TextBoxPage.healtcareOptions.click();
    TextBoxPage.commentField.type("CURA Healthcare Service");
    TextBoxPage.bookAppointment.click();
    
    // Validation

    TextBoxPage.validateFacility.should('have.text', 'Seoul CURA Healthcare Center'); 
    TextBoxPage.validateReadmission.should('have.text', 'Yes');
    TextBoxPage.validateHealthcareProgram.should('have.text', 'Medicaid');
    TextBoxPage.validateDate.should('have.text', '30/06/2023');
    TextBoxPage.validateComment.should('have.text', 'CURA Healthcare Service');

    TextBoxPage.menuSymbol.click();
    TextBoxPage.logoutSidebar.click();    
  });
  
   it("Appointment history empty", () => {
    TextBoxPage.appointmentButton.click();

    TextBoxPage.usernameField.type("John Doe");
    TextBoxPage.passwordField.type("ThisIsNotAPassword");
    TextBoxPage.loginButton.click();

    TextBoxPage.menuSymbol.click();
    TextBoxPage.validateSidebar.should('have.class', 'active')
    TextBoxPage.historySidebar.click();
    TextBoxPage.appointmentHystory.should('have.text', 'No appointment.')
  });

});