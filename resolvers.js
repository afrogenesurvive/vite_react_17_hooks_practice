const queryResolvers = require('./queryResolvers');
const mutationResolvers = require('./mutationResolvers');

const rootResolver = {
    ...queryResolvers,
    ...mutationResolvers,
  };
  
  module.exports = rootResolver;