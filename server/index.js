require('dotenv').config();
const { processExpression } = require('@vue/compiler-core');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const PORT = process.env.PORT || 5000;
const DEVMode =  process.env.NODE_ENV === 'development' ;

const app = express();


app.use('/graphql', graphqlHTTP({
    schema : schema,
    graphiql : DEVMode,
}))

app.listen(PORT, console.log(`Server starting.., on port : ${PORT}`));