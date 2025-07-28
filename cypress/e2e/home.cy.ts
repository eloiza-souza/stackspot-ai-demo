describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('deve exibir o logo da Next.js', () => {
    // Verifica se o logo está visível
    cy.get('[data-testid="next-logo"]').should('be.visible');
  });

  it('deve exibir as instruções de início', () => {
    // Verifica se as instruções estão presentes
    cy.contains('Get started by editing').should('be.visible');
    cy.contains('src/app/page.tsx').should('be.visible');
    cy.contains('Save and see your changes instantly').should('be.visible');
  });

  it('deve exibir e permitir navegação para o botão de deploy', () => {
    // Verifica se o botão de deploy existe e tem o texto correto
    const deployButton = cy.get('[data-testid="deploy-button"]');
    deployButton.should('be.visible');
    deployButton.contains('Deploy now');
    
    // Verifica se o link tem o atributo href correto
    deployButton.should('have.attr', 'href')
      .and('include', 'vercel.com/new');
    
    // Verifica se o link abre em uma nova aba
    deployButton.should('have.attr', 'target', '_blank');
  });

  it('deve exibir e permitir navegação para o link de documentação', () => {
    // Verifica se o link de docs existe e tem o texto correto
    const docsLink = cy.get('[data-testid="docs-link"]');
    docsLink.should('be.visible');
    docsLink.contains('Read our docs');
    
    // Verifica se o link tem o atributo href correto
    docsLink.should('have.attr', 'href')
      .and('include', 'nextjs.org/docs');
    
    // Verifica se o link abre em uma nova aba
    docsLink.should('have.attr', 'target', '_blank');
  });

  it('deve exibir os links do rodapé e permitir navegação', () => {
    // Verifica o link "Learn"
    const learnLink = cy.get('[data-testid="footer-learn-link"]');
    learnLink.should('be.visible');
    learnLink.contains('Learn');
    learnLink.should('have.attr', 'href')
      .and('include', 'nextjs.org/learn');
    
    // Verifica o link "Examples"
    const examplesLink = cy.get('[data-testid="footer-examples-link"]');
    examplesLink.should('be.visible');
    examplesLink.contains('Examples');
    examplesLink.should('have.attr', 'href')
      .and('include', 'vercel.com/templates');
    
    // Verifica o link "Go to nextjs.org"
    const nextjsLink = cy.get('[data-testid="footer-nextjs-link"]');
    nextjsLink.should('be.visible');
    nextjsLink.contains('Go to nextjs.org');
    nextjsLink.should('have.attr', 'href')
      .and('include', 'nextjs.org');
  });

  it('deve verificar a responsividade básica da página', () => {
    // Verifica layout em tela pequena (mobile)
    cy.viewport('iphone-x');
    cy.get('main').should('have.class', 'items-center');
    
    // Verifica layout em tela maior
    cy.viewport('macbook-13');
    cy.get('main').should('have.class', 'items-start');
  });
});