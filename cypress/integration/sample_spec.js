describe("My First Test", function() {
  it("Finds the content type", function() {
    cy.visit("localhost:3000/");
    cy.contains("type");
  });

  it("Checks that the search bar is empty to start with", () => {
    cy.get("input").should("have.value", "");
  });

  it("Puts the search bar in focus and types", () => {
    const input = cy.get("input").focus();
    input.type("Google");
    input.should("have.value", "Google");
  });

  it("Searches on its own when a search phrase is written", () => {});
});
