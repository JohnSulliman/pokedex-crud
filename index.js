const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const Pokemon = require("./models/pokemon.js");

app.get('/', async (req, res) => { 
  const pokemons = await Pokemon.findAll();
    
  res.render('index', {
    pokemons,
  })
}); 

app.get('/cadastro', async (req, res) => {
  const pokemon = await Pokemon.findAll();

  res.render('register', pokemon)
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
    abilities,
    weak,
    strong,
    sex,  
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
      abilities,
      weak,
      strong,
      sex,
    });

    res.redirect('/');
  } catch (err) {
    console.log(err); 

    res.render('register');
  }

  res.redirect('/');
})

app.get('/detalhes/:id', async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.id);

  console.log(pokemon)

  res.render('infos', {
    pokemon
  })
});

app.listen ( port, () => 
  console.log(`Servidor rodando em localhost:${port}`));