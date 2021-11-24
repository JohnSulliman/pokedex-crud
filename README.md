# POKEDEX (CRUD) <img src="https://drive.google.com/uc?export=view&id=1dyCVr72ubLcLnB02clVJSiw33gNFikVO" width="60px" alt="eevee.gif" >

<!---Esses são exemplos. Veja https://shields.io para outras pessoas ou para personalizar este conjunto de escudos. Você pode querer incluir dependências, status do projeto e informações de licença aqui--->

![GitHub repo size](https://img.shields.io/github/repo-size/JohnSulliman/pokedex-crud?style=flat)
![GitHub language count](https://img.shields.io/github/languages/count/JohnSulliman/pokedex-crud?style=flat)
![GitHub download count](https://img.shields.io/chocolatey/dt/pokedex-crud?style=flat)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/JohnSulliman/pokedex-crud?style=flat)

<img src="https://drive.google.com/uc?export=view&id=1wJNdAcqqIKeKRJFF8e0fPiSQ0rdp401e" alt="pokedex-crud">

> Projeto Pokedéx em CRUD -Feito para o módulo 2 da Blue-EdTech-.

## 💻 Pré-requisitos <img src="https://drive.google.com/uc?export=view&id=1nVnUhl-scjmVIXWIMkTvcD2GvjjAFjfj" width="60px" alt="jolteon.gif" >

Antes de começar, verifique se você atendeu aos seguintes requisitos:
* Você instalou a versão mais recente de `Node`
 
## 🚀 Instalando `Pokedex (CRUD)` <img src="https://drive.google.com/uc?export=view&id=1S0HOjJvMTTCcP4mttYqQcAM2UWaHxOM_" width="60px" alt="vaporeon.gif" >

Para instalar o `Pokedex (CRUD)`, siga estas etapas:

Caso não possua o npm, instale o Node.js em seu site oficial:

<a href="https://nodejs.org/en/download/">Node.js</a>

Clone o projeto:
```
git clone https://github.com/JohnSulliman/pokedex-crud.git
```

Em seguida, adicione as bibliotecas e dependências necessárias:
```
cd pokedex-crud
```
```
npm init
```
```
npm i nodemon -D
```
```
npm i express --save
```
```
npm i --save ejs
```
```
npm i dotenv
```
```
npm install sequelize pg pg-hstore
```
## ☕ Usando `Pokedex (CRUD)` <img src="https://drive.google.com/uc?export=view&id=1Bv9lE0MT2MkeA0kVekwPen83qBlhlgC0" width="80px" alt="flareon.gif" >

```
npm run dev
```
E acesse o link <a href="http://localhost:3000/">localhost:3000</a>

## ☕ Usando `Pokedex (CRUD)` localmente <img src="https://drive.google.com/uc?export=view&id=1fUe9dxafQHROqKddaZ6NQ0gi9PB2xnNn" width="120px" alt="glaceon.gif" >

Para usar o projetro `Pokedex (CRUD)` localmente, você vai precisar de alguma ferramente de banco de dados. Para esse projeto, foi usado PostgresSQL.

Caso não possua o PostgresSQL ou outra ferramente de banco de dados, você pode baixar PostgresSQL no site oficial:

<a href='https://www.postgresql.org/'>PostegresSQL<a/>

Feito isso, você vai precisar criar um arquivo chamada `.env` na raiz do projeto e colocar o seguinte código:
  
```
DATABASE_URL = postgres://{user}:{password}@{hostname}:{port}/{database-name}
```

Após o arquivo `.env` estiver configurado com as informações do seu banco de dados, utilize esse código no PostgresSQL (ou outra ferramenta de banco de dados a sua escolha) para criar as tabelas que estão sendo utilizadas nesse projeto:
 
```
CREATE TABLE IF NOT EXISTS public.pokemons
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "number" integer NOT NULL,
    name character varying COLLATE pg_catalog."default" NOT NULL,
    image character varying COLLATE pg_catalog."default" NOT NULL,
    description character varying COLLATE pg_catalog."default",
    height numeric,
    weight numeric,
    sex character varying COLLATE pg_catalog."default" NOT NULL,
    category character varying COLLATE pg_catalog."default",
    skills character varying COLLATE pg_catalog."default",
    type1 character varying COLLATE pg_catalog."default" NOT NULL,
    type2 character varying COLLATE pg_catalog."default",
    weak character varying COLLATE pg_catalog."default",
    strong character varying COLLATE pg_catalog."default",
    regions_id integer NOT NULL,
    CONSTRAINT pokemons_pkey PRIMARY KEY ("number"),
    CONSTRAINT fk_regions FOREIGN KEY (regions_id)
        REFERENCES public.regions (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
  
CREATE TABLE IF NOT EXISTS public.regions
(
    id integer NOT NULL,
    region_name character varying COLLATE pg_catalog."default" NOT NULL,
    region_image character varying COLLATE pg_catalog."default" NOT NULL,
    region_image_description character varying COLLATE pg_catalog."default",
    region_description character varying COLLATE pg_catalog."default",
    CONSTRAINT regions_pkey PRIMARY KEY (id)
)
```
  
Com as tabelas criadas, seu projeto está pronto para rodar localmente!
  
Obs.: A tabela `regions` foi criada apenas para mostrar informações, os usuários não possui acesso para criar, alterar ou deletar informações dessa tabela. Com isso, as informações da tabela `regions` deve ser inseridas manualmente no banco de dados.

## 📫 Contribuindo para `Pokedex (CRUD)` <img src="https://drive.google.com/uc?export=view&id=1RjoWhho7MECA1fb9jFMIJcJE9hGwF8av" width="65px" alt="umbreon.gif" >
<!---Se o seu README for longo ou se você tiver algum processo ou etapas específicas que deseja que os contribuidores sigam, considere a criação de um arquivo CONTRIBUTING.md separado--->
Para contribuir com `Pokedex (CRUD)`, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <pokedex_seu_nome>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <master> / <https://github.com/JohnSulliman/pokedex-crud/>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 🤝 Colaboradores <img src="https://drive.google.com/uc?export=view&id=15pFDmtCByojqVHiIyRViiEClyF2vjjZ_" width="80px" alt="espeon.gif" >

As seguintes pessoas colaboraram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/JohnSulliman/">
        <img src="https://i.pinimg.com/564x/02/d5/be/02d5be6964f1ffb7a77a47bfd79f8d23.jpg" width="100px;" alt="john-sulliman.jpg"/><br>
        <sub>
          <b>John Sulliman</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/gui-souza/">
        <img src="https://github.com/gui-souza.png" width="100px;" alt="gui-souza.png"/><br>
        <sub>
          <b>	Guilherme Souza</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## 📝 Licença <img src="https://drive.google.com/uc?export=view&id=1l8w5F5FAjzSnZLhjZMCmrI3VYbhdDExn" width="65px" alt="leafeon.gif" >

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.
