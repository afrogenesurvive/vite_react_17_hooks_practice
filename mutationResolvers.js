const mutationResolvers = {
  Mutation: {
    createUser: async (args) => {
      console.log("Resolver: cronTest...",args);
      // try {
      //   return
      // } catch (err) {
      //   throw err;
      // }
    }
  }
}

module.exports = mutationResolvers;