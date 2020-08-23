const express = require('express')
const routes = express.Router()
const recipes = require('../controllers/controllers')

//== Users

routes.get("/", recipes.home) //ok
routes.get("/receitas", recipes.recipesUsers) //ok
routes.get("/receitas/:id", recipes.showUsers) //ok
routes.get("/sobre", recipes.about) //ok

//==

routes.get("/admin/recipes", recipes.recipes); // Mostrar a lista de receitas ::
routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita /admin/recipes/:id/edit

routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
routes.put("/admin/recipes", recipes.put); // Editar uma receita
routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita

module.exports = routes