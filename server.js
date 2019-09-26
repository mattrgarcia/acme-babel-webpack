const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;

app.get('/dist/main.js', (req, res, next)=> {
  res.sendFile(path.join(__dirname, 'dist/main.js'));
});

app.get('/', (req, res, next)=> {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/people',  (req, res, next)=> {
   res.send([
    {id: 1, name: 'Lourdes'},
    {id: 2, name: 'Matt'},
    {id: 3, name: 'Max'}
   ]);
});

app.get('/api/places',  (req, res, next)=> {
   res.send([
    {id: 1, name: 'Monterey'},
    {id: 2, name: 'Pacific Grove'},
    {id: 3, name: 'Carmel'}
   ]);
});

app.get('/api/things',  (req, res, next)=> {
   res.send([
    {id: 1, name: 'Javascript'},
    {id: 2, name: 'Water'},
    {id: 3, name: 'Fan'}
   ]);
});

app.listen(port, ()=> console.log(`Listening on port ${port}`));
