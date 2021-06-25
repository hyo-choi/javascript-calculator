/* eslint-disable no-undef */
describe('Calculator', () => {
  const clickButtons = (...values) => {
    values.forEach((value) => {
      cy.get('#app').contains(String(value)).click();
    });
  };

  it('displays clicked button\'s value', () => {
    const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '/', 'X', '-', '+', '=', 'AC'];
    cy.visit('/');
    for (let i = 0; i < buttons.length; i += 1) {
      clickButtons(buttons[i]);
      cy.get('#total').should('have.text', buttons[i]);
    }
  });
});
