describe('Formulário de Cadastro de Usuário', () => {
  beforeEach(() => {
    // Substitua pela URL onde o formulário está hospedado
    cy.visit('http://localhost:3000/register');
  });

  it('Deve cadastrar usuário com dados válidos', () => {
    cy.get('#name').type('João Silva');
    cy.get('#email').type('joao.silva@example.com');
    cy.get('#confirmEmail').type('joao.silva@example.com');
    cy.get('#password').type('SenhaForte123');
    cy.get('form').submit();
    cy.contains('Cadastro realizado com sucesso').should('be.visible');
  });

  it('Deve exibir erro ao enviar formulário com campos obrigatórios vazios', () => {
    cy.get('form').submit();
    cy.contains('O nome é obrigatório').should('be.visible');
    cy.contains('O email é obrigatório').should('be.visible');
    cy.contains('O confirmEmail é obrigatório').should('be.visible');
    cy.contains('O password é obrigatório').should('be.visible');
  });

  it('Deve exibir erro ao inserir senha sem letras', () => {
    cy.get('#name').type('João Silva');
    cy.get('#email').type('joao.silva@example.com');
    cy.get('#confirmEmail').type('joao.silva@example.com');
    cy.get('#password').type('12345');
    cy.get('form').submit();
    cy.contains('A senha deve ter no mínimo 8 caracteres').should('be.visible');
    cy.contains('A senha deve conter pelo menos uma letra maiúscula').should('be.visible');
    cy.contains('A senha deve conter pelo menos uma letra minúscula').should('be.visible');
  });

  it('Deve exibir erro ao inserir senha sem número', () => {
    cy.get('#name').type('João Silva');
    cy.get('#email').type('joao.silva@example.com');
    cy.get('#confirmEmail').type('joao.silva@example.com');
    cy.get('#password').type('Am');
    cy.get('form').submit();
    cy.contains('A senha deve ter no mínimo 8 caracteres').should('be.visible');
    cy.contains('A senha deve conter pelo menos um número').should('be.visible');
  });

  it('Deve exibir erro quando e-mails não coincidem', () => {
    cy.get('#name').type('João Silva');
    cy.get('#email').type('joao.silva@example.com');
    cy.get('#confirmEmail').type('joao.diferente@example.com');
    cy.get('#password').type('SenhaForte123');
    cy.get('form').submit();
    cy.contains('Os e-mails não coincidem').should('be.visible');
  });
});
