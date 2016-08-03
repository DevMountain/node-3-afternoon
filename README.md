# sql-massive-node

Today we're going to make our first full CRUD back-end.

I'll be referring to this mini project through these instructions : https://github.com/DevMountain/mini-sql-node-massive

## Setup your server

Get your basic server working.  Follow the steps from the mini-project to setup a server :

* Require and setup express and get it listening on a port
* Require MassiveJS and Connect to a database (make a new one, or use one you've already made).
* Add db to our express app, put the massive instance on there and export our app (see the mini-project)

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
    * At the top of the controller (outside the object), get the db object off of our express app (see mini-project)
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

* Get any information you need off of the query parameters, query, or body and pass them into your controller
* You will need to add parameters in your controller functions to receive these values.

## Test

* You should have a working crud app.  Use postman to insert a few records, modify them, query them, and delete them to make sure it's all working.

## Black Diamond

* Create an angular front end to interact with your app.
* Use express static to serve up your angular files from a public folder
* Create a single view that can insert, read, update, and delete products.
* Create a 2nd page that just reads the products and displays them in a more pretty way (like Jane.com or amazon).


## Copyright

© DevMountain LLC, 2016. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.
