import React from 'react'
import Translate from './index'

describe('<Translate />', () => {
  it('mounts', () => {
    cy.mount(<Translate />)
  });

  it('should interact with type of translate select', () => {
    cy.mount(<Translate />);
    cy.get('[data-cy="typeOfTranslate"]').select('ielts');
    cy.get('[data-cy="typeOfTranslate"]').should('have.value', 'ielts');
  });
})