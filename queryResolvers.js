const queryResolvers = {
  Query: {
    // Hello: async (args) => {
    Hello: async (req) => {
      console.log("Resolver: Hello..");
      try {
        return "sup foo?"
      } catch (err) {
        throw err;
      }
    }
  }
}

module.exports = queryResolvers;