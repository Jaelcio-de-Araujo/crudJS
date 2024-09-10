# Cadastro de Usuários

Esta aplicação web permite cadastrar, editar, excluir e listar usuários, com armazenamento local dos dados (usando `localStorage`). A exibição dos usuários é responsiva: em telas grandes, os dados são exibidos em formato de tabela; em telas menores, os dados são exibidos como cards.

## Funcionalidades

- **Cadastro de Usuários**: Adicione novos usuários preenchendo o nome, e-mail, telefone e senha.
- **Listagem de Usuários**: Exibe todos os usuários cadastrados. A listagem é exibida como uma tabela em telas grandes e como cards em dispositivos móveis.
- **Edição de Usuários**: Permite editar os dados dos usuários existentes.
- **Exclusão de Usuários**: Exclua usuários da lista.
- **Armazenamento Local**: Todos os dados são armazenados no `localStorage` do navegador, persistindo mesmo após fechar a página.

## Tecnologias Utilizadas

- **HTML5**: Para a estrutura do conteúdo.
- **CSS3**: Para estilização responsiva, incluindo uso de media queries para adaptar a interface a diferentes tamanhos de tela.
- **JavaScript**: Para manipulação dinâmica do DOM, gerenciar o `localStorage` e controlar as funcionalidades de cadastro, edição e exclusão de usuários.

## Como Executar o Projeto

1. Clone o repositório para sua máquina local:
   ```bash
   git clone https://github.com/Jaelcio-de-Araujo/crudJS
   ```

2. Navegue até a pasta do projeto:
   ```bash
   cd crud/src
   ```

3. Abra o arquivo `index.html` em um navegador:
   - No navegador, clique duas vezes no arquivo `index.html` ou utilize uma extensão para servidor local, como o Live Server do VSCode.

## Estrutura de Arquivos

```bash
.
├── index.html        # Estrutura principal do projeto
├── script.js         # Lógica de cadastro, edição e exclusão de usuários
├── styles.css        # Estilos para responsividade e design da página
└── README.md         # Instruções e detalhes do projeto
```

## Explicação do Código

### `index.html`

Este arquivo contém a estrutura básica da página, incluindo:

- Um formulário para adicionar/editar usuários.
- Uma tabela para listar os usuários em telas grandes.
- Um contêiner para exibir os usuários como cards em telas pequenas.

### `styles.css`

- **Responsividade**: Usamos `@media` queries para adaptar o layout a diferentes larguras de tela. Para telas menores, a lista de usuários é exibida em formato de card, enquanto em telas maiores é exibida em uma tabela.
- **Estilos Gerais**: Definimos estilos de formulário, botões, e layout geral da página.

### `script.js`

- **Armazenamento Local**: A aplicação utiliza o `localStorage` para persistir os dados dos usuários.
- **Cadastro, Edição e Exclusão**: Controla a lógica de adicionar, editar e excluir usuários.
- **Exibição Responsiva**: Verifica o tamanho da tela e alterna entre a exibição em cards ou tabela dependendo da resolução.

## Melhorias Futuras

- Adicionar validação mais avançada no formulário (ex.: verificar se o email está no formato correto).
- Implementar uma funcionalidade de busca para filtrar usuários cadastrados.
- Possibilidade de integrar com um banco de dados real no backend.

## Exemplo de Uso

1. Ao carregar a página, você verá um formulário para cadastro de usuários e, se houverem dados salvos no `localStorage`, a lista de usuários será exibida.
2. Em dispositivos móveis, a lista de usuários será exibida como cards.
3. É possível editar ou excluir qualquer usuário clicando nos respectivos botões.

## Contribuições

Contribuições são bem-vindas! Para contribuir:

1. Fork o repositório.
2. Crie uma nova branch para suas modificações (`git checkout -b minha-branch`).
3. Commit suas alterações (`git commit -m 'Adiciona nova funcionalidade'`).
4. Push para a branch (`git push origin minha-branch`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

### Contato

Se tiver dúvidas ou sugestões, sinta-se à vontade para abrir uma _issue_ ou enviar um pull request.