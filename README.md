# 🚀 React com Redux e Zustand

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" />
  <img src="https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=zustand&logoColor=white" alt="Zustand" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</div>

## 💡 Sobre o Projeto

Este projeto é um exemplo prático de como gerenciar o estado global em aplicações React utilizando duas abordagens diferentes: **Redux** e **Zustand**. 

A aplicação demonstra a implementação de funcionalidades comuns como gerenciamento de estado, despacho de ações e assinatura a mudanças de estado, permitindo uma comparação direta entre as duas bibliotecas de gerenciamento de estado.

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca para construção de interfaces de usuário
- **Redux** - Biblioteca para gerenciamento de estado previsível
- **Zustand** - Biblioteca minimalista para gerenciamento de estado
- **React Redux** - Conectores oficiais do React e Redux
- **Styled Components** - Biblioteca para estilização de componentes CSS-in-JS

## 🚀 Como Começar

### Pré-requisitos

- Node.js (versão 12 ou superior)
- NPM ou Yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/react-redux-zustand.git
cd react-redux-zustand
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

### Executando o Projeto

```bash
npm start
# ou
yarn start
```

Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

## 📂 Estrutura do Projeto

```
react-redux-zustand/
├── public/
│   
├── src/
│   ├── components/         # Componentes reutilizáveis
│   │   ├── Header.tsx
│   │   ├── Lesson.tsx
│   │   ├── Module.tsx
│   │   └── Video.tsx
│   ├── lib/              
│   │   └── axios.ts
│   ├── pages/              # Página principal
│   │   └── Player.tsx
│   ├── store/              # reducer redux
│   │   └── index.ts
│   ├── styles/             # Estilos globais
│   │   └── global.css
│   ├── zustand-store/      # Configurações do Zustand
│   │   ├── index.ts
│   │   └── store.spec.ts
│   └── App.js              # Componente principal
├── package.json
└── README.md
```

## 🔍 Comparativo: Redux vs Zustand

| Característica | Redux | Zustand |
|---------------|-------|---------|
| Tamanho da biblioteca | ~2.2KB | ~2.3KB |
| Curva de aprendizado | Média/Alta | Baixa |
| Boilerplate | Alto | Baixo |
| DevTools | Extensão robusta | Integrado |
| Performance | Excelente | Excelente |

### Redux no Projeto

No exemplo com Redux, implementamos:
- **Actions**: Define as ações que podem alterar o estado
- **Reducers**: Funções puras que processam as ações e retornam o novo estado
- **Store**: Armazena centralizado de estado
- **Provider**: Componente que disponibiliza a store para a aplicação

### Zustand no Projeto

No exemplo com Zustand, implementamos:
- **Store**: Função simples que define estado e ações
- **Hooks**: Utilização direta dos hooks fornecidos pela biblioteca
- **Menos código**: Redução significativa de código boilerplate

## 📚 Recursos Adicionais

Para aprender mais sobre Redux e Zustand:

- [Documentação Oficial do Redux](https://redux.js.org/)
- [Documentação Oficial do Zustand](https://github.com/pmndrs/zustand)
- [React Redux Documentation](https://react-redux.js.org/)
- [Comparação entre bibliotecas de estado](https://blog.logrocket.com/redux-vs-zustand-state-management-libraries-compared/)

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para:

1. Fork este repositório
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adicionando nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abrir um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  <p>Feito com 💜 pela <a href="https://rocketseat.com.br/">Rocketseat</a></p>
</div>

