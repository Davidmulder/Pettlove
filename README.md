### 🐾 Pett Love – Front-end React

Projeto front-end desenvolvido em React como parte de um teste técnico, com foco em layout fiel ao Figma, responsividade, animações, componentização e navegação entre páginas.

O objetivo é demonstrar domínio de React moderno, organização de código e atenção a detalhes de UI/UX.

### 🎯 Funcionalidades
```sh
- 🏠 **Página Home** (Pets Namorando)
- ℹ️ **Página “Como Funciona”**
- 🧩 Componentes reutilizáveis (**Header**, **Footer**, cards e sections)
- 🔁 Rotas com **React Router DOM**
- 🎬 Animações suaves com **Framer Motion**
- 📱 Layout responsivo (desktop e mobile)
- 🐶 **Listagem dinâmica de casais de pets via JSON (mock de dados)** 
  (src/assets/data/petCouples.json)
React 18

Vite

React Router DOM

Framer Motion

CSS puro (layout customizado baseado no Figma)

JavaScript (ES6+)
```
### 📂 Estrutura do Projeto
```sh
src/
├── assets/
│   ├── data/
│   │   └── petCouples.json     # dados mockados (casais de pets)
│   └── images/
│       └── pets/              # imagens e elementos visuais do layout
│
├── components/
│   ├── heads/                 # Header
│   ├── footer/                # Footer
│   └── PetCoupleCard/         # Card do casal de pets
│
├── layout/
│   └── MainLayout.jsx         # layout base com Header + Footer
│
├── pages/
│   ├── petnamorado/           # Home
│   └── comofunciona/          # Como Funciona
│
├── App.jsx                    # rotas
└── main.jsx

```
### 🌐 Rotas da Aplicação
Rota	Descrição
/	Página inicial – Pets Namorando
/como-funciona	Página explicativa com etapas

As rotas são controladas via React Router DOM, com layout compartilhado usando <Outlet />.

### 🎬 Animações

As animações foram implementadas com Framer Motion, incluindo:

Fade + slide ao entrar na tela

Animações suaves nas seções

Melhor experiência visual sem impacto de performance

### 📱 Responsividade

Layout adaptado para desktop e mobile

Breakpoints customizados conforme o Figma

Elementos específicos exibidos apenas no mobile ou desktop (only-mobile / only-desktop)

### 🎨 Design

Layout baseado integralmente no Figma fornecido

Alinhamentos, espaçamentos e tipografia ajustados manualmente

Uso de imagens e ícones conforme especificação do design

▶️ Como Executar o Projeto
1️⃣ Clonar o repositório
git clone https://github.com/seu-usuario/pett-love-react.git
cd pett-love-react

2️⃣ Instalar dependências
npm install

3️⃣ Rodar o projeto
npm run dev


O projeto estará disponível em:

http://localhost:5173

### 🧠 Boas Práticas Aplicadas
```sh
✔️ Componentização clara
✔️ Separação de layout e páginas
✔️ Rotas bem definidas
✔️ Código limpo e organizado
✔️ CSS desacoplado por página/componente
✔️ Sem dependência de frameworks de UI prontos (controle total do layout)
✔️ Mock de dados via JSON (pronto para evoluir para API real)
```
### 👨‍💻 Autor

David Orion
Desenvolvedor Full Stack
PHP | Laravel | React | JavaScript | APIs REST