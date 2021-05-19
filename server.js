import express from 'express';
import cors from 'cors'
//import bodyparser from 'body-parser';
import favicon from 'serve-favicon';
import path from 'path';
import fs from 'fs-extra';

import 'dotenv/config';


const app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use(express.static('dist'));

app.use(express.static('public'));

app.get(['/','/home','/counter'], async (req, res) => {
  let index = await fs.readFile("./views/index.ejs", "utf-8");
  res.send(index);
})

app.get('/api/userData', async (req, res) => {
  const data = { firstName : 'Space', lastName : 'Dolphin' };
  res.json(data);
})

const port = process.env.PORT;

app.listen(port, () => { console.log(`Express listening on ${port}`) });
