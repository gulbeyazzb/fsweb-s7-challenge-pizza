describe("form cypress testi", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Form bilgisini al", () => {
    cy.scrollTo(0, 500);
    cy.get('[data-cy="pizzabtn"]').click();
    cy.get('[data-cy="1"]').click();
    cy.get("select").select("kalın");
    // cy.get('[data-cy="radioButton"]').first().check();
    // cy.get('[data-cy="check"]').check(); //tüm checkboxları clickler
    cy.get('[data-cy="2"]').uncheck();
    cy.get('[data-cy="3"]').uncheck();
    cy.get('[data-cy="4"]').uncheck();
    cy.get('[data-cy="siparisNotu"]')
      .type("lütfen pakete çatal bıçak ekleyiniz.")
      .should("have.value", "lütfen pakete çatal bıçak ekleyiniz.");
    cy.get('[data-cy="submit"]').should("have.enabled");
    cy.get('[data-cy="submit"]').click();
  });
});
