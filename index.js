const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const connectionString = "postgres://username:password@localhost/sandbox";

const app = express();
massive( connectionString ).then( dbInstance => app.set('db', dbInstance) );

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
