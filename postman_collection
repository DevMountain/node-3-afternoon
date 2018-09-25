{
	"info": {
		"_postman_id": "5e760153-6a73-44ce-b96a-2e0d85a25e0d",
		"name": "sql-massive-node",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "Add product0 to database",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "378ea4e4-78e5-4552-aab9-86f41ec6be6b",
						"type": "text/javascript",
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						]
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"name\": \"name 0\",\n\t\"description\": \"description 0\",\n\t\"price\": 0,\n\t\"image_url\": \"imageurl 0\"\n}"
				},
				"url": {
					"raw": "http://localhost:3000/api/products",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"products"
					]
				}
			},
			"response": []
		},
		{
			"name": "Add product1 to database",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "8f849ff0-0ac2-4a61-863a-7a3a6cc32cf9",
						"type": "text/javascript",
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						]
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"name\": \"name 1\",\n\t\"description\": \"description 1\",\n\t\"price\": 1,\n\t\"image_url\": \"imageurl 1\"\n}"
				},
				"url": {
					"raw": "http://localhost:3000/api/products",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"products"
					]
				}
			},
			"response": []
		},
		{
			"name": "Add product2 to database",
			"event": [
				{
					"listen": "test",
					"script": {
						"id": "49e93129-811f-4293-a353-3c0700f04dff",
						"type": "text/javascript",
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						]
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"name\": \"name 2\",\n\t\"description\": \"description 2\",\n\t\"price\": 2,\n\t\"image_url\": \"imageurl 2\"\n}"
				},
				"url": {
					"raw": "http://localhost:3000/api/products",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"products"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get all products",
			"event": [
				{
					"listen": "test",
					"script": {
						"type": "text/javascript",
						"exec": [
							"const res = JSON.parse( responseBody );",
							"const isArray = Array.isArray( res );",
							"",
							"let products = {",
							"  product0: null,",
							"  product1: null,",
							"  product2: null",
							"};",
							"",
							"var counter = 0;",
							"",
							"function findProduct( x ) {",
							"  let product = products[`product${x}`] = res.find( product => (",
							"    product.name === `name ${x}` &&",
							"    product.description === `description ${x}` &&",
							"    product.price === x &&",
							"    product.image_url === `imageurl ${x}`",
							"  ));",
							"  ",
							"  if ( product ) {",
							"    postman.setGlobalVariable(`productID_${counter}`, product.product_id);",
							"    counter++;",
							"  }",
							"}",
							"",
							"if ( isArray ) {",
							"  postman.setGlobalVariable(`data_length`, res.length);",
							"  let temp = [ 0, 1, 2 ];",
							"  temp.map( x => findProduct(x) );",
							"}",
							"",
							"",
							"tests[ 'API can create and read products' ] = isArray && products.product0 && products.product1 && products.product2;",
							""
						]
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"name\": \"name 2\",\n\t\"description\": \"description 2\",\n\t\"price\": 2,\n\t\"imageurl\": \"imageurl 2\"\n}"
				},
				"url": {
					"raw": "http://localhost:3000/api/products",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"products"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get specific product",
			"event": [
				{
					"listen": "test",
					"script": {
						"type": "text/javascript",
						"exec": [
							"const res = JSON.parse( responseBody );",
							"const isArray = Array.isArray( res );",
							"const resLength = res.length === 1;",
							"let hasAllProps = true;",
							"",
							"function hasProp( prop ) {",
							"  if ( !res[0].hasOwnProperty( prop ) ) {",
							"    hasAllProps = false;",
							"  }",
							"}",
							"",
							"const temp = [ 'name', 'description', 'price', 'image_url' ];",
							"temp.map( prop => hasProp( prop ) );",
							"",
							"tests[ 'API can read a specific product' ] = isArray && resLength && hasAllProps;"
						]
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"name\": \"name 2\",\n\t\"description\": \"description 2\",\n\t\"price\": 2,\n\t\"imageurl\": \"imageurl 2\"\n}"
				},
				"url": {
					"raw": "http://localhost:3000/api/products/{{productID_0}}",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"products",
						"{{productID_0}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Update a single product",
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": ""
				},
				"url": {
					"raw": "http://localhost:3000/api/products/{{productID_0}}?desc=updated",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"products",
						"{{productID_0}}"
					],
					"query": [
						{
							"key": "desc",
							"value": "updated"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Check for update success",
			"event": [
				{
					"listen": "test",
					"script": {
						"type": "text/javascript",
						"exec": [
							"const res = JSON.parse( responseBody );",
							"const isArray = Array.isArray( res );",
							"const resLength = res.length === 1;",
							"const updatedDescription = res[0].description === \"updated\";",
							"",
							"tests[ 'API can update the description' ] = isArray && resLength && updatedDescription;"
						]
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"name\": \"name 2\",\n\t\"description\": \"description 2\",\n\t\"price\": 2,\n\t\"imageurl\": \"imageurl 2\"\n}"
				},
				"url": {
					"raw": "http://localhost:3000/api/products/{{productID_0}}",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"products",
						"{{productID_0}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete product0 from database",
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": ""
				},
				"url": {
					"raw": "http://localhost:3000/api/products/{{productID_0}}",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"products",
						"{{productID_0}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete product1 from database",
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": ""
				},
				"url": {
					"raw": "http://localhost:3000/api/products/{{productID_1}}",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"products",
						"{{productID_1}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete product2 from database",
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": ""
				},
				"url": {
					"raw": "http://localhost:3000/api/products/{{productID_2}}",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"products",
						"{{productID_2}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Check for delete success",
			"event": [
				{
					"listen": "test",
					"script": {
						"type": "text/javascript",
						"exec": [
							"const res = JSON.parse( responseBody );",
							"const data_length = postman.getGlobalVariable(\"data_length\");",
							"",
							"tests[ 'API can successfully remove products '] = res.length === (data_length - 3);",
							"",
							""
						]
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"name\": \"name 2\",\n\t\"description\": \"description 2\",\n\t\"price\": 2,\n\t\"imageurl\": \"imageurl 2\"\n}"
				},
				"url": {
					"raw": "http://localhost:3000/api/products",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"products"
					]
				}
			},
			"response": []
		}
	]
}