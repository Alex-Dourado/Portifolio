
//Simplificando o Acesso ao Site //
const input={

  url:'https://google.com'
}

//Acessando Site do Google e validando a Palavra "Linkendin"//
describe('Testes Básicos', () => {
  it('testeum', () => {
    cy.visit(input.url)
    cy.get('#APjFqb').type('linkendin')
    cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
    cy.get('#APjFqb').should('have.value','linkendin')
   
  })
})

 //Acessando o Site Pesquisando uma imagem e confirmando o Elemento//
 it('testedois', () => {
  cy.visit(input.url)
  cy.contains('Imagens').click()
  cy.get('#APjFqb').type('vale do silicio{enter}')
  cy.get('#dimg_329').should('be.visible')
 })

  
