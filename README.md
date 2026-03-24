# 📝 Blog App - Front-end

Este é o repositório do front-end do projeto da pós em Fullstack Development da Fiap, uma Single Page Application (SPA) moderna desenvolvida para a gestão e publicação de artigos. O projeto separa as experiências de usuários entre **Estudantes** (leitores) e **Professores** (administradores), com foco em uma interface limpa, responsiva e de alto desempenho.

---

## 🔐 Controle de Acesso (RBAC)

A aplicação implementa **Role-Based Access Control** (Controle de Acesso Baseado em Cargos):

| Funcionalidade | Estudante | Professor |
| :--- | :---: | :---: |
| Visualizar Posts Publicados | ✅ | ✅ |
| Buscar Postagens | ✅ | ✅ |
| Acessar Painel Administrativo | ❌ | ✅ |
| Criar/Editar/Excluir Posts | ❌ | ✅ |
| Definir Autor Personalizado | ❌ | ✅ |

---

## ⚙️ Funcionalidades Principais

* **Header**: Componente que detecta o contexto do usuário e renderiza de acordo com o papel.
* **Login**: Componente que permite o login seguro do usuário, diferenciando entre aluno e professor.
* **Busca Global**: Filtro de posts por palavras-chave integrado diretamente com o back-end.
* **Visualização das postagens**: Componente que lista as postagens.
* **Criação de postagem**: Permite que professores criem e editem as postagens.
* **Painel Administrativo Centralizado**: Uma tabela dinâmica onde o professor pode gerenciar todo o ciclo de vida das postagens.
* **Formulário Híbrido (Criação/Edição)**: Reutilização inteligente de componentes que detectam o contexto.

---

## 🛠️ Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone git@github.com:4vm/blog-frontend.git
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    Crie um arquivo `.env` na raiz e adicione a URL da sua API:
    ```env
    VITE_API_URL=http://localhost:3000
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

