const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 * Métodos HTTP:
 * 
 * GET     -> Buscar informação
 * POST    -> Criar uma informação
 * PUT     -> Alterar uma infomação
 * DELETE  -> Deletar uma infomração
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados envados na rota após o "?" (Filtros, paginação)
  * Route Params: Parâmetros ultilizados para identificar recursos
  * Request Body: Corpo da requisição, ultilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc..
   */

   /**
    * Driver: SELECT * FROM users
    */


