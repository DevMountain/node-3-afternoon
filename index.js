const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const connectionString = "postgres://jameslemire:9829@localhost/sandbox";
const pc = require('./products_controller');

const app = module.exports = express();
app.use( bodyParser.json() );
app.use( cors() );
massive( connectionString ).then( dbInstance => app.set('db', dbInstance) );

app.post( '/api/product', pc.create );
app.get( '/api/products', pc.getAll );
app.get( '/api/product/:id', pc.getOne );
app.put( '/api/product/:id', pc.update );
app.delete( '/api/product/:id', pc.delete );

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
