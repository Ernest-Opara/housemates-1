require('dotenv').config();
import express, { static, urlencoded } from 'express';
const app = express();
const SERVER_PORT = 3000;

app.use(static('public'));
app.use(urlencoded({ extended: true }))

app.listen(SERVER_PORT, () => console.log('Server listening on port ' + SERVER_PORT));