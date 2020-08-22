const express = require('express')
const routes = express.Router()
const recipes = require('../recipes')

routes.get("/", recipes.home) //ok
routes.get("/receitas", recipes.recipes) //ok
routes.get("/receitas/:id", recipes.show) //ok
routes.get("/sobre", recipes.about) //ok

/* >==> routes admin <==< */

routes.get("/admin/recipes", recipes.home); // Mostrar a lista de receitas ::
routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita /admin/recipes/:id/edit

routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
routes.put("/admin/recipes", recipes.put); // Editar uma receita
routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita

module.exports = routes