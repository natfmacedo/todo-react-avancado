# Projeto Lista de Tarefas 
## Tarefa do curso de Front-end da Escola Bitrânica de Artes Criativas e Tecnologia (EBAC)
## Módulo 18 — React avançado: hooks, performance e compartilhamento de dados 👩‍💻
![Lista de tarefas](https://i.postimg.cc/zBbLXFL9/print-lista-de-tarefas.jpg)


Este projeto consiste em uma aplicação de uma lista de tarefas desenvolvida com recursos avançados do React.

## Índice
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Arquitetura](#arquitetura)
- [Boas práticas](#boas-praticas)
- [Layout](#layout)
- [Instruções para rodar](#instrucoes-para-rodar)

# Funcionalidades 
- [x] Adicionar tarefas
- [x] Marcar tarefas como concluídas
- [x] Remover tarefas
- [x] Filtrar tarefas por todas, pendentes e concluídas

# Tecnologias
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=flat-square&logo=javascript&logoColor=F7DF1E)
![React](https://img.shields.io/badge/React-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB) 
![Vite](https://img.shields.io/badge/Vite-%23646CFF.svg?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)

# Arquitetura
```
src/
├── context/
│   ├── TodoContext.js      
│   └── TodoProvider.jsx     
├── hooks/
│   ├── useInput.js          
│   └── useTodos.js         
└── components/
    ├── TodoForm.jsx         
    ├── TodoFilters.jsx      
    ├── TodoList.jsx         
    └── TodoItem.jsx         
```

# Boas práticas
- [x] Utilização de hooks personalizados
- [x] Aplicação de memoization (`useMemo`, `useCallback` e `memo`)
- [x] Separação dos componentes da lista de tarefas
- [x] Acessibilidade com `WAI-ARIA` 

# Layout
![Captura de tela mostrando a lista de tarefas](https://i.postimg.cc/c1byW2PH/print-lista-de-tarefas-layout.jpg)
![Gif mostrando o funcionamento da lista de tarefas](https://i.postimg.cc/2SRrhgkN/IMG-4811.gif)

# Instruções para rodar
- Primeira etapa: download do projeto
    - No seu terminal, digite o seguinte comando:
        ```bash
        gh repo clone natfmacedo/todo-react-avancado
        ```
- Segunda etapa: obtenção da URL da API
    - Acesse o site [crudcrud.com](https://crudcrud.com/)
    - Copie a chave da URL fornecida pelo site
    - Em `TodoProvider.jsx`, cole a chave em `API_URL`:
        ```js
        const API_URL = "https://crudcrud.com/api/SUA_CHAVE/tarefas";
        ```

- Terceira etapa: execução do projeto
    - No seu terminal, digite os seguintes comandos para instalar as dependências necessárias e rodar o projeto, respectivamente:
        ```bash
        npm install
        npm run dev
        ```