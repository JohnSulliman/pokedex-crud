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