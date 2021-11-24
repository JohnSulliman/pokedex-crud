const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const Pokemon = require('./models/pokemon.js');
const Regions = require('./models/regions.js');

app.get('/', async (req, res) => { 
  const pokemons = await Pokemon.findAll();
  console.log(pokemons)

  res.render('index', {
    pokemons,
  })
}); 

app.get('/cadastro', async (req, res) => {
  const pokemon = await Pokemon.findAll();
  const region = await Regions.findAll();

  res.render('register', {
    pokemon, region
  })
});

app.get('/update/:number', async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.number);

  res.render('update', {
    pokemon
  })
});

app.post('/update/:number', async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.number);

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

  try {
    await pokemon.save();
    res.redirect("/");
  } catch (err) {
    message = "Não foi possível alterar";
    res.redirect("/");
  }

  res.render('update', {
    pokemon
  })
});

app.get("/deletar/:number", async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.number);

  res.render('deletar', pokemon)
});

app.post('/deletar/:number', async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.number)
  
  try {
    await pokemon.destroy();

    message = "Pokémon deletado";
    res.redirect("/");
  } catch (err) {
    message = "Pokémon não deletado";
    res.redirect("/");
  }
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

    res.redirect('/');
  } catch (err) {
    console.log(err); 

    res.render('register');
  }

  res.redirect('/');
})

app.get('/detalhes/:number', async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.number);
  const region = await Regions.findAll({
    where: {
      id: pokemon.regions_id,
    }
  })

  console.log(pokemon, region)

  res.render('infos', {
    pokemon,
    region
  })
});

app.listen ( port, () => 
  console.log(`Servidor rodando em localhost:${port}`));