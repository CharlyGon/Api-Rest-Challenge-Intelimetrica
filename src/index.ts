import express from 'express';
require('dotenv').config();

const app = express();
const port = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
    res.send('Hello!');
    });

//start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
