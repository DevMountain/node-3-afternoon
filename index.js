const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');

const app = express();

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
