<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

In this project, we are going to make our first full CRUD back-end that uses a database.

## Step 1

### Summary

In this step, we are going to create a bare-bones server.

### Instructions

* Run `npm init -y`.
* Use npm to install `express`, `dotenv` and `massive`.
* Create a `.env` file.
  * Define a variable inside named `SERVER_PORT` and set it to `3000`.
* Create a `.gitignore` to ignore the `node_modules` folder and the `.env` file.
* Create an `index.js` file.
* Require all the packages that we installed.
* Get your server listening on port `3000`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening a new terminal window and `cd` into the project. Let's create a `package.json` file by running `npm init -y`. Using the `-y` flag, we'll get a package.json file with all the default values. Now that we have a `package.json` file, we can use `npm install` to install packages to it. Run `npm install express massive dotenv` to get all the packages we'll need for this project.

After that is finished, we can see it created a `node_modules` folder. We never want to include this folder on GitHub, so let's create a `.gitignore` that will ignore `node_modules`. Create a file and name it `.env`. This file also needs to be included in the `.gitignore`. Inside this file we will set up our port. Create a variable with the name `SERVER_PORT` and set it equal to 3000.

```
SERVER_PORT = 3000
```

After that, we're ready to start creating our server. Create an `index.js` file and `require` all the packages we install at the top.

```js
require('dotenv').config()
const express = require('express');
const massive = require('massive');
```

Now that our `index.js` file has access to all our packages, let's create a basic server. We'll begin by saving `express()` to a variable called `app`.

```js
const app = express();
```

Next we will destructure the `SERVER_PORT` variable off of `process.env`.

```js
const { SERVER_PORT } = process.env;
```

Then, we'll want to use our `express.json` middleware.

```js
app.use(express.json());
```

Finally, we'll want to tell the server to listen on port `3000` using the variable from our `.env` and use a `console.log` to tell us when it is listening.

```js
app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}.`);
});
```

</details>

### Solution

<details>

<summary> <code> .gitignore </code> </summary>

```
node_modules
.env
```

</details>

<details>

<summary> <code> index.js </code> </summary>

```js
require("dotenv").config();
const express = require("express");
const massive = require("massive");

const app = express();

const { SERVER_PORT } = process.env;

app.use(express.json());

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}.`);
});

```

</details>

## Step 2

### Summary

In this step, we are going to add massive to the server so we can connect to a database.

### Instructions

* Open the `.env` file and create a variable called `CONNECTION_STRING` that equals the URI connection string from your Heroku database.
  * Make sure to add `?ssl=true` at end of your connection string.
* Use `massive` and the `CONNECTION_STRING` to establish a connection.
* In the `.then` callback from `massive`, set `db` on app to equal the database instance.
* Make sure to add a `.catch()` with a callback function. 
* In the callback of the `.catch`, `console.log` the error that would be received if the request was rejected.

<details>

<summary> Detailed Instructions </summary>

<br />

Now that we have a basic node server ready to go, let's modify it to connect to a postgres database. Open the `.env` file and create a variable called `CONNECTION_STRING` that equals the URI connection string from your Heroku database, it should look something like this `postgres://username:password@host/dbname?ssl=true`.

Then destructure `CONNECTION_STRING` off of `process.env` in the server. Using the `CONNECTION_STRING`, we can invoke `massive` and pass it in as the first argument. This will return a `promise`.

```
CONNECTION_STRING=postgres://username:password@host/dbname?ssl=true
```

```js
const { SERVER_PORT, CONNECTION_STRING } = process.env;
```

```js
massive(CONNECTION_STRING);
```

We'll want to execute some logic when the promise is fulfilled, so let's chain a `.then` to it. Be sure to capture the database instance in the first parameter.

```js
massive(CONNECTION_STRING).then(dbInstance => {});
```

Now that we have the `dbInstance`, we can set it onto `app`. Let's have our function return `app.set('db', dbInstance)`.

```js
massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set('db', dbInstance);
  });
```

Finally, we need to add a `.catch` so that we can `console.log` any error we might receive. Do so by chaining `.catch` after the `.then`. The `.catch` takes a callback function. Name the callback function parameter `err`. If `.catch` is invoked, `err` will be the error that was received. Add a `console.log` to log the error.

```js
massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));
```

</details>

### Solution

<details>

<summary> <code> index.js </code> </summary>

```js
require("dotenv").config();
const express = require("express");
const massive = require("massive");

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.use(express.json());

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}.`);
});

```

</details>

## Step 3

### Summary

In this step, we are going to create our table and the `.sql` files we'll need to preform operations on our data. The schema for our table will look like:

* product_id - Serial Primary Key
* name - varchar(40)
* description - varchar(80)
* price - integer
* image_url - text

Note: SQLTabs may highlight `name` and `description`. Use them as your column names anyway, otherwise your Postman tests will fail.

### Instructions

* Create a `product` table in your Heroku database.
* Create a folder called `db`.
  * Create a `create_product.sql` file.
  * Create a `read_products.sql` file.
  * Create a `read_product.sql` file.
  * Create a `update_product.sql` file.
  * Create a `delete_product.sql` file.
* `create_product.sql`:
  * The SQL should be able to add a new product to the `products` table.
  * The SQL should have four parameters ( name, description, price, image_url ).
* `read_products.sql`:
  * The SQL should be able to return all products from the `product` table.
* `read_product.sql`:
  * The SQL should be able to return a specific product from the `product` table.
  * The SQL should use a parameter to find the product whose `product_id` matches.
* `update_product.sql`:
  * The SQL should be able to update the description of a specific product from the `product` table.
  * The SQL should use a parameter to find the product whose `product_id` matches.
  * The SQL should use a parameter to update the value of the `description`.
* `delete_product.sql`:
  * The SQL should be able to delete a specific product from the `product` table.
  * The SQL should use a parameter to find the product whose `product_id` matches.

<details>

<summary> Detailed Instructions </summary>

<br />

Now that we have a method of connecting to our database and have an instance ready to go on `app`, we are ready to start creating the `sql` files that will interact with our database and a `products` table. Let's begin by creating a `products` table that follows the schema in the summary. The final syntax will look like:

```sql
CREATE TABLE product (
  product_id SERIAL PRIMARY KEY NOT NULL,
  name varchar(40) NOT NULL,
  description varchar(80) NOT NULL,
  price integer NOT NULL,
  image_url text NOT NULL
);
```

Now that we have a `product` table, we'll make five `sql` files. One for `creating` products; one for `reading` all products; one for `reading` a specific product; one for `updating` products; and one for `deleting` products. Let's create a folder called `db`. This is where we'll store our `sql` files that we can execute later using the database instance.

Inside the `db` folder, let's create a file called `create_product.sql`. This `sql` file will be responsible for creating a new product using four parameters. The four parameters are `name`, `description`, `price`, and `image_url`. To add something to a database we use the following syntax: `INSERT INTO Table ( column1, column2 ) VALUES ( value1, value2 );` The values we'll change are `Table`, `column`, and `value`. Since we want to insert into the `product` table, we'll change `Table` to `product`. Since we are updating the `name`, `description`, `price`, and `image_url`, we'll use those as the columns. And since we are using parameters for the values, we'll use `$1`, `$2`, `$3`, and `$4` as the values. The final syntax will look like:

```sql
INSERT INTO product ( name, description, price, image_url ) VALUES ( $1, $2, $3, $4 );
```

Now let's move on to `read_products.sql`. Create a file in the `db` folder called `read_products.sql`. This `sql` file will be responsible for reading all products from the database. To read all data from a database we use the following syntax: `SELECT * FROM Table`. Since we are working with the `product` table, we'll change `Table` to `product`. The final syntax will look like:

```sql
SELECT * FROM product;
```

Now let's move on to `read_product.sql`. Create a file in the `db` folder called `read_product.sql`. This file will be very similar to `read_products.sql`, however we need to add a where statement so we don't get all the products. We'll want to use a parameter so we can dynamically select a product by `product_id`. We can use a where statement with the following syntax: `WHERE column1 = value`. Since we are looking for a product by ID, we'll change `column1` to `product_id`. And since we are using a parameter for the ID, we'll change `value` to `$1`. The final syntax will look like:

```sql
SELECT * FROM product WHERE product_id = $1;
```

Now let's move on to `update_product.sql`. Create a file in the `db` folder called `update_product.sql`. This `sql` file will be responsible for updating the description of a product by ID. To update data from a database we use the following syntax: `UPDATE Table SET column1 = value1 WHERE condition`. Since we are working with the `product` table we'll change `Table` to `product`. Since we are updating the description dynamically we'll set `column1` to `description` and `value1` to `$2`. And since we are updating products by ID we'll set `condition` to `product_id = $1`. The order of `$1` and `$2` doesn't matter as long as you following the same order in the `controller` file. I personally prefer `(id, value)` instead of `(value, id)`. The final syntax will look like:

```sql
UPDATE product SET description = $2 WHERE product_id = $1;
```

Now let's move on to `delete_product.sql`. Create a file in the `db` folder called `delete_product.sql`. This `sql` file will be responsible for deleting a specific product by ID. To delete data from a database we use the following syntax: `DELETE FROM Table WHERE condition`. Since we are working with the `product` table, we'll change `Table` to `product`. Since we are deleting by product ID, we'll change `condition` to `product_id = $1`.
The final syntax will look like:

```sql
DELETE FROM product WHERE product_id = $1;
```

</details>

### Solution

<details>

<summary> <code> CREATE TABLE product </code> </summary>

```sql
CREATE TABLE product (
  product_id SERIAL PRIMARY KEY NOT NULL,
  name varchar(40) NOT NULL,
  description varchar(80) NOT NULL,
  price integer NOT NULL,
  image_url text NOT NULL
);
```

</details>

<details>

<summary> <code> SQL </code> </summary>

<details>

<summary> <code> create_product.sql </code> </summary>

```sql
INSERT INTO product ( name, description, price, image_url ) VALUES ( $1, $2, $3, $4 );
```

</details>

<details>

<summary> <code> read_products.sql </code> </summary>

```sql
SELECT * FROM product;
```

</details>

<details>

<summary> <code> read_product.sql </code> </summary>

```sql
SELECT * FROM product WHERE product_id = $1;
```

</details>

<details>

<summary> <code> update_product.sql </code> </summary>

```sql
UPDATE product SET description = $2 WHERE product_id = $1;
```

</details>

<details>

<summary> <code> delete_product.sql </code> </summary>

```sql
DELETE FROM product WHERE product_id = $1;
```

</details>

</details>

## Step 4

### Summary

In this step, we will create a `products_controller.js` file that will handle the logic of interacting with the database.

### Instructions

* Create a `products_controller.js` file.
* Use `module.exports` to export an object with five methods.
  * `create`, `getOne`, `getAll`, `update`, and `delete`.
* Inside of each method, access the database instance.
* Inside of each method, use the correct SQL file.
  * `create` -> `create_product.sql`.
  * `getOne` -> `read_product.sql`.
  * `getAll` -> `read_products.sql`.
  * `update` -> `update_product.sql`.
  * `delete` -> `delete_product.sql`.
* Don't worry about the parameter(s) in this step.
* `create`, `update`, and `delete` should send status 200 on success and status 500 on failure with a message about how something went wrong.
* `getOne` should send status 200 and the product on success and status 500 on failure with a message about how something went wrong (you can chose your own phrasing). Make sure to log the error to your console so you can read it if anything goes wrong.
* `getAll` should send status 200 and the products on success and status 500 on failure with a message about how something went wrong (you can chose your own phrasing). Make sure to log the error to your console so you can read it if anything goes wrong.

<details>

<summary> Detailed Instructions </summary>

<br />

Now that we have all the `sql` files we'll need to interact with our database, let's create a controller that will execute the `sql`. Create a file called `products_controller.js`. In this file, use `module.exports` to export an `object` with five methods. All methods should capture `req`, `res`, and `next` and create a variable for the database instance off of `req.app`.

```js
module.exports = {
  create: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
  },

  getOne: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
  },

  getAll: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
  },

  update: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
  },

  delete: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
  }
};
```

Now that our methods have access to the `dbInstance` we can execute our sql files by chaining on `.file_name`. For example, if I wanted to execute `read_product` I would use `dbInstance.read_product()`. Knowing this we can execute our sql files in every method. Chain a `.then` to use `res` to `sendStatus` 200 and chain a `.catch` to use `res` to send status 500 with a message about how something went wrong (you can chose your own phrasing). Make sure to log the error to your console so you can read it if anything goes wrong. The `getOne` and `getAll` method should send `product` and `products` on success.

```js
module.exports = {
  create: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.create_product()
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  },

  getOne: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_product()
      .then( product => res.status(200).send( product ) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  },

  getAll: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_products()
      .then( products => res.status(200).send( products ) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  },

  update: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.update_product()
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  },

  delete: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.delete_product()
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  }
};
```

We'll worry about how to use parameters after we configure our routes. For right now, this is all we need to do.

</details>

### Solution

<details>

<summary> <code> products_controller.js </code> </summary>

```js
module.exports = {
  create: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.create_product()
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  },

  getOne: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_product()
      .then( product => res.status(200).send( product ) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  },

  getAll: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_products()
      .then( products => res.status(200).send( products ) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  },

  update: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.update_product()
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  },

  delete: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.delete_product()
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  }
};
```
</details>

## Step 5

### Summary

In this step, we will create endpoints that will call the methods on our controller. We will also require our controller in `index.js`.

### Instructions

* Create the following endpoints: ( `request method`, `url`, `controller method` )
  * `GET` - `/api/products` - `getAll`.
  * `GET` - `/api/products/:id` - `getOne`.
  * `PUT` - `/api/products/:id` - `update`.
  * `POST` - `/api/products` - `create`.
  * `DELETE` - `/api/products/:id` - `delete`.

### Solution

<details>

<summary> <code> index.js </code> </summary>

```js
require("dotenv").config();
const express = require("express");
const massive = require("massive");
const products_controller = require("./products_controller");

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.use(express.json());

app.post('/api/products', products_controller.create);
app.get('/api/products', products_controller.getAll);
app.get('/api/products/:id', products_controller.getOne);
app.put('/api/products/:id', products_controller.update);
app.delete('/api/products/:id', products_controller.delete);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}.`);
});

```

</details>


## Step 6

### Summary

In this step, we'll modify the controller to use parameters or the request body.

### Instructions

* Open `products_controller.js`.
* Modify `update` to use `id` from `req.params` and `desc` from `req.query`.
* Modify `getOne` to use `id` from `req.params`.
* Modify `delete` to use `id` from `req.params`.
* Modify the `create` to use `name`, `description`, `price`, and `image_url` from the request body.
* Something to remember, you do not need to use an array if you have only one argument to pass to the massive method.

<details>

<summary> Detailed Instructions </summary>

<br />

Now that we know how our routes are configured, we can update our controller to reflect those changes. We'll modify `update` to use `id` from the request parameters and the `desc` from the request query. We'll modify `getOne` to use `id` from the request parameters. We'll modify `delete` to use `id` from the request parameters. And we'll modify `create` to use `name`, `description`, `price` and `image_url` from the request body. When adding parameters to sql, all you have to do is pass in an array as the first argument and then the element(s) in the array map to `$1`, `$2`, etc... For example: `dbInstance.create_product([ name, description, price, image_url ])`, name is `$1`, description is `$2`, price is `$3`, and image_url is `$4`. Remember, if you have only one argument, you do not need to pass it in an array.

```js
module.exports = {
  create: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { name, description, price, image_url } = req.body;

    dbInstance.create_product([ name, description, price, image_url ])
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  },

  getOne: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { id } = req.params;

    dbInstance.read_product( id )
      .then( product => res.status(200).send( product ) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  },

  getAll: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_products()
      .then( products => res.status(200).send( products ) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  },

  update: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params, query } = req;

    dbInstance.update_product([ params.id, query.desc ])
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  },

  delete: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { id } = req.params;

    dbInstance.delete_product( id )
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  }
};
```

</details>

### Solution

<details>

<summary> <code> products_controller.js </code> </summary>

```js
module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { name, description, price, image_url } = req.body;

    dbInstance.create_product([name, description, price, image_url])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
        console.log(err)
      });
  },

  getOne: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { id } = req.params;

    dbInstance.read_product(id)
      .then(product => res.status(200).send(product))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
        console.log(err)
      });
  },

  getAll: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_products()
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
        console.log(err)
      });
  },

  update: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { params, query } = req;

    dbInstance.update_product([params.id, query.desc])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
        console.log(err)
      });
  },

  delete: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { id } = req.params;

    dbInstance.delete_product(id)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
        console.log(err)
      });
  }
};
```

</details>

## Step 7

### Summary

In this step, we'll test to make sure all the endpoint are working.

### Instructions

* Import the provided `postman_collection` into `Postman` and make sure all the tests pass.

### Solution

<img src="https://github.com/DevMountain/sql-massive-node/blob/solution/readme-assets/1.png" />

## Black Diamond

* Create a React front end to interact with your app.
* Use express static to serve up your React files from a build folder.
* Create a single view that can insert, read, update, and delete products.
* Create a second view that just reads the products and displays them in a pretty way (like Jane.com or amazon).

## Resources

<details>

<summary> <code> Massive </code> </summary>

* [Database Functions](https://massivejs.org/docs/functions-and-scripts#database-functions)
* [Express Example](https://massivejs.org/docs/framework-examples#express)
 _Note: In the example, they break up the connection string into pieces. We just use one long connection string_

</details>

<details>

<summary> <code> SQL </code> </summary>

* [SQL Teaching](http://www.sqlteaching.com/)
* [SQL Bolt](http://sqlbolt.com/)

</details>



## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p>
