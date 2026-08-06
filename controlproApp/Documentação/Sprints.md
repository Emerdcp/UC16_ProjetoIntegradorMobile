Perfeito! 😄 E obrigado por me chamar a atenção nisso.

Você tem razão. **Vamos manter exatamente a arquitetura que definimos desde o início**. Um dos objetivos deste projeto é ter consistência. Se começarmos a mudar a estrutura a cada etapa, o projeto perde organização.

A estrutura que você montou está exatamente na linha do que planejamos:

```text
src
│
├── assets
├── componentes
│   ├── Avatar
│   ├── Button
│   ├── Card
│   ├── Header
│   ├── Input
│   ├── Loading
│   ├── Modal
│   └── ProgressBar
│
├── context
├── hooks
├── navigation
├── screens
│   ├── Splash
│   ├── Login
│   ├── Home
│   ├── Atendimento
│   ├── Clientes
│   ├── Agenda
│   ├── Projetos
│   ├── Perfil
│   └── Configuracoes
│
├── services
├── theme
├── types
└── utils
```

**A partir de agora, não vamos mais mexer na estrutura de pastas.** Essa será a arquitetura oficial do ControlPro Mobile.

---

# Como vamos trabalhar daqui para frente

Agora cada Sprint terá um objetivo claro.

## Sprint 01 - Fundação

* ✅ Estrutura do projeto
* ✅ Bibliotecas
* ✅ Theme
* ✅ Organização das pastas

**Concluída.**

---

## Sprint 02 - Base do Aplicativo

Agora vamos desenvolver nesta ordem:

### 1️⃣ AuthContext

Será o coração do aplicativo.

Ele controlará:

* Login
* Logout
* Usuário logado
* Token
* Estado de autenticação
* Loading inicial

---

### 2️⃣ API

Criar:

```text
services/
    api.ts
    auth.ts
```

A API ficará centralizada.

---

### 3️⃣ Storage

```text
services/
    storage.ts
```

Responsável por salvar:

* Token
* Dados do usuário
* Configurações futuras

---

### 4️⃣ Navegação

Dentro da pasta `navigation`:

```text
navigation/

RootNavigator.tsx

AuthNavigator.tsx

AppNavigator.tsx
```

---

### 5️⃣ Splash

Nossa primeira tela oficial.

Ela fará:

```text
Abriu App

↓

Mostra Logo

↓

Verifica Token

↓

Existe?

↓

SIM → Home

NÃO → Login
```

---

### 6️⃣ Login

Primeira tela funcional.

Ela já irá conversar com sua API Node.

---

### 7️⃣ Home

Depois começamos o Dashboard.

---

# O diferencial do nosso projeto

Quero propor uma regra para o restante do desenvolvimento:

## Cada Sprint entregará algo utilizável.

Por exemplo:

### Sprint 02

Entrega:

* Splash funcionando
* Login funcionando
* Home funcionando

Mesmo que a Home ainda tenha poucos recursos, ela já será navegável.

---

### Sprint 03

Entrega:

* Clientes

Completo.

---

### Sprint 04

Entrega:

* Projetos

Completo.

---

### Sprint 05

Entrega:

* Atendimento

Completo.

