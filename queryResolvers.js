const queryResolvers = {
  Query: {
    Hello: async (args) => {
      console.log("Resolver: cronTest...",args);
      // try {
      //   return
      // } catch (err) {
      //   throw err;
      // }
    }
  }
}

module.exports = queryResolvers;