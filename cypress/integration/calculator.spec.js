/* eslint-disable no-undef */
describe('Calculator', () => {
  const clickButtons = (str) => {
    const values = str.split('');
    values.forEach((value) => {
      cy.get('button').contains(value).click().get('#app');
    });
  };

  const calculationTest = (str, expectedValue) => {
    clickButtons(str);
    cy.get('#total').should('have.text', expectedValue);
  };

  it('inits total result to zero when AC button clicked', () => {
    cy.visit('/');
    clickButtons('42');
    cy.get('#total').should('have.text', '42');
    cy.get('.modifier').click();
    cy.get('#total').should('have.text', '0');
  });

  it('only takes two numbers between -999 and 999', () => {
    calculationTest('10000+1000=', '200');
    cy.get('.modifier').click();

    calculationTest('1234-1000=', '23');
    cy.get('.modifier').click();

    calculationTest('1X1000=', '100');
    cy.get('.modifier').click();

    calculationTest('1234/-123456=', '-1');
    cy.get('.modifier').click();
  });

  it('adds two numbers', () => {
    calculationTest('0+0=', '0');
    calculationTest('+1=', '1');
    calculationTest('+-10=', '-9');
    calculationTest('+-991=', '-1000');
    cy.get('.modifier').click();
  });

  it('subtracts two numbers', () => {
    calculationTest('1-0=', '1');
    calculationTest('-2=', '-1');
    calculationTest('-8=', '-9');
    calculationTest('-991=', '-1000');
    cy.get('.modifier').click();
  });

  it('multiplies two numbers', () => {
    calculationTest('1X1=', '1');
    calculationTest('X2=', '2');
    calculationTest('X-10=', '-20');
    calculationTest('X-5=', '100');
    calculationTest('X-123=', '-12300');
    cy.get('.modifier').click();
  });

  it('divides one number into another', () => {
    calculationTest('800/1=', '800');
    calculationTest('/2=', '400');
    calculationTest('/-1=', '-400');
    calculationTest('/-5=', '80');
    calculationTest('/-80=', '-1');
    cy.get('.modifier').click();
  });

  it('floors calculation result', () => {
    calculationTest('100/3=', '33');
    calculationTest('/4=', '8');
    calculationTest('/3=', '2');
    cy.get('.modifier').click();
  });
});
