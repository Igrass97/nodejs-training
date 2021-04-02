# Sequelize

It's an ORM (Object relational mapping library).
It runs al the SQL code and maps it to JS object behind the scenes.
We don't have to write SQL code on our own.

We have a JS model, this is mapped to a SQL table by sequelize.

## Core concepts

### Models

e.g. User, products

### Instances

const user = User.build()

### Queries

User.findAll()

### Associations

User.hasMany(Product)
