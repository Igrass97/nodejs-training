# SQL vs NoSQL

Up until this module we stored data in memory (accessible on all request and volatile) and in json files (too slow !).
We need a database to store the data efficiently.
We need to choose between SQL and NoSQL databases

# SQL

SQL is based in Tables. (users, products)
In each Table we have columns (id, name, email, description)
We fill data in these fields, that data is known as record or row
We can define relations between different tables, for example: A Order table can be a relation between User and Products

## Relations

User: id, email, name, etc
Product: id, name, description, etc
Order: id, user_id, product_id

The relations can be: One to one, One to many or Many to many
Tables are connected

## Data schema

We have a strong data schema, for each table we have a strict structure (which fields do we have and which type of data is each field)
All data in the table must fit the schema

## SQL Queries

Commands we use to interact with the database
`SELECT * FROM users WHERE age > 28`

# NoSQL

Here, instead of tables we have collections.
In a collection we have documents (they look like JSON).

NoSQL doesn't have a strict schema, you can have different data structures inside a same collection.

Collections aren't connected, we follow the approach of "duplicating" data.

    user: {
      id: 1,
      name: 'pedro'
    }

    product: {
      id: 0,
      name: 'RTX 3080'
    }

    order: {
      user: { id: 1, name: 'Pedro'},
      products: [{id: 0, name: 'RTX 3080'}]
    }

One of the huge advantages of this, is avoiding joining tables, only by retrieving the order collection we can have all the data we need (performance)

# Horizontal Scaling

You can add more servers to hold the data, this can be complex because the data needs to be merged in one database when querying
This can be very hard with SQL databases
Easy with NoSQL databases

# Vertical Scaling

Improve server capacity / hardware to manage larger databases
This is easy with SQL databases
Easy with NoSQL databases
