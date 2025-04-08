# 📝 README - Refatoração de Código Legado

## 🎯 Objetivo
Os alunos devem realizar uma **análise crítica** de um código legado, identificando aspectos que comprometem sua **manutenção e escalabilidade**. Com base nessa análise, devem propor e implementar soluções para aprimorar a **qualidade, organização e sustentabilidade** do código.

---

## 📌 Cenário
Sua equipe foi designada por uma empresa para atuar na **refatoração de um código antigo**, tornando-o mais **organizado, eficiente e sustentável**. No entanto, ao iniciar a análise, foram identificados diversos problemas de **débito técnico**, tais como:

✅ Uso excessivo de estilos inline e interno<br>
✅ Código duplicado<br>
✅ Layout quebrado e fora dos padrões de UI/UX<br>
✅ Falta de boas práticas de acessibilidade<br>
✅ Código JavaScript pouco modular<br>
✅ Falta de padrões de nomenclaturas<br>
✅ Validações de JavaScript não funcionais<br>

---

## 🚨 Problemas Encontrados e Soluções Propostas

### 🔹 Problemas Gerais
🔸 **Falta de favicon** → Adicionar um ícone ao site.

### 🔹 Arquivo `README.md`
🔸 **Nome incorreto (`READMIR.md`)** → Renomear para `README.md`.<br>
🔸 **Falta de documentação** → Adicionar explicação sobre funcionalidades e estrutura do código.<br>

### 🔹 Arquivo `index.html`
🔸 **Nome incorreto (`index.HTML`)** → Renomear para `index.html`.<br>
🔸 **Estilização excessiva interna (`<style>`)** → Mover estilos para um arquivo CSS.<br>
🔸 **Má indentação** → Ajustar a formatação do código.<br>
🔸 **Uso da tag `<center>` (obsoleta no HTML5)** → Substituir por CSS adequado.<br>
🔸 **Inputs sem `<form>`** → Agrupar inputs dentro da tag `<form>`.<br>
🔸 **Falta de semântica (ausência de `<label>` para inputs)** → Adicionar `label` para acessibilidade.<br>
🔸 **Tag `<script>` fora da tag `<html>`** → Mover scripts para a posição correta.<br>
🔸 **Falta de redirecionamento para `Sobre.html`** → Corrigir links de navegação.<br>
🔸 **Envio de dados sem validação** → Implementar validação em JavaScript.<br>

### 🔹 Arquivo `contato.html`
🔸 **Estilização interna excessiva** → Consolidar estilos no CSS externo.<br>
🔸 **Má indentação** → Ajustar formatação do código.<br>
🔸 **Falta de semântica nos inputs** → Adicionar `label`.<br>
🔸 **Redirecionamento incorreto para `index.html`** → Corrigir link de navegação.<br>
🔸 **Envio de dados sem validação** → Implementar validação.<br>

### 🔹 Arquivo `Sobre.html`
🔸 **Nome incorreto (`Sobre.html`)** → Renomear para `sobre.html`.<br>
🔸 **Sem redirecionamento adequado** → Garantir navegação correta.<br>
🔸 **Conteúdo incoerente** → Atualizar para um texto adequado sobre o projeto.<br>

### 🔹 Arquivo `styles.css`
🔸 **Nome incorreto (`styles.CSS`)** → Renomear para `styles.css`.<br>
🔸 **Falta de indentação** → Ajustar formatação.<br>
🔸 **Redundância de código** → Remover estilos repetidos e organizar as classes.<br>
🔸 **Redundância de código** → Remover estilos repetidos e organizar as classes.<br>
🔸 **Melhoria da estrutura visual** → Tornar o layout mais responsivo e harmonioso.

### 🔹 Scripts
🔸 **Distribuição excessiva de pastas** → Reestruturar organização dos arquivos.<br>
🔸 **Nomenclatura ruim** → Melhorar nome dos arquivos e funções.<br>

---

## ⚡ Diretrizes para Refatoração
📌 **Separação de responsabilidades:**
✔️ Mover estilos inline para arquivos CSS externos.
✔️ Organizar scripts JavaScript em módulos reutilizáveis.

📌 **Melhoria na estrutura e organização:**
✔️ Eliminar código duplicado.
✔️ Implementar padrões de nomenclatura consistentes.
✔️ Garantir uma estrutura de pastas organizada.

📌 **Correções de UI/UX:**
✔️ Ajustar o layout para torná-lo responsivo.
✔️ Aplicar padrões modernos de design.
✔️ Melhorar a experiência visual através do CSS otimizado.

📌 **Melhoria do JavaScript:**
✔️ Refatorar validações de formulários.
✔️ Tornar o código modular e reutilizável.
✔️ Seguir boas práticas de desenvolvimento.

---

## 📂 Entregáveis
📌 **Código refatorado:**
✔️ Arquivos organizados e documentados.
✔️ Melhorias implementadas seguindo as diretrizes estabelecidas.

📌 **Relatório da análise e refatoração:**
✔️ Descrição dos problemas encontrados.
✔️ Justificativa das melhorias aplicadas.

📌 **Demonstração do código funcionando:**
✔️ Exemplo funcional mostrando as melhorias aplicadas.

---

## 🚀 Tecnologias Utilizadas
🛠️ HTML, CSS, JavaScript

---

## ▶️ Como Executar
1️⃣ Clone o repositório:
   ```sh
   git clone <URL-DO-REPOSITORIO>
   ```
2️⃣ Acesse o diretório do projeto:
   ```sh
   cd nome-do-projeto
   ```
3️⃣ Abra o arquivo `index.html` em um navegador para visualizar o projeto.

---

Obs: O código de base utilizado para desenvolver essa atividade também está disponível no repositório (ead-5.zip). 

## 🤝 Contribuições
📌 Caso deseje contribuir com melhorias, entre em contato!

