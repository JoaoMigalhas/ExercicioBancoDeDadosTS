var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Usando a sintaxe CommonJS 'require' que é 100% compatível
//bibliotecas usadas
var Pool = require('pg').Pool;
var readlineSync = require('readline-sync');
// Nunca use senha e usuario nos codgos - este é apenas um exemplo de aulas
// No mundo real isso é uma baita vulnerabilidade
//estabelecer conexao com o banco de dados
var dbConfig = {
    user: 'aluno',
    host: 'localhost',
    database: 'db_profedu',
    password: '102030',
    port: 5432,
};
var pool = new Pool(dbConfig);
//criar uma função para calcular a media das notas de todas as materias
function calcularMedia(notas) {
    var mediaMat = (notas.mat1) + (notas.mat2) + (notas.mat3) + (notas.mat4) + (notas.mat5) + (notas.mat6) + (notas.mat7) + (notas.mat8) / 8;
    var mediaGeo = (notas.geo1) + (notas.geo2) + (notas.geo3) + (notas.geo4) + (notas.geo5) + (notas.geo6) + (notas.geo7) + (notas.geo8) / 8;
    var mediaHist = (notas.hist1) + (notas.hist2) + (notas.hist3) + (notas.hist4) + (notas.hist5) + (notas.hist6) + (notas.hist7) + (notas.hist8) / 8;
    var mediaGeral = (mediaMat + mediaGeo + mediaHist) / 3;
    return { mediaMat: mediaMat, mediaGeo: mediaGeo, mediaHist: mediaHist, mediaGeral: mediaGeral };
}
//criar a função para cadastrar o aluno pedindo os dados que serao fornecidos pelo usuario
function cadastrarAluno() {
    return __awaiter(this, void 0, void 0, function () {
        var nome, idade, serie, notas, _a, mediaMat, mediaGeo, mediaHist, mediaGeral, client, query, values, result, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("=== Cadastro do Aluno ===");
                    nome = readlineSync.question("Digite o nome do aluno: ");
                    idade = readlineSync.question("Digite a idade do aluno: ");
                    serie = readlineSync.question("Digite a serie do aluno: ");
                    notas = {
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
                    _a = calcularMedia(notas), mediaMat = _a.mediaMat, mediaGeo = _a.mediaGeo, mediaHist = _a.mediaHist, mediaGeral = _a.mediaGeral;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, 5, 7]);
                    return [4 /*yield*/, pool.connect()];
                case 2:
                    client = _b.sent();
                    query = "\n        INSERT INTO alunos \n        (nome, serie, idade, media_matematica, media_geografia, media_historia, media_geral)\n        VALUES ($1, $2, $3, $4, $5, $6, $7)\n        RETURNING *;\n        ";
                    values = [nome, serie, idade, mediaMat, mediaGeo, mediaHist, mediaGeral];
                    return [4 /*yield*/, client.query(query, values)];
                case 3:
                    result = _b.sent();
                    client.release();
                    console.log("\n✅ Aluno cadastrado com sucesso!");
                    return [3 /*break*/, 7];
                case 4:
                    error_1 = _b.sent();
                    console.error("❌ Erro ao inserir no banco:", error_1);
                    return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, pool.end()];
                case 6:
                    _b.sent();
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    });
}
//fim do progama
cadastrarAluno();
