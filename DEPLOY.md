# 🚀 Guia de Deploy - GitHub + Render

## 📋 Pré-requisitos

- [ ] Conta no [GitHub](https://github.com)
- [ ] Conta no [Render](https://render.com)
- [ ] Git instalado no seu computador

---

## 1️⃣ Preparar o Projeto

Seu projeto já está preparado! ✅

Arquivos criados:
- ✅ `.gitignore` - Ignora arquivos desnecessários
- ✅ `README.md` - Documentação do projeto
- ✅ `render.yaml` - Configuração automática do Render
- ✅ `package.json` - Configurado com engines e scripts

---

## 2️⃣ Subir para o GitHub

### Passo 1: Criar Repositório no GitHub
1. Acesse [github.com](https://github.com)
2. Clique em **"New repository"** (botão verde)
3. Nome do repositório: `mcp-developer` (ou outro nome)
4. Deixe como **público** ou **privado** (sua escolha)
5. **NÃO** marque "Add a README file"
6. Clique em **"Create repository"**

### Passo 2: Conectar e Enviar o Código

Abra o terminal no seu projeto e execute:

```bash
# Inicializar Git (se ainda não foi)
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit - MCP Developer Landing Page"

# Renomear branch para main
git branch -M main

# Conectar com seu repositório GitHub
# SUBSTITUA 'seu-usuario' pelo seu username do GitHub
git remote add origin https://github.com/seu-usuario/mcp-developer.git

# Enviar para o GitHub
git push -u origin main
```

**✅ Pronto! Seu código está no GitHub!**

---

## 3️⃣ Deploy no Render

### Passo 1: Conectar GitHub ao Render
1. Acesse [render.com](https://render.com)
2. Faça login (pode usar sua conta GitHub)
3. Clique em **"New +"** → **"Web Service"**
4. Clique em **"Connect GitHub"** ou selecione seu repositório
5. Selecione o repositório **mcp-developer**

### Passo 2: Configurar o Deploy
O Render vai detectar automaticamente o `render.yaml`, mas confirme:

- **Name:** `mcp-developer` (ou outro nome)
- **Region:** Oregon (Free) ou outra região
- **Branch:** `main`
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`
- **Plan:** Free

### Passo 3: Deploy
1. Clique em **"Create Web Service"**
2. Aguarde o deploy (5-10 minutos na primeira vez)
3. Quando aparecer **"Live"** em verde, está pronto! 🎉

### Passo 4: Obter a URL
- URL será algo como: `https://mcp-developer-xxxx.onrender.com`
- Copie e compartilhe!

---

## 🔄 Atualizações Futuras

Para atualizar o site após mudanças:

```bash
# Adicionar mudanças
git add .

# Commit com mensagem descritiva
git commit -m "Descrição das mudanças"

# Enviar para GitHub
git push
```

**O Render vai fazer deploy automático a cada push!** 🚀

---

## ⚠️ Troubleshooting

### Problema: Build falhou no Render
**Solução:**
- Verifique os logs no Render
- Certifique-se que todas as dependências estão no `package.json`

### Problema: Página branca após deploy
**Solução:**
- Limpe o cache: Settings → Clear build cache & deploy
- Verifique se o Node version está 18+

### Problema: Git push rejeitado
**Solução:**
```bash
git pull origin main --rebase
git push
```

---

## 📱 Configurações Extras (Opcional)

### Domínio Personalizado
1. No Render: Settings → Custom Domain
2. Adicione seu domínio
3. Configure DNS conforme instruções

### Variáveis de Ambiente
1. No Render: Environment
2. Adicione variáveis se necessário
3. Redeploy

---

## ✅ Checklist Final

- [ ] Código no GitHub
- [ ] Deploy no Render concluído
- [ ] Site acessível pela URL do Render
- [ ] Testar todos os botões de WhatsApp
- [ ] Testar responsividade (mobile)
- [ ] Compartilhar URL! 🎉

---

## 🆘 Precisa de Ajuda?

- [Documentação Render](https://render.com/docs)
- [Documentação Next.js Deploy](https://nextjs.org/docs/deployment)
- WhatsApp: +55 (31) 99177-6441
