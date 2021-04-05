// it.only("By ID", ()=>{
//     cy.visit("https://next.privat24.ua/")
// });

it("By Tag", ()=>{
    cy.visit("https://facebook.com/")
    cy.get('[name="pass"]')
});

it.only("By Tag", ()=>{
    cy.visit("https://facebook.com/")
    cy.get('[data-testid="open-registration-form-button"][role="button"]')
});