describe('Testes de Acessibilidade', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('deve ter atributos alt em todas as imagens', () => {
    // Verifica se todas as imagens têm atributos alt
    cy.get('img').each(($img) => {
      cy.wrap($img).should('have.attr', 'alt');
    });
  });

  it('deve ter links externos com rel="noopener noreferrer"', () => {
    // Verifica se todos os links que abrem em nova aba têm os atributos de segurança
    cy.get('a[target="_blank"]').each(($a) => {
      cy.wrap($a).should('have.attr', 'rel', 'noopener noreferrer');
    });
  });
});