require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const routes = require('./src/routes/routes.js')
const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use('/api',routes)


app.listen(PORT, ()=> {
    console.log(`Servidor ouvindo a porta ${PORT}`)
})
