describe("Test Login OrangeHRM", () => {
  beforeEach(() => {
    cy.visit("https://bstackdemo.com/signin");
  });

  it("Test Login Success", () => {
    cy.get("#username").should("have.text", "Select Username");
    cy.get("#username").click();
    //select demouser, pilihan pertama
    cy.get("#react-select-2-option-0-0").click();

    cy.get("#password").should("have.text", "Select Password");
    cy.get("#password").click();
    cy.get("#react-select-3-option-0-0").click();

    cy.get("#login-btn").click();
    cy.get(".username").should("be.visible");
    cy.get(".username").should("contain", "demouser");
  });

  it("Test Login Success 2", () => {
    cy.get("#username").should("have.text", "Select Username");
    cy.get("#username").type("fav_user{enter}");

    cy.get("#password").should("have.text", "Select Password");
    cy.get("#password").type("testingisfun99{enter}");

    cy.get("#login-btn").click();
    cy.get(".username").should("be.visible");
    cy.get(".username").should("contain", "fav_user");
  });

  it("Test Login Failed", () => {
    cy.get("#username").should("have.text", "Select Username");
    cy.get("#username").type("favuser{enter}");

    cy.get("#password").should("have.text", "Select Password");
    cy.get("#password").type("wrong pass{enter}");

    cy.get("#login-btn").click();
    cy.get(".api-error").should("be.visible");
    cy.get(".api-error").should("contain.text", "Invalid");
  });
});
