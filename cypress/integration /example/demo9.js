///<reference types="Cypress"/>

//select files

describe('selecting files', () => {
    it('test case', () => {

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').selectFile('cypress/fixtures/ja.java')
        cy.get('#file-submit').click()
        
    });

    it('drag and drop', () => {
        
        cy.visit('https://simple-drag-drop.glitch.me/')
        cy.contains('A').trigger('mousedown')
        cy.contains('C').trigger('mousemove').trigger('mouseup')

    });
});