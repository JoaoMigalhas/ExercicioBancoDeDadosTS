//Grupo: João Miguel Santos RA: 2511914 e Henrique Cordeiro RA: 2507350


// Usando a sintaxe CommonJS 'require' que é 100% compatível
//bibliotecas usadas
const { Pool } = require('pg');
const readlineSync = require('readline-sync');

// Nunca use senha e usuario nos codgos - este é apenas um exemplo de aulas
// No mundo real isso é uma baita vulnerabilidade
//estabelecer conexao com o banco de dados
const dbConfig = {
    user: 'aluno',
    host: 'localhost',
    database: 'db_profedu',
    password: '102030',
    port: 5432,
};

const pool = new Pool(dbConfig);

//criar uma interface para o aluno com o tipo das constantes
interface Aluno {
    nome: string;
    serie: string;
    idade: number;
    notas: {
        mat1: number;
        mat2: number;
        mat3: number;
        mat4: number;
        mat5: number;
        mat6: number;
        mat7: number;
        mat8: number;
        geo1: number;
        geo2: number;
        geo3: number;
        geo4: number;
        geo5: number;
        geo6: number;
        geo7: number;
        geo8: number;
        hist1: number;
        hist2: number;
        hist3: number;
        hist4: number;
        hist5: number;
        hist6: number;
        hist7: number;
        hist8: number;
    };
}

//criar uma função para calcular a media das notas de todas as materias
function calcularMedia(notas: Aluno["notas"]) {
    const mediaMat = (notas.mat1) + (notas.mat2) + (notas.mat3) + (notas.mat4) + (notas.mat5) + (notas.mat6) + (notas.mat7) + (notas.mat8) / 8;
    const mediaGeo = (notas.geo1) + (notas.geo2) + (notas.geo3) + (notas.geo4) + (notas.geo5) + (notas.geo6) + (notas.geo7) + (notas.geo8) / 8;
    const mediaHist = (notas.hist1) + (notas.hist2) + (notas.hist3) + (notas.hist4) + (notas.hist5) + (notas.hist6) + (notas.hist7) + (notas.hist8) / 8;
    const mediaGeral = (mediaMat + mediaGeo + mediaHist) /3;
    return {mediaMat, mediaGeo, mediaHist, mediaGeral}
}


//criar a função para cadastrar o aluno pedindo os dados que serao fornecidos pelo usuario
async function cadastrarAluno(){
    console.log("=== Cadastro do Aluno ===");

    const nome = readlineSync.question("Digite o nome do aluno: ");
    const idade = readlineSync.question("Digite a idade do aluno: ");
    const serie = readlineSync.question("Digite a serie do aluno: ");

    const notas = {
        mat1: readlineSync.questionFloat("Nota 1 de Matematica: "),
        mat2: readlineSync.questionFloat("Nota 2 de Matematica: "),
        mat3: readlineSync.questionFloat("Nota 3 de Matematica: "),
        mat4: readlineSync.questionFloat("Nota 4 de Matematica: "),
        mat5: readlineSync.questionFloat("Nota 5 de Matematica: "),
        mat6: readlineSync.questionFloat("Nota 6 de Matematica: "),
        mat7: readlineSync.questionFloat("Nota 7 de Matematica: "),
        mat8: readlineSync.questionFloat("Nota 8 de Matematica: "),

        geo1: readlineSync.questionFloat("Nota 1 de Geografia: "),
        geo2: readlineSync.questionFloat("Nota 2 de Geografia: "),
        geo3: readlineSync.questionFloat("Nota 3 de Geografia: "),
        geo4: readlineSync.questionFloat("Nota 4 de Geografia: "),
        geo5: readlineSync.questionFloat("Nota 5 de Geografia: "),
        geo6: readlineSync.questionFloat("Nota 6 de Geografia: "),
        geo7: readlineSync.questionFloat("Nota 7 de Geografia: "),
        geo8: readlineSync.questionFloat("Nota 8 de Geografia: "),

        hist1: readlineSync.questionFloat("Nota 1 de Historia: "),
        hist2: readlineSync.questionFloat("Nota 2 de Historia: "),
        hist3: readlineSync.questionFloat("Nota 3 de Historia: "),
        hist4: readlineSync.questionFloat("Nota 4 de Historia: "),
        hist5: readlineSync.questionFloat("Nota 5 de Historia: "),
        hist6: readlineSync.questionFloat("Nota 6 de Historia: "),
        hist7: readlineSync.questionFloat("Nota 7 de Historia: "),
        hist8: readlineSync.questionFloat("Nota 8 de Historia: "),
    };

    //constante para calcular a media
    const { mediaMat, mediaGeo, mediaHist, mediaGeral } = calcularMedia(notas);


    //dar um loop para verificar se foi feita a conexao correta
    try {
        const client = await pool.connect();

         const query = `
        INSERT INTO alunos 
        (nome, serie, idade, media_matematica, media_geografia, media_historia, media_geral)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *;
        `;

         const values = [nome, serie, idade, mediaMat, mediaGeo, mediaHist, mediaGeral];

        const result = await client.query(query, values);
        client.release();

        console.log("\n✅ Aluno cadastrado com sucesso!");

    } catch (error) {
        console.error("❌ Erro ao inserir no banco:", error);
    } finally {
        await pool.end();
    }
}

//fim do progama
cadastrarAluno();