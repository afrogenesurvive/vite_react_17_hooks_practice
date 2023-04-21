import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';

import typeDefs from './schema.js';
import resolvers from './resolvers.js';

const app = express();
const httpServer = http.createServer(app);

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   if (req.method === 'OPTIONS') {
//     return res.sendStatus(200);
//   }
//   next();
// });

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();



app.use(
  cors(),
  bodyParser.json(),
  expressMiddleware(server),
);

// --------------


// app.use(
//   cors(),
//   bodyParser.json(),
// );

// // Add the Apollo Server middleware to the Express app
// app.use(expressMiddleware(server));





await new Promise((resolve) => httpServer.listen({ port: 8000 }, resolve));
console.log(`🚀 Server ready at http://localhost:8000`);