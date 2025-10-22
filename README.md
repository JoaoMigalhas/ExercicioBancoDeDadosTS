📘 Projeto: Escrever no Banco (Node.js + TypeScript + pgAdmin + PostgreSQL)
🧩 Descrição

Este projeto é uma aplicação simples em Node.js com TypeScript que permite cadastrar alunos no banco de dados PostgreSQL, gerenciado pelo pgAdmin.
Os dados são coletados via terminal com o readline-sync, e o programa calcula automaticamente as médias das matérias, armazenando todas as informações em uma tabela alunos.

🚀 Tecnologias Utilizadas

Node.js – Ambiente de execução JavaScript no servidor.

TypeScript – Superset de JavaScript com tipagem estática.

pgAdmin – Interface gráfica usada para gerenciar o banco de dados PostgreSQL (criar tabelas, visualizar registros etc.).

PostgreSQL – Banco de dados relacional onde os dados são armazenados.

🧠 Extensões e Dependências

📦 Dependências de Produção

Biblioteca	|| Função

pg	Biblioteca oficial do PostgreSQL para Node.js. Responsável pela conexão e execução de comandos SQL.

readline-sync	Permite ler entradas do usuário pelo terminal de forma síncrona (sem precisar de Promises).

🧰 Dependências de Desenvolvimento

Biblioteca	|| Função

typescript	Compilador TypeScript, responsável por converter .ts em .js.

@types/node	Tipos para as APIs nativas do Node.js (como fs, path, etc.).

@types/pg	Tipos para a biblioteca pg, garantindo IntelliSense e segurança de tipos.

@types/readline-sync	Tipos para o readline-sync, permitindo autocompletar e validações no TypeScript.

⚙️ Configuração do Projeto

1️⃣ Inicializar o projeto Node.js (caso ainda não tenha)

npm init -y

2️⃣ Instalar as bibliotecas de produção

npm install pg readline-sync

3️⃣ Instalar o TypeScript e os tipos (dependências de desenvolvimento)

npm install -D typescript @types/node @types/pg @types/readline-sync

4️⃣ Criar o arquivo de configuração do 

npx tsc --init

5️⃣ Exemplo de tsconfig.json

{
  "compilerOptions": {
    "target": "es2020",
    "module": "Node16",
    "moduleResolution": "Node16",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}


🗄️ Configuração no pgAdmin

1. Abra o pgAdmin.

2. Crie um Banco de Dados chamado db_profedu.

3. Dentro dele, crie a tabela alunos com o seguinte comando SQL:
CREATE TABLE alunos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  serie VARCHAR(20),
  idade INT,
  media_matematica NUMERIC(4,2),
  media_geografia NUMERIC(4,2),
  media_historia NUMERIC(4,2),
  media_geral NUMERIC(4,2)
);

4. Anote as credenciais de conexão (usuário, senha, porta e host).

5. Verifique no pgAdmin se o banco está ativo e pronto para receber conexões.

🖥️ Como Rodar o Projeto

1.  Compilar o TypeScript para JavaScript:
npx tsc

2. Executar o código compilado:
node dist/index.js

✨ Autor

João Miguel Santos e Henrique Cordeiro
Aplicação desenvolvida para estudos de TypeScript, Node.js, PostgreSQL e pgAdmin.# ExercicioBancoDeDadosTS
