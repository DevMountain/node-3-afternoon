<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project, we are going to make our first full CRUD back-end that uses a database.

## Step 1

### Summary

In this step. we are going to create a bare-bones server.

### Instructions

* Run `npm init -y`.
* Use npm to install and save `express`, `bodyParser`, `cors`, and `massive`.
* Create a `.gitignore` to ignore the `node_modules` folder.
* Create an `index.js` file.
* Require all the packages that we installed and saved.
* Get your server listening on port `3000`.

### Solution

<details>

<summary> <code> .gitignore </code> </summary>

```
node_modules
```

</details>

<details>

<summary> <code> index.js </code> </summary>

```js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');

const app = express();

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
```

</details>

## Step 2

### Summary

In this step, we are going to add massive to the server so we can connect to a database.

### Instructions

* Create a `connectionString` variable that connects to the `sanbox` database. ( This database was created when following the mini earlier today ).
* Use `massive` and the `connectionString` to establish a connection.
* In the `.then` callback from `massive`, set `db` on app to equal the database instance.

## Understand your data

We are going to be working with a single table, products.  It's schema will look something like this:

* ID : Primary key number
* Name : string
* Description: string
* Price: number
* Imageurl : string

## Create your .sql files

* Create a folder called db and place 5 files in there:
  * create_product
  * read_products
  * read_product
  * update_product
  * delete_product
  
* Create a working SQL query for each one.  You can use pgAdmin to test your queries against the database.

__create_product__

This query will need to take the 4 parameters defined in the schema and insert a record into the database.

__read_products__

This query will get all products in the table and return only the name, price, and image url

__read_product__

This query will take in an id and return all data for that product

__update_product__

This query will take in an id and a new description.  Find the product with the id and update it's description with the new description.

__delete_product__

This query will take in an id.  Find and delete the product with the id.


## Run your queries in your controller

* Create a productsCtrl.js
    * Export an object with 5 functions
        * Create, GetOne, GetAll, Update, Delete
    * Inside of each function, access the database instance by using `req.app.get('db')`.
    * Inside of Create use the create_product query
    * Inside of GetAll use the read_products query
    * Inside of GetOne, use the read_product query
    * Inside of Update, use the update_product query
    * Inside of Delete, use the delete_product query
    

## Create endpoints

* Create some endpoints on express.  Create one for each query type.

__Sample Urls__

`GET  /api/products`
`GET  /api/product/:productId`
`PUT  /api/product/:productId?desc=....`
`POST /api/product`
`DELETE /api/product/:productId`

## Wire your endpoints up to your controller

* use the syntax `app.get('/path/to/my/endpoint, controller.methodName)`.

## Test

* You should have a working crud app.  Use postman to insert a few records, modify them, query them, and delete them to make sure it's all working.

## Black Diamond

* Create an angular front end to interact with your app.
* Use express static to serve up your angular files from a public folder
* Create a single view that can insert, read, update, and delete products.
* Create a 2nd page that just reads the products and displays them in a more pretty way (like Jane.com or amazon).


## Copyright

© DevMountain LLC, 2016. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.
