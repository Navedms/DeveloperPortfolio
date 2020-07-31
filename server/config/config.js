  const config = {
      production: {
          SECRET: process.env.SECRET,
          DATABASE: process.env.MONGODB_URI
      },
      default: {
          SECRET: 'DeveloperPortfolio123456',
          DATABASE: 'mongodb://localhost:27017/developerPortfolio'
      }
  }

  exports.get = function get(env) {
      return config[env] || config.default
  }