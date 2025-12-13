# 🌐 Arquitetura de Domínios - ExzosVerse

## 📋 **Estrutura de Domínios**

### **🌍 Domínio Público: `exzosverse.com`**
*Serviços voltados para o público geral*

```bash
# Site Principal
exzosverse.com                    # Landing page e diretório de ferramentas
www.exzosverse.com               # Redirect para exzosverse.com

# API Pública
api.exzosverse.com               # API REST pública
graphql.exzosverse.com           # GraphQL endpoint (futuro)

# CDN e Assets
cdn.exzosverse.com               # Assets estáticos, imagens, uploads
static.exzosverse.com            # Arquivos estáticos (CSS, JS, fonts)

# Documentação
docs.exzosverse.com              # Documentação da API
help.exzosverse.com              # Central de ajuda

# Blog e Conteúdo
blog.exzosverse.com              # Blog oficial
news.exzosverse.com              # Notícias e atualizações
```

### **🔒 Domínio Privado: `exzosverse.online`**
*Serviços internos e administrativos*

```bash
# Autenticação
auth.exzosverse.online           # Sistema de autenticação BetterAuth
oauth.exzosverse.online          # OAuth callbacks

# Banco de Dados
data.exzosverse.online           # PostgreSQL (Neon/Supabase)
db.exzosverse.online             # Database admin (pgAdmin)

# Cache e Performance
cache.exzosverse.online          # Redis (Upstash)
redis.exzosverse.online          # Redis admin interface

# Busca
search.exzosverse.online         # Meilisearch
elastic.exzosverse.online        # Elasticsearch (futuro)

# Analytics
posthog.exzosverse.online        # PostHog analytics
plausible.exzosverse.online      # Plausible analytics
analytics.exzosverse.online      # Dashboard unificado

# Admin e Monitoramento
admin.exzosverse.online          # Painel administrativo
monitor.exzosverse.online        # Monitoramento (Grafana)
logs.exzosverse.online           # Logs centralizados

# Email e Comunicação
mail.exzosverse.online           # Resend/SendGrid
smtp.exzosverse.online           # SMTP server

# Storage
storage.exzosverse.online        # S3/Vercel Blob
files.exzosverse.online          # File management

# AI e Processamento
ai.exzosverse.online             # AI APIs (OpenAI, Anthropic)
queue.exzosverse.online          # Job queue (Inngest)
```

## 🔧 **Configuração DNS**

### **Registrar DNS (Cloudflare/Route53)**

```bash
# Domínio Público - exzosverse.com
exzosverse.com           A     76.76.19.123    # Vercel
*.exzosverse.com         A     76.76.19.123    # Wildcard para subdomínios

# Domínio Privado - exzosverse.online  
exzosverse.online        A     76.76.19.124    # Servidor privado
*.exzosverse.online      A     76.76.19.124    # Wildcard para subdomínios

# CNAME Records (se necessário)
www.exzosverse.com       CNAME exzosverse.com
api.exzosverse.com       CNAME exzosverse.com
cdn.exzosverse.com       CNAME exzosverse.com
```

### **SSL/TLS Certificates**

```bash
# Wildcard certificates
*.exzosverse.com         # Cloudflare/Let's Encrypt
*.exzosverse.online      # Cloudflare/Let's Encrypt
```

## 🌐 **Environment Variables por Domínio**

### **Público (exzosverse.com)**
```bash
NEXT_PUBLIC_SITE_URL="https://exzosverse.com"
NEXT_PUBLIC_API_URL="https://api.exzosverse.com"
NEXT_PUBLIC_CDN_URL="https://cdn.exzosverse.com"
NEXT_PUBLIC_DOCS_URL="https://docs.exzosverse.com"
```

### **Privado (exzosverse.online)**
```bash
# Auth
BETTER_AUTH_URL="https://auth.exzosverse.online"
OAUTH_CALLBACK_URL="https://oauth.exzosverse.online"

# Database
DATABASE_URL="postgresql://user:pass@data.exzosverse.online:5432/db"
DATABASE_URL_UNPOOLED="postgresql://user:pass@data.exzosverse.online:5432/db"

# Cache
REDIS_REST_URL="https://cache.exzosverse.online"
REDIS_URL="redis://cache.exzosverse.online:6379"

# Search
MEILISEARCH_HOST="https://search.exzosverse.online"

# Analytics
NEXT_PUBLIC_POSTHOG_HOST="https://posthog.exzosverse.online"
NEXT_PUBLIC_PLAUSIBLE_URL="https://plausible.exzosverse.online"

# Storage
S3_ENDPOINT="https://storage.exzosverse.online"
BLOB_STORAGE_URL="https://files.exzosverse.online"

# Email
RESEND_WEBHOOK_URL="https://mail.exzosverse.online/webhook"

# Admin
ADMIN_URL="https://admin.exzosverse.online"
```

## 🔒 **Segurança por Domínio**

### **Público (exzosverse.com)**
- ✅ Rate limiting público
- ✅ CORS configurado
- ✅ CDN com cache
- ✅ DDoS protection
- ✅ SEO otimizado

### **Privado (exzosverse.online)**
- ✅ VPN/IP whitelist
- ✅ Autenticação obrigatória
- ✅ Rate limiting restritivo
- ✅ Logs detalhados
- ✅ Monitoramento 24/7

## 🚀 **OAuth Redirect URLs**

### **Google OAuth**
```bash
# Produção
https://auth.exzosverse.online/api/auth/callback/google

# Desenvolvimento
http://localhost:3000/api/auth/callback/google
```

### **GitHub OAuth**
```bash
# Produção
https://auth.exzosverse.online/api/auth/callback/github

# Desenvolvimento  
http://localhost:3000/api/auth/callback/github
```

### **Twitter/X OAuth**
```bash
# Produção
https://auth.exzosverse.online/api/auth/callback/twitter

# Desenvolvimento
http://localhost:3000/api/auth/callback/twitter
```

## 📊 **Monitoramento**

### **Health Checks**
```bash
# Público
https://exzosverse.com/api/health
https://api.exzosverse.com/health

# Privado
https://auth.exzosverse.online/health
https://data.exzosverse.online/health
https://cache.exzosverse.online/health
https://search.exzosverse.online/health
```

### **Status Page**
```bash
https://status.exzosverse.com    # Status público de todos os serviços
```

## 🔄 **Deployment Strategy**

### **Vercel (Público)**
- `exzosverse.com` → Vercel Production
- `api.exzosverse.com` → Vercel API Routes
- `cdn.exzosverse.com` → Vercel Static Assets

### **Serviços Privados**
- `auth.exzosverse.online` → BetterAuth service
- `data.exzosverse.online` → Neon PostgreSQL
- `cache.exzosverse.online` → Upstash Redis
- `search.exzosverse.online` → Meilisearch Cloud

---

**🌐 Arquitetura Completa**: Público + Privado = **Máxima Segurança** e **Performance**