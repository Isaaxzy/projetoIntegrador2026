# Aplicativo Mobile - Projeto Integrador SENAC 2026 📱🎓

**Curso Técnico em Desenvolvimento de Sistemas / Programação**  
**Instituição:** SENAC (Serviço Nacional de Aprendizagem Comercial)

---

## 📌 Sobre o Projeto

Este repositório contém a **base do aplicativo mobile** desenvolvido em **React Native** com **Expo** e **TypeScript**.

Todos os projetos das equipes partem desta mesma base compartilhada de código e estrutura, porém **cada equipe desenvolverá um tema/nicho diferente** e terá total autonomia para criar suas próprias interfaces, navegação, componentes e regras de negócio.

---

## 👥 Organização das Equipes e Fluxo de Trabalho (Fork)

O backend e o banco de dados são gerenciados centralmente pelo professor e já se encontram hospedados em produção. As equipes têm acesso exclusivo ao código do aplicativo através do modelo de **Fork**.

```
  [ Repositório Base - Aplicativo ] (Professor)
                │
   ┌────────────┼────────────┐ (Forks de cada equipe)
   ▼            ▼            ▼
[Fork Equipe 1] [...]  [Fork Equipe 7]
 (Tema: X)              (Tema: Y)
```

### 📋 Diretrizes para a Equipe:
1. **Fork do Projeto:** O gestor ou um membro representante da equipe deve criar um **Fork** deste repositório na sua conta do GitHub/GitLab.
2. **Gerenciamento de Membros:** O gestor da equipe deve adicionar os demais integrantes como colaboradores do fork.
3. **Autonomia:** A equipe pode criar suas próprias branches, issues, quadros Kanban e convenções internas de commits.
4. **Token de Acesso:** O `EXPO_PUBLIC_API_TOKEN` para autenticação na API será repassado pelo professor diretamente ao **gestor de cada equipe**.

---

## ⚙️ Pré-requisitos

Antes de iniciar, certifique-se de possuir em seu computador:
- [Node.js](https://nodejs.org/) (Versão LTS 18 ou superior instalada)
- [Git](https://git-scm.com/) instalado e configurado
- [Expo Go](https://expo.dev/go) instalado no seu celular (disponível na Google Play Store e Apple App Store) **OU** emulador configurado (Android Studio / Xcode).

---

## 🚀 Como Iniciar o Projeto (Passo a Passo)

### 1. Clonar o Fork da sua Equipe
```bash
git clone https://github.com/SEU-USUARIO-OU-EQUIPE/NOME-DO-FORK.git
cd NOME-DO-FORK
```

### 2. Instalar as Dependências
Execute o comando abaixo dentro da pasta do projeto:
```bash
npm install
```

### 3. Configurar as Variáveis de Ambiente (`.env`)
Copie o arquivo `.env.exemplo` para criar o seu `.env`:

- **No Windows (PowerShell):**
  ```powershell
  Copy-Item .env.exemplo .env
  ```
- **No Linux / macOS / Bash:**
  ```bash
  cp .env.exemplo .env
  ```

Abra o arquivo `.env` gerado e preencha com as credenciais da sua equipe:
```env
# URL oficial da API do servidor SENAC
EXPO_PUBLIC_API_URL=https://senac.pizzarapida.net/api

# Substitua pelo Token fornecido pelo professor ao gestor da sua equipe
EXPO_PUBLIC_API_TOKEN=seu_token_fornecido_pelo_professor
```

> ⚠️ **IMPORTANTE:** Nunca compartilhe nem comite o arquivo `.env` com chaves reais no Git! Ele já está listado no `.gitignore`.

---

## 🤖 Backend do chat com IA

O serviço exclusivo do chat fica em `backend-ia/` e usa a API de Responses da OpenAI. Ele é separado do servidor de receitas e mantém a chave da OpenAI somente no backend.

1. Copie `backend-ia/.env.example` para `backend-ia/.env` e preencha `OPENAI_API_KEY` com sua chave. O arquivo `.env.example` contém apenas um marcador e nunca deve receber uma chave real. Opcionalmente, ajuste `OPENAI_MODEL` e as origens web permitidas em `CHAT_ALLOWED_ORIGINS`.
2. Em um terminal, inicie o serviço:
   ```bash
   npm run start:chat-api
   ```
   O backend usa Node.js 18 ou superior e inicia na porta `3001`.
3. Verifique se está disponível:
   ```text
   GET http://localhost:3001/health
   ```
4. Envie mensagens para `POST http://localhost:3001/api/chat` como JSON:
   ```json
   {
     "messages": [
       { "role": "user", "content": "Como posso substituir o creme de leite?" }
     ]
   }
   ```
   A resposta tem o formato `{ "reply": "..." }`. O histórico aceita mensagens `user` e `assistant`; a última deve ser do usuário. Para enviar uma imagem, use o conteúdo multimodal da API Responses, com itens `input_text` e `input_image` (imagem em uma data URL base64 JPEG, PNG, WEBP ou GIF). O chat do app permite escolher uma foto da galeria e enviá-la junto com uma pergunta.

Para testar o backend sem chamar a OpenAI, execute:

```bash
npm run test:chat-api
```

O app usa `EXPO_PUBLIC_CHAT_API_URL` como endereço do backend. Essa variável está no `.env.exemplo`; configure-a no `.env` local com `http://localhost:3001` para navegador ou simulador iOS, `http://10.0.2.2:3001` para emulador Android ou com o IP local do computador (por exemplo, `http://192.168.0.10:3001`) para celular físico na mesma rede. Reinicie o Expo após alterar variáveis de ambiente. Ao publicar o serviço, configure `OPENAI_API_KEY` como segredo no provedor de hospedagem, nunca no Expo nem no código cliente.

---

### 4. Executar o Aplicativo

Inicie o servidor de desenvolvimento do Expo:
```bash
npx expo start
```
*(ou simplesmente `npm start`)*

---

### 5. Abrir e Testar a Aplicação

Assim que o comando for executado, um **QR Code** e um menu interativo aparecerão no terminal:

- 📱 **No Celular Físico (Recomendado):**
  - Abra o aplicativo **Expo Go** no Android e selecione *"Scan QR Code"* (ou use a câmera no iOS) e aponte para o QR Code no terminal.
  - *Dica:* Certifique-se de que o computador e o celular estejam conectados na **mesma rede Wi-Fi**.
- 🤖 **No Emulador Android:** Pressione a tecla `a` no terminal.
- 🍏 **No Simulador iOS (macOS):** Pressione a tecla `i` no terminal.
- 🌐 **No Navegador Web:** Pressione a tecla `w` no terminal.

---

## 📂 Estrutura de Pastas

```
📁 Aplicativo/
├── 📁 app/                     # Rotas e Telas (Expo Router - baseado em arquivos)
│   ├── (tabs)/                # Navegação por abas inferiores
│   │   ├── index.tsx          # Tela inicial
│   │   ├── explore.tsx        # Tela de exploração
│   │   └── _layout.tsx        # Layout das abas
│   ├── _layout.tsx            # Layout raiz da aplicação
│   ├── 📁 components/         # Componentes visuais reutilizáveis
│   └── 📁 rotaServidor/       # Serviços de integração com a API Backend
│       ├── api.ts             # Cliente HTTP com fetch e suporte a Bearer Token
│       ├── produtos.tsx       # CRUD de Produtos
│       └── user.tsx           # CRUD de Usuários
│
├── 📁 assets/                  # Imagens, ícones e fontes
├── .env.exemplo               # Modelo de variáveis de ambiente
├── .env                       # Suas variáveis locais (não comitar)
├── app.json                   # Configurações do Expo (nome do app, ícones, slug)
├── package.json               # Dependências e scripts
└── tsconfig.json              # Configurações do TypeScript
```

---

## 📡 Como Consumir a API do Servidor

A pasta `app/rotaServidor/` contém serviços prontos que facilitam a comunicação com o servidor `https://senac.pizzarapida.net/api`.

### Exemplo: Listar e Cadastrar Produtos
```tsx
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import produtosService, { Produto } from "@/app/rotaServidor/produtos";

export default function CatalogoScreen() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await produtosService.listarTodos();
        setProdutos(dados);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setCarregando(false);
      }
    }

    carregar();
  }, []);

  if (carregando) {
    return <ActivityIndicator size="large" color="#0066cc" style={{ flex: 1 }} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.titulo}>{item.nome}</Text>
            <Text style={styles.preco}>R$ {Number(item.preco).toFixed(2)}</Text>
            {item.descricao && <Text style={styles.descricao}>{item.descricao}</Text>}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f5f5f5" },
  card: { backgroundColor: "#fff", padding: 16, borderRadius: 8, marginBottom: 12, elevation: 2 },
  titulo: { fontSize: 18, fontWeight: "bold", color: "#333" },
  preco: { fontSize: 16, color: "#008844", marginTop: 4 },
  descricao: { fontSize: 14, color: "#666", marginTop: 4 },
});
```

---

## 💡 Dicas de Sucesso para a Equipe

1. **Personalização:** Atualize o `app.json` com o nome da sua aplicação e o nome da sua equipe.
2. **Design e Usabilidade:** Utilize componentes modernos, boas cores e tipografia clara para valorizar a apresentação do projeto integrador.
3. **Divisão de Tarefas:** Dividam as telas e componentes entre os membros da equipe para que todos participem ativamente do desenvolvimento.
4. **Dúvidas com a API:** O gestor da equipe deve alinhar com o professor caso necessitem de novos endpoints ou ajustes nos modelos de dados.

---

## 📜 Licença

Projeto desenvolvido para fins educacionais no **SENAC (2026)**.
