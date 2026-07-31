# 📱 ControlPro Mobile

> Aplicativo oficial do **ControlPro**, desenvolvido em **React Native + Expo**, com foco em gerenciamento de projetos, atendimentos, equipes e produtividade.

---

# Objetivo

O ControlPro Mobile tem como objetivo permitir que usuários acompanhem seus projetos, registrem atendimentos, consultem informações e realizem tarefas diretamente pelo celular, mantendo a mesma identidade visual e experiência do sistema Web.

Todo o aplicativo será desenvolvido seguindo um **Design System próprio**, garantindo padronização, escalabilidade e facilidade de manutenção.

---

# Tecnologias

* React Native
* Expo
* Expo Router
* TypeScript
* React Navigation
* Axios
* Expo Notifications
* Expo Secure Store
* React Native Reanimated
* React Native Gesture Handler
* MaterialCommunityIcons

---

# Conceito Visual

O aplicativo seguirá um estilo moderno e corporativo, inspirado em plataformas como:

* Jira
* Monday.com
* Azure DevOps
* ClickUp

Características:

* Interface limpa
* Espaçamento generoso
* Poucas cores de destaque
* Ícones padronizados
* Componentes reutilizáveis
* Alta legibilidade

---

# Paleta Oficial

## Primary

| Cor             | Hex         |
| --------------- | ----------- |
| Primary 50      | #EFF6FF     |
| Primary 100     | #DBEAFE     |
| Primary 200     | #BFDBFE     |
| Primary 300     | #93C5FD     |
| Primary 400     | #60A5FA     |
| **Primary 500** | **#2563EB** |
| Primary 600     | #1D4ED8     |
| Primary 700     | #1E40AF     |
| Primary 800     | #1E3A8A     |
| Primary 900     | #172554     |

---

## Secondary

```
#0EA5E9
```

---

## Background

```
#F5F7FA
```

---

## Card

```
#FFFFFF
```

---

## Border

```
#E5E7EB
```

---

## Text

Principal

```
#111827
```

Secundário

```
#6B7280
```

---

# Cores de Estado

## Sucesso

```
#10B981
```

## Aviso

```
#F59E0B
```

## Erro

```
#EF4444
```

## Informação

```
#3B82F6
```

---

# Tipografia

Fonte oficial:

**Inter**

## Tamanhos

| Elemento         | Tamanho |
| ---------------- | ------- |
| Título Principal | 32      |
| Subtítulo        | 24      |
| Card Title       | 18      |
| Texto            | 16      |
| Texto Pequeno    | 14      |
| Legenda          | 12      |

---

# Border Radius

| Componente | Valor |
| ---------- | ----- |
| Inputs     | 10    |
| Botões     | 12    |
| Cards      | 14    |
| Modal      | 18    |
| FAB        | 28    |

---

# Sombras

Utilizar sombras discretas.

```ts
shadowColor: "#000",
shadowOpacity: 0.08,
shadowRadius: 8,
shadowOffset: {
    width:0,
    height:3
},
elevation:4
```

---

# Espaçamentos

Utilizar apenas a escala abaixo.

```
4
8
12
16
20
24
32
40
```

Evitar valores aleatórios.

---

# Ícones

Biblioteca oficial:

```
@expo/vector-icons
```

Pacote:

```
MaterialCommunityIcons
```

Não misturar bibliotecas de ícones.

---

# Componentes

Todos os componentes deverão seguir um padrão único.

## Botões

### Primário

* Fundo Azul
* Texto Branco

Utilizado para:

* Salvar
* Entrar
* Confirmar
* Cadastrar

---

### Secundário

* Fundo Branco
* Borda Azul

Utilizado para:

* Cancelar
* Voltar

---

### Perigo

* Fundo Vermelho

Utilizado para:

* Excluir
* Remover

---

# Inputs

Todos os campos deverão possuir:

* Label
* Placeholder
* Mensagem de erro
* Ícone opcional
* Estado desabilitado
* Estado de foco

---

# Cards

Os cards serão utilizados para exibir:

* Projetos
* Atendimentos
* Clientes
* Equipes
* Financeiro
* Indicadores

Todos deverão possuir:

* Cantos arredondados
* Sombra leve
* Espaçamento interno
* Hierarquia visual

---

# Dashboard

Tela inicial do aplicativo.

Componentes previstos:

* Saudação ao usuário
* Projetos em andamento
* Atendimentos pendentes
* Agenda do dia
* Indicadores
* Últimas atividades

Tudo organizado em cards.

---

# Navegação

Estrutura inicial.

```
Login

↓

Dashboard

↓

Drawer

├── Dashboard
├── Projetos
├── Atendimentos
├── Clientes
├── Equipe
├── Agenda
├── Relatórios
├── Configurações
└── Sair
```

No futuro será implementada uma Bottom Tab para acesso rápido às funções mais utilizadas.

---

# Estrutura do Projeto

```
src
│
├── app
│
├── assets
│   ├── fonts
│   ├── images
│   └── icons
│
├── components
│   ├── Avatar
│   ├── Badge
│   ├── Button
│   ├── Card
│   ├── EmptyState
│   ├── Header
│   ├── Input
│   ├── Loading
│   ├── Modal
│   ├── ProgressBar
│   └── SearchBar
│
├── constants
│   ├── colors.ts
│   ├── radius.ts
│   ├── shadows.ts
│   ├── spacing.ts
│   └── typography.ts
│
├── hooks
│
├── services
│
├── store
│
├── theme
│
├── types
│
└── utils
```

---

# Padrão de Desenvolvimento

Todos os novos componentes deverão seguir os princípios abaixo:

* Componentes reutilizáveis
* Código limpo
* Tipagem com TypeScript
* Responsividade
* Separação entre lógica e interface
* Padronização visual
* Fácil manutenção

---

# Roadmap Inicial

## Fase 1

* Login
* Splash Screen
* Dashboard
* Autenticação
* Tema

---

## Fase 2

* Projetos
* Clientes
* Equipe
* Agenda

---

## Fase 3

* Atendimentos
* Notificações
* Upload de imagens
* Assinaturas

---

## Fase 4

* Relatórios
* Offline Mode
* Sincronização
* Dashboard Analítico

---

# Objetivo Final

Construir um aplicativo corporativo moderno, escalável e profissional, compartilhando a mesma identidade visual do sistema Web e proporcionando uma experiência consistente para todos os usuários do ControlPro.
