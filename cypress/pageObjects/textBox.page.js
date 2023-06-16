class TextBoxPage {
  
  static get appointmentButton() {
    return cy.get("#btn-make-appointment");
  }
  static get usernameField() {
    return cy.get("#txt-username");
  }
  static get passwordField() {
    return cy.get("#txt-password");
  }
  static get loginButton() {
    return cy.get(".btn-default");
  }
  static get facilityOptions() {
    return cy.get("select");
  }
  static get checkBox() {
    return cy.get("[type='checkbox']");
  }
  static get healtcareOptions() {
    return cy.get("[id='radio_program_medicaid']");
  }
  static get setDate() {
    return cy.get("[id='txt_visit_date']");
  }
  static get setSpecificDate() {
    return cy.get("[class='day']");
  }
  static get commentField() {
    return cy.get("#txt_comment");
  }
  static get bookAppointment() {
    return cy.get("#btn-book-appointment");
  }
  static get validateFacility() {
    return cy.get("#facility");
  }
  static get validateReadmission() {
    return cy.get("#hospital_readmission");
  }
  static get validateHealthcareProgram() {
    return cy.get("#program");
  }
  static get validateDate() {
    return cy.get("#visit_date");
  }
  static get validateComment() {
    return cy.get("#comment");
  }

  static get menuSymbol() {
    return cy.get(".fa-bars");
  }
  static get validateSidebar() {
    return cy.get("#sidebar-wrapper");
  }
  static get historySidebar() {
    return cy.get("[href='history.php#history']");
  }
  static get logoutSidebar() {
    return cy.get("[href='authenticate.php?logout']");
  }
  static get appointmentHystory() {
    return cy.get(".col-sm-12 p");
  }
 


}

export default TextBoxPage;