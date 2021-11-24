const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const Pokemon = require('./models/pokemon.js');
const Regions = require('./models/regions.js');
let message = '';

app.get('/', async (req, res) => { 
  const pokemons = await Pokemon.findAll();
  console.log(pokemons)

  setTimeout(() => {
    message = "";
  }, 1000);

  res.render('index', {
    pokemons,
    message
  })
}); 

app.get('/cadastro', async (req, res) => {
  const pokemon = await Pokemon.findAll();
  const region = await Regions.findAll();

  res.render('register', {
    pokemon, 
    region,
    message
  })
});

app.post("/sent", async (req, res) => {
  const {
    number, 
    name,
    type1,
    type2,
    image,
    description,
    height,
    weight,
    category,
    skills,
    weak,
    strong,
    sex,
    regions_id,
  } = req.body;

  try {
    await Pokemon.create({
      number, 
      name,
      type1,
      type2,
      image,
      description,
      height,
      weight,
      category,
      skills,
      weak,
      strong,
      sex,
      regions_id,
    });

    message = "Pokémon registrado com sucesso!";

    res.redirect('/');
  } catch (err) {
    console.log(err); 

    res.render('register', {
      message: "Erro ao registrar o pokémon."
    });
  }

  res.redirect('/');
})

app.get('/editar/:number', async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.number);
  const region = await Regions.findAll({
    where: {
      id: pokemon.regions_id,
    }
  })

  res.render('update', {
    pokemon,
    region,
    message
  })
});

app.post('/editar/:number', async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.number);
  // const region = await Regions.findAll({
  //   where: {
  //     id: pokemon.regions_id,
  //   }
  // })

  const {
    number, 
    name,
    type1,
    type2,
    image,
    description,
    height,
    weight,
    category,
    abilities,
    weak,
    strong,
    sex,
    regions_id,
  } = req.body;

  pokemon.number = number;
  pokemon.name = name;
  pokemon.type1 = type1;
  pokemon.type2 = type2;
  pokemon.image = image;
  pokemon.description = description;
  pokemon.height = height;
  pokemon.weight = weight;
  pokemon.category = category;
  pokemon.abilities = abilities;
  pokemon.weak = weak;
  pokemon.strong = strong;
  pokemon.sex = sex;
  pokemon.regions_id = regions_id;

  try {
    await pokemon.save();
    message = 'Pokémon atualizado!'
    res.redirect("/");
  } catch (err) {
    message = 'Erro ao atualizar o pokémon';
    res.redirect("/");
  }
});

app.get("/deletar/:number", async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.number);

  res.render('deletar', pokemon)
});

app.post('/deletar/:number', async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.number)
  
  try {
    await pokemon.destroy();
    message = "Pokémon deletado!";
    res.redirect("/");
  } catch (err) {
    message = "Erro ao deletar pokémon.";
    res.redirect("/");
  }
});

app.get('/detalhes/:number', async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.number);
  const region = await Regions.findAll({
    where: {
      id: pokemon.regions_id,
    }
  })

  res.render('infos', {
    pokemon,
    region,
    message
  })
});

app.listen ( port, () => 
  console.log(`Servidor rodando em localhost:${port}`));