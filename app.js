<<<<<<< HEAD
const express = require('express');
const { engine } = require('express-handlebars');
const bp = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const Avaliacao = require('./module/avaliacao');

dotenv.config();

const app = express();
const pessoas = [];

// Configuração do Handlebars
app.use(express.static('public'));
app.engine('handlebars', engine());const express = require('express');
const { engine } = require('express-handlebars');
const bp = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const Avaliacao = require('./module/avaliacao');

dotenv.config();

const app = express();
const pessoas = [];

// Configuração do Handlebars
app.use(express.static('public'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Configuração Body-parser
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(express.static('public'));

// Middleware para registrar requisições
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    console.log('Body:', req.body);
    next();
});

// Conectar ao banco de dados
sequelize.authenticate()
  .then(() => {
   console.log('Conectado ao MySQL');
  })
  .catch(err => {
    console.error('Erro ao conectar ao MySQL:', err);
  });

// Sincronizar modelos com o banco de dados
sequelize.sync();

// Rota GET para a página inicial
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/orcamento', (req, res) => {
    res.render('orcamento');
});

// Rota POST para lidar com a solicitação de orçamento
app.post('/orcamento', (req, res) => {
    const { nome, email, telefone, tipo_servico, data_mudanca, origem, destino, lista_itens, info_adicionais } = req.body;

    const pessoa = {
        nome,
        email,
        telefone,
        tipo_servico,
        data_mudanca,
        origem,
        destino,
        lista_itens,
        info_adicionais
    };
    pessoas.push(pessoa);
    console.log(pessoa);

    res.render('orcamentoSucesso'); // Renderiza a página de sucesso
});

app.get('/contato', (req, res) => {
    res.render('contato');
});

app.get('/servicos', (req, res) => {
    res.render('servicos');
});

app.get('/sobre', (req, res) => {
    res.render('sobre');
});

app.get('/coleta-entrega', (req, res) => {
    res.render('coleta-entrega');
});

app.get('/distribuicao-produtos', (req, res) => {
    res.render('distribuicao-produtos');
});

app.get('/mudancas-empresariais', (req, res) => {
    res.render('mudancas-empresariais');
});

app.get('/mudancas-residenciais', (req, res) => {
    res.render('mudancas-residenciais');
});

app.get('/coleta-entrega-carga', (req, res) => {
    res.render('coleta-entrega-carga');
});

app.get('/desmontagem-montagem-moveis', (req, res) => {
    res.render('desmontagem-montagem-moveis');
});

app.get('/logistica', (req, res) => {
    res.render('logistica');
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});

app.set('view engine', 'handlebars');
app.set('views', './views');

// Configuração Body-parser
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(express.static('public'));

// Middleware para registrar requisições
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    console.log('Body:', req.body);
    next();
});

// Conectar ao banco de dados
sequelize.authenticate()
  .then(() => {
   console.log('Conectado ao MySQL');
  })
  .catch(err => {
    console.error('Erro ao conectar ao MySQL:', err);
  });

// Sincronizar modelos com o banco de dados
sequelize.sync();

// Rota GET para a página inicial
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/orcamento', (req, res) => {
    res.render('orcamento');
});

// Rota POST para lidar com a solicitação de orçamento
app.post('/orcamento', (req, res) => {
    const { nome, email, telefone, tipo_servico, data_mudanca, origem, destino, lista_itens, info_adicionais } = req.body;

    const pessoa = {
        nome,
        email,
        telefone,
        tipo_servico,
        data_mudanca,
        origem,
        destino,
        lista_itens,
        info_adicionais
    };
    pessoas.push(pessoa);
    console.log(pessoa);

    res.render('orcamentoSucesso'); // Renderiza a página de sucesso
});

app.get('/contato', (req, res) => {
    res.render('contato');
});

app.get('/servicos', (req, res) => {
    res.render('servicos');
});

app.get('/sobre', (req, res) => {
    res.render('sobre');
});

app.get('/coleta-entrega', (req, res) => {
    res.render('coleta-entrega');
});

app.get('/distribuicao-produtos', (req, res) => {
    res.render('distribuicao-produtos');
});

app.get('/mudancas-empresariais', (req, res) => {
    res.render('mudancas-empresariais');
});

app.get('/mudancas-residenciais', (req, res) => {
    res.render('mudancas-residenciais');
});

app.get('/coleta-entrega-carga', (req, res) => {
    res.render('coleta-entrega-carga');
});

app.get('/desmontagem-montagem-moveis', (req, res) => {
    res.render('desmontagem-montagem-moveis');
});

app.get('/logistica', (req, res) => {
    res.render('logistica');
});


app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});
=======
const express = require('express');
const { engine } = require('express-handlebars');
const bp = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const Avaliacao = require('./module/avaliacao');

dotenv.config();

const app = express();
const pessoas = [];

// Configuração do Handlebars
app.use(express.static('public'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Configuração Body-parser
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(express.static('public'));

// Middleware para registrar requisições
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    console.log('Body:', req.body);
    next();
});

// Conectar ao banco de dados
sequelize.authenticate()
  .then(() => {
   console.log('Conectado ao MySQL');
  })
  .catch(err => {
    console.error('Erro ao conectar ao MySQL:', err);
  });

// Sincronizar modelos com o banco de dados
sequelize.sync();

// Rota GET para a página inicial
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/orcamento', (req, res) => {
    res.render('orcamento');
});

// Rota POST para lidar com a solicitação de orçamento
app.post('/orcamento', (req, res) => {
    const { nome, email, telefone, tipo_servico, data_mudanca, origem, destino, lista_itens, info_adicionais } = req.body;

    const pessoa = {
        nome,
        email,
        telefone,
        tipo_servico,
        data_mudanca,
        origem,
        destino,
        lista_itens,
        info_adicionais
    };
    pessoas.push(pessoa);
    console.log(pessoa);

    res.render('orcamentoSucesso'); // Renderiza a página de sucesso
});

app.get('/contato', (req, res) => {
    res.render('contato');
});

app.get('/servicos', (req, res) => {
    res.render('servicos');
});

app.get('/sobre', (req, res) => {
    res.render('sobre');
});

app.get('/coleta-entrega', (req, res) => {
    res.render('coleta-entrega');
});

app.get('/distribuicao-produtos', (req, res) => {
    res.render('distribuicao-produtos');
});

app.get('/mudancas-empresariais', (req, res) => {
    res.render('mudancas-empresariais');
});

app.get('/mudancas-residenciais', (req, res) => {
    res.render('mudancas-residenciais');
});

app.get('/coleta-entrega-carga', (req, res) => {
    res.render('coleta-entrega-carga');
});

app.get('/desmontagem-montagem-moveis', (req, res) => {
    res.render('desmontagem-montagem-moveis');
});

app.get('/logistica', (req, res) => {
    res.render('logistica');
});


app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});
>>>>>>> 2dd5e92064a181855332cf7d65a102f35dc5c336
