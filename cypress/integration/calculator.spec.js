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
    cy.get('.modifier').click();
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
    calculationTest('1234-1000=', '23');
    calculationTest('1X1000=', '100');
    calculationTest('1234/-123456=', '-1');
  });

  it('adds two numbers', () => {
    calculationTest('0+0=', '0');
    calculationTest('0+1=', '1');
    calculationTest('1+-10=', '-9');
    calculationTest('-9+-991=', '-1000');
  });

  it('subtracts two numbers', () => {
    calculationTest('1-0=', '1');
    calculationTest('1-2=', '-1');
    calculationTest('-1-8=', '-9');
    calculationTest('-9-991=', '-1000');
  });

  it('multiplies two numbers', () => {
    calculationTest('1X1=', '1');
    calculationTest('1X2=', '2');
    calculationTest('2X-10=', '-20');
    calculationTest('-20X-5=', '100');
    calculationTest('100X-123=', '-12300');
  });

  it('divides one number into another', () => {
    calculationTest('800/1=', '800');
    calculationTest('800/2=', '400');
    calculationTest('400/-1=', '-400');
    calculationTest('-400/-5=', '80');
    calculationTest('80/-80=', '-1');
  });

  it('floors calculation result', () => {
    calculationTest('100/3=', '33');
    calculationTest('33/4=', '8');
    calculationTest('8/3=', '2');
  });
});
