const queryResolvers = {
  Query: {
    // Hello: async (args) => {
    Hello: async (req) => {
      console.log("Resolver: cronTest...");
      try {
        return "sup?"
      } catch (err) {
        throw err;
      }
    }
  }
}

module.exports = queryResolvers;