describe('Theme Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  // Nota: Este teste assume que há uma classe específica aplicada ao elemento raiz quando o tema escuro está ativo
  // Você pode precisar adaptar isso com base em como sua aplicação implementa o tema escuro
  it('deve verificar o comportamento do tema escuro', () => {
    // Verifica se o logo tem a classe de inversão quando em tema escuro
    // Primeiro precisamos forçar o tema escuro (simulação)
    cy.get('html').invoke('addClass', 'dark');
    
    // Verifica se o logo tem a classe de inversão
    cy.get('[data-testid="next-logo"]').should('have.class', 'dark:invert');
    
    // Restaura o tema
    cy.get('html').invoke('removeClass', 'dark');
  });
});