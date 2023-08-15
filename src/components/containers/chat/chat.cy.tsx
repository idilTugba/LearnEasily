import React from 'react'
import Chat from './index';

describe('<Chat />',() => {
    it('mount', () => {
        cy.mount(<Chat />);
    });

    it('user chat textarea should work', () => {
        cy.mount(<Chat />);
        const newText = 'New message from user134';
        cy.get('[data-cy="userChat"]').type(newText);   
        cy.get('[data-cy="userChat"]').should('have.value', newText);
    })
})