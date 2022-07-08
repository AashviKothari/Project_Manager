const express = require('express');

const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
require('dotenv').config();
//connect to DB
const connectDB = require('./config/db')
const colors = require('colors');
const cors = require('cors')
const port = process.env.PORT || 5000; //if not env then runs on 5000


const app = express();
//connect to DB
connectDB();

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
}))

app.listen(port, console.log(`server running on ${port}`));

